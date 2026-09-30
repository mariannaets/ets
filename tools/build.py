#!/usr/bin/env python3
"""
Build the static pages of the site.  Run from the repo root after ANY content change:

    python3 tools/build.py

What it does
  * reads the content (projects, news…) straight from js/main.js
  * writes index.html + one folder per page (projects/coaf/index.html, news/…, about/ …)
    so every page has its own address that survives refresh and sharing
  * each page gets its own <title>, description and preview image for
    Telegram / WhatsApp / LinkedIn / Google (images/og/*.jpg, 1200x630)
  * writes 404.html, sitemap.xml and robots.txt

When the site moves to its own domain, change SITE_URL below and run the script again.
Needs: node, python3, Pillow (pip install pillow).
"""
import html, json, os, shutil, subprocess, sys
from PIL import Image

SITE_URL = "https://mariannaets.github.io/ets/"   # later: "https://electricarchitects.com/"
SITE_NAME = "Electric Architects"
SITE_DESC = "Electric Architects — architectural and urban design studio based in Yerevan, Armenia."

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "/" + SITE_URL.split("://", 1)[1].split("/", 1)[1]           # "/ets/" or "/"
GENERATED_DIRS = ["projects", "news", "people", "about", "contact"]
CATS = {"architecture": "architecture", "urban design": "urban-design", "interior": "interior", "exhibition": "exhibition"}

# ---------- 1. read content from js/main.js ----------
EXTRACT = r"""
const fs = require("fs"), vm = require("vm");
const any = new Proxy(function () {}, { get: (t, k) => (k === Symbol.toPrimitive ? () => "" : any), apply: () => any, construct: () => any, set: () => true });
const stub = (o) => new Proxy(o, { get: (t, k) => (k in t ? t[k] : any) });
const ctx = { window: stub({ matchMedia: () => ({ matches: false, addEventListener() {} }) }), document: stub({ baseURI: "http://localhost/" }), location: { pathname: "/", href: "" }, history: any, navigator: any,
  requestAnimationFrame: () => 0, setTimeout: () => 0, clearTimeout: () => 0, setInterval: () => 0, console, URL,
  Image: function () {} };
vm.createContext(ctx);
const code = fs.readFileSync(process.argv[1], "utf8").replace(/\n\/\/ =+\n\/\/ START[\s\S]*$/, "");
vm.runInContext(code + "\n;globalThis.__DATA = { PROJECTS, TOP_CARDS, NEWS_ITEMS, ABOUT_TEXT };", ctx);
process.stdout.write(JSON.stringify(ctx.__DATA));
"""
data = json.loads(subprocess.check_output(["node", "-e", EXTRACT, os.path.join(ROOT, "js/main.js")]))
PROJECTS, CARDS, NEWS = data["PROJECTS"], data["TOP_CARDS"], data["NEWS_ITEMS"]
card = {c["id"]: c for c in CARDS}

# ---------- 2. preview images (1200x630 jpg) ----------
def og_image(src, name):
    if not src:
        return None
    out = f"images/og/{name}.jpg"
    src_p, out_p = os.path.join(ROOT, src), os.path.join(ROOT, out)
    if not os.path.exists(src_p):
        return None
    if not os.path.exists(out_p) or os.path.getmtime(out_p) < os.path.getmtime(src_p):
        os.makedirs(os.path.dirname(out_p), exist_ok=True)
        im = Image.open(src_p).convert("RGB")
        w, h = 1200, 630
        s = max(w / im.width, h / im.height)
        im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
        l, t = (im.width - w) // 2, (im.height - h) // 2
        im.crop((l, t, l + w, t + h)).save(out_p, "JPEG", quality=82, optimize=True, progressive=True)
    return out

def first_slide(pid):
    c = card.get(pid)
    if c and c.get("slides"):
        return c["slides"][0]
    p = PROJECTS.get(pid, {})
    return (p.get("photos") or [None])[0]

def short(text, n=160):
    text = " ".join(str(text or "").split())
    return text if len(text) <= n else text[: n - 1].rsplit(" ", 1)[0] + "…"

# ---------- 3. page list ----------
pages = []  # (path, title, description, image)
home_img = og_image(first_slide(next((c["id"] for c in CARDS if c.get("home")), CARDS[0]["id"] if CARDS else None)), "home")
pages.append(("", SITE_NAME, SITE_DESC, home_img))
pages.append(("projects/", f"Projects — {SITE_NAME}", "All projects by Electric Architects: architecture, urban design, interior and exhibitions.", home_img))
used = {c for p in PROJECTS.values() for c in str(p.get("cat", "")).split(",")}
for cat, slug in CATS.items():
    if cat in {u.strip() for u in used}:
        pages.append((f"projects/{slug}/", f"{cat.title()} — {SITE_NAME}", f"{cat.title()} projects by Electric Architects.", home_img))
for pid, p in PROJECTS.items():
    if p.get("placeholder") or p.get("hidden"):
        continue
    slug = p.get("slug") or pid
    pages.append((f"projects/{slug}/", f"{p['title']} — {SITE_NAME}", short(p.get("desc")), og_image(first_slide(pid), slug)))
pages.append(("news/", f"News — {SITE_NAME}", "News from Electric Architects.", home_img))
for n in NEWS:
    img = og_image(n.get("image"), "news-" + n["id"])
    pages.append((f"news/{n['id']}/", f"{n['title']} — {SITE_NAME}", short(n.get("text")), img or home_img))
pages.append(("people/", f"People — {SITE_NAME}", "The team of Electric Architects.", home_img))
pages.append(("about/", f"About — {SITE_NAME}", short(data.get("ABOUT_TEXT")), home_img))
pages.append(("contact/", f"Contact — {SITE_NAME}", "Get in touch with Electric Architects, Yerevan.", home_img))

# ---------- 4. write html ----------
def page_html(path, title, desc, img):
    e = lambda s: html.escape(str(s), quote=True)
    url = SITE_URL + path
    img_tags = f"""<meta property="og:image" content="{e(SITE_URL + img)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:image" content="{e(SITE_URL + img)}">""" if img else ""
    return f"""<!DOCTYPE html>
<!-- generated by tools/build.py — edit the template there, not this file -->
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<base href="{BASE}">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{e(url)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{SITE_NAME}">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{e(url)}">
{img_tags}
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<div id="app"></div>
<script src="js/main.js"></script>
</body>
</html>
"""

for d in GENERATED_DIRS:
    shutil.rmtree(os.path.join(ROOT, d), ignore_errors=True)
for path, title, desc, img in pages:
    out = os.path.join(ROOT, path, "index.html")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w") as f:
        f.write(page_html(path, title, desc, img))
with open(os.path.join(ROOT, "404.html"), "w") as f:
    f.write(page_html("", SITE_NAME, SITE_DESC, home_img))
with open(os.path.join(ROOT, "sitemap.xml"), "w") as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
    f.write("".join(f"  <url><loc>{html.escape(SITE_URL + p[0])}</loc></url>\n" for p in pages))
    f.write("</urlset>\n")
with open(os.path.join(ROOT, "robots.txt"), "w") as f:
    f.write(f"User-agent: *\nAllow: /\nSitemap: {SITE_URL}sitemap.xml\n")
print(f"built {len(pages)} pages for {SITE_URL}")
for p in pages:
    print("  ", p[0] or "(home)", "|", p[1])
