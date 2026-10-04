# Electric Architects — website

Live: https://www.electricarchitects.com/

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
`SITE_URL` in `tools/build.py` holds the site address; change it only if the domain changes, then run the build.
