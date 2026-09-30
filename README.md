# Electric Architects — website

Live: https://mariannaets.github.io/ets/ (later: https://electricarchitects.com/)

## Editing content
All texts, projects, news and team live at the top of `js/main.js` (section **CONTENT**).
Images go to `images/` as `.webp`.

## After ANY content change — rebuild the pages
```
python3 tools/build.py
```
This regenerates `index.html` and one folder per page (`projects/coaf/`, `news/…`, `about/` …)
with its own title, description and preview image (`images/og/`), plus `404.html`, `sitemap.xml`, `robots.txt`.
Do not edit those generated files by hand.

## Moving to the own domain
In `tools/build.py` set `SITE_URL = "https://electricarchitects.com/"`, run the build, commit.
