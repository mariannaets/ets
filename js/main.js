// ============================================================
// CONTENT — edit texts, news, team and projects here
// ============================================================

const DESC = "electric architects, along with tumo centre for creative technologies has been appointed as curators and authors of armenian national pavilion at venice biennale of architecture 2025. the concept evolves around training a new ai model with 3d scanned files of armenian cultural heritage in order to create a new mechanism which allows to endlessly interpret or reinvent these heritage artefacts into new models and shapes. this project refers to preservation of lost and endangered monuments while allowing their further resilience and development via modern technologies.";

const ABOUT_TEXT = "electric architects is a yerevan-based studio working across architecture, interiors and urban design. we treat every commission as a chance to test a new idea about materials, space or context — from a single bar interior to a masterplan. the studio is small by choice: every project passes through the same two hands, from first sketch to last detail on site.";

const NEWS_FONTS = ["'PP Gatwick',sans-serif", "'PP Telegraf',sans-serif", "'PP Hatton',serif", "'PP Right Serif',serif", "'PP Stellar',sans-serif", "'PP Lettra Mono',monospace"];
const NEWS_ITEMS = [
  { id: "towers-topped", title: "Sunday towers, topped out", date: "march 2026", titleFont: NEWS_FONTS[0], author: "Aram Sargsyan",
    text: "construction on sunday towers has reached its final floor. the residential complex reinterprets yerevan's tuff-stone facades through a contemporary lens, pairing red volcanic stone with deep-set loggias.",
    image: "images/news-spread.png", imgSize: "100% 112.565%", imgPos: "50% 0%" },
  { id: "biennale-selected", title: "selected for venice biennale 2025", date: "january 2026", titleFont: NEWS_FONTS[2], author: "Lucine Hakobyan",
    text: DESC, image: "images/hero-bar.png", imgSize: "cover", imgPos: "100% 55.267%" },
];

const TEAM = [
  { name: "Marianna Karapetyan", role: "founder / architect", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  { name: "Karen", role: "partner / interiors", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  { name: "Maria", role: "project architect", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  { name: "Name", role: "urban design lead", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  { name: "Name", role: "architectural designer", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
];

const PROJECT_CAPTIONS = {
  simona: [
    "brass fittings and low, warm light carry the bar's material palette from entrance to back room.",
    "the counter is cut from a single block of dark terrazzo, poured on site.",
    "existing structural columns were kept exposed and became part of the seating layout.",
    "a narrow mezzanine adds seating without touching the main volume below.",
    "custom joinery throughout was built by local workshops in yerevan.",
  ],
  barevdzez: [
    "the pavilion structure is built from modular ribs, allowing full disassembly after the biennale.",
    "projection surfaces double as structural cladding, reducing material use.",
    "the ai-generated forms are 3d printed in a biodegradable composite.",
    "lighting was designed to shift the reading of the space between day and night.",
  ],
};

const PROJECTS = {
  simona: { cat: "interior", title: "simona", year: "2026", subtitleOverride: "2026",
    info: { status: "Completed", client: "Private Client", sector: "Interior Design, Hospitality", location: "Yerevan, AM",
      collaborators: "Local Joinery Workshops, Terrazzo Studio", staff: "Aram Sargsyan, Lucine Hakobyan, Davit Ghukasyan" },
    hero: "images/portrait-bw.png", heroPos: "30% 30%",
    second: "images/shopfront.png", secondPos: "50% 55%", desc: DESC },
  barevdzez: { cat: "exhibition", title: "Venice biennale of architecture", year: "2026", titleFont: "'PP Hatton',serif", subtitleOverride: "2026",
    info: { status: "Ongoing", client: "TUMO Centre for Creative Technologies", sector: "Exhibition, Architecture", location: "Venice, IT",
      collaborators: "TUMO Centre for Creative Technologies", staff: "Aram Sargsyan, Mane Petrosyan, Karen Avetisyan" },
    hero: "images/hero-bar.png", heroPos: "100% 55.267%",
    second: "images/portrait-bw.png", secondPos: "30% 40%", desc: DESC },
  towers: { cat: "architecture", title: "sunday towers", year: "2022", titleFont: "'PP Lettra Mono',monospace",
    info: { status: "In construction", client: "Emaar Development UAE", sector: "Architecture", location: "Yerevan, AM",
      collaborators: "General Vlasov", staff: "Marianna Karapetyan, Karen Sheikh, Aram Sargsyan, Mane Petrosyan, Karen Avetisyan" },
    // photos: shown on the project page in this order, at their natural proportions
    photos: ["01","02","03","04","05","06","07","08","09","10","11"].map((n) => `images/towers/project/${n}.webp`),
    desc: "1.4 hectares of a former industrial site in the arabkir district are being transformed into a high-end mixed-use district. six buildings, from 6 to 14 floors, sit above commercial and office spaces on the lower levels. every building has its own distinct architectural character, with careful detailing, stonework and metal cladding. every apartment is designed around the needs of modern living — comfort, and room for social interaction." },
};

const SIMONA_SLIDES = ["images/simona/1.webp","images/simona/2.webp","images/simona/3.webp","images/simona/4.webp","images/simona/5.webp","images/simona/6.webp"];
const BAREVDZEZ_SLIDES = ["images/barevdzez/1.webp","images/barevdzez/2.webp","images/barevdzez/3.webp","images/barevdzez/4.webp","images/barevdzez/5.webp"];
const TOWERS_SLIDES = ["images/towers/1.webp","images/towers/2.webp","images/towers/3.webp","images/towers/4.webp","images/towers/5.webp","images/towers/6.webp"];
const SLIDES_MAP = { simona: SIMONA_SLIDES, barevdzez: BAREVDZEZ_SLIDES, towers: TOWERS_SLIDES };
const catLabel = (c) => c.replace(/\b\w/g, (ch) => ch.toUpperCase());
const PLACEHOLDER_META = [
  ["ph1", "Lake House", "interior", "2022"], ["ph2", "Civic Pavilion", "urban design", "2021"],
  ["ph3", "Red Terraces", "architecture", "2020"], ["ph4", "Glass Atelier", "exhibition", "2019"],
  ["ph5", "Harbor House", "architecture", "2019"], ["ph6", "Studio Loft", "interior", "2022"],
  ["ph7", "Museum Wing", "exhibition", "2021"], ["ph8", "Timber Pavilion", "urban design", "2020"],
  ["ph9", "Coastal Retreat", "interior", "2018"], ["ph10", "Granite Hall", "architecture", "2018"],
  ["ph11", "Paper Gallery", "exhibition", "2017"], ["ph12", "Orchard Villa", "interior", "2017"],
  ["ph13", "Steel Bridge", "urban design", "2016"], ["ph14", "Courtyard House", "architecture", "2016"],
  ["ph15", "Linear Museum", "exhibition", "2015"],
];
const PLACEHOLDER_ITEMS = PLACEHOLDER_META.map(([id, title, cat, year]) => ({ id, title, cat, year }));
PLACEHOLDER_META.forEach(([id, title, cat, year]) => {
  PROJECTS[id] = { cat, title, year, placeholder: true,
    info: { status: "Placeholder", client: "—", sector: catLabel(cat), location: "—", collaborators: "—", staff: "—" },
    desc: DESC };
});

const TOP_CARDS = [
  { id: "towers", cat: "architecture", catLabel: "Architecture", catLabelFont: "'PP Hatton',serif", title: "Sunday Towers", year: "2022",
    slideshow: true, slides: TOWERS_SLIDES, pos: "50% 55%", height: "clamp(360px, 40vw, 600px)", mobileHeight: "85vh" },
  { id: "barevdzez", cat: "exhibition", catLabel: "Exhibition", catLabelFont: "'PP Hatton',serif", title: "Venice biennale of Architecture", year: "2025",
    slideshow: true, slides: BAREVDZEZ_SLIDES, pos: "50% 50%", height: "clamp(360px, 44vw, 660px)", mobileHeight: "85vh" },
  { id: "simona", cat: "interior", catLabel: "Interior", catLabelFont: "'PP Right Serif',serif", title: "Simona", year: "2026",
    slideshow: true, slides: SIMONA_SLIDES, pos: "50% 50%", height: "clamp(360px, 40vw, 600px)", mobileHeight: "85vh" },
];

// ============================================================
// APP — state, navigation, rendering (no content below)
// ============================================================

const MOBILE_MQ = window.matchMedia("(max-width: 720px)");

const state = {
  view: "home", filter: null, yearFilter: null, project: "simona",
  scrolled: false, menuOpen: null,
  isMobile: MOBILE_MQ.matches,
  mobileMenuOpen: false,
};

function navigate(changes) {
  Object.assign(state, changes, { menuOpen: null, mobileMenuOpen: false });
  window.scrollTo(0, 0);
  render();
}
function go(view, filter) { navigate({ view, filter: filter === undefined ? null : filter, yearFilter: null }); }
function openProject(id) { navigate({ view: "project", project: id }); }
function openPost(id) { navigate({ view: "post", post: id }); }
function toggleMobileMenu() { state.mobileMenuOpen = !state.mobileMenuOpen; render(); }

// note: does not escape HTML — content is trusted, written by us
const esc = (s) => String(s);

function cardHtml(c) {
  const h = state.isMobile ? c.mobileHeight : c.height;
  const inner = `
    <div style="position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;justify-content:space-between;${state.isMobile ? "align-items:center;text-align:center;padding:24px;" : `align-items:flex-start;text-align:left;padding:30px 100px 30px var(--pad-left);`}color:#fafafa;">
      <span style="font-family:${c.catLabelFont || "'PP Lettra Mono',monospace"};font-size:22px;line-height:1.4;">${esc(c.catLabel)}</span>
      <span style="font-family:'PP Gatwick',sans-serif;font-weight:600;font-size:clamp(32px,6vw,60px);line-height:1;">${esc(c.title)}</span>
      <span style="font-family:'PP Hatton',serif;font-size:22px;line-height:1.4;">${esc(c.year)}</span>
    </div>`;
  const bg = c.image ? `background-image:url(${c.image});background-position:${c.pos};background-size:cover;` : "";
  let slides = "";
  if (c.slideshow) {
    slides = c.slides.map((src, i) => `<div data-card-id="${c.id}" data-slide-index="${i}" data-slide-total="${c.slides.length}" style="position:absolute;inset:0;background-image:url(${src});background-size:cover;background-position:${c.pos};background-repeat:no-repeat;opacity:0;"></div>`).join("");
  }
  return `<div class="top-card" data-open-project="${c.id}" style="position:relative;width:100%;cursor:pointer;overflow:hidden;background-color:#e5e5e5;background-repeat:no-repeat;height:${h};${bg}">${slides}${inner}</div>`;
}

function titleWrap(title, subtitle, color, titleFont, paddingTop, justify) {
  const pt = paddingTop !== undefined ? paddingTop : (state.isMobile ? 140 : 160);
  const j = justify ? `justify-content:${justify};` : "";
  const style = state.isMobile
    ? `display:flex;flex-direction:column;gap:16px;padding:${pt}px 0 100px;align-items:center;text-align:center;${j}`
    : `display:flex;flex-direction:column;gap:16px;padding:${pt}px 0 100px;${j}`;
  const c = color ? `color:${color};` : "";
  return `<div style="padding-left:${state.isMobile ? "0px" : "var(--pad-left)"};">
    <div style="${style}">
      <span style="font-family:${titleFont || "'PP Gatwick',sans-serif"};font-weight:700;font-size:clamp(32px,6vw,52px);line-height:1.2;${c}">${title}</span>
      ${subtitle ? `<span style="font-size:16px;line-height:1.3;font-family:'PP Stellar',sans-serif;${c}">${subtitle}</span>` : ""}
    </div>
  </div>`;
}

function infoTable(info) {
  const rows = [
    ["Status", info.status], ["Partner", info.client], ["Sector", info.sector],
    ["Location", info.location], ["Collaborators", info.collaborators], ["e / People", info.staff],
  ];
  return `<div style="padding:0;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};">
    ${rows.map(([label, value], i) => `
      <div style="display:grid;grid-template-columns:${state.isMobile ? "1fr" : "calc(var(--pad-news) - var(--pad-left)) 1fr"};align-items:${state.isMobile ? "center" : "stretch"};text-align:${state.isMobile ? "center" : "left"};gap:${state.isMobile ? "4px" : "0px"};padding:20px 0;${i === 0 ? "" : "border-top:1px solid #000;"}">
        <span style="font-family:'PP Telegraf',sans-serif;font-weight:600;font-size:16px;flex-shrink:0;color:#0D0D0E4D;">${esc(label)}</span>
        <span style="font-family:'PP Stellar',sans-serif;font-size:16px;line-height:1.5;color:#0D0D0E;">${esc(value)}</span>
      </div>`).join("")}
  </div>`;
}

function relatedProjectsHtml() {
  const currentCat = PROJECTS[state.project]?.cat;
  let ids = Object.keys(PROJECTS).filter((id) => id !== state.project && PROJECTS[id].cat === currentCat).slice(0, 3);
  if (ids.length < 3) {
    const rest = Object.keys(PROJECTS).filter((id) => id !== state.project && !ids.includes(id));
    ids = [...ids, ...rest.slice(0, 3 - ids.length)];
  }
  const marginX = state.isMobile ? "0px" : "var(--pad-left)";
  const cardH = state.isMobile ? "clamp(220px, 44vw, 320px)" : "clamp(260px, 26vw, 380px)";
  const align = state.isMobile ? "text-align:center;" : "text-align:left;";
  return `<div style="margin:160px 0 0;margin-left:${marginX};margin-right:${marginX};${align}">
    <span style="font-family:'PP Migra',serif;font-size:16px;">related projects</span>
    <div style="display:flex;flex-direction:column;align-items:${state.isMobile ? "center" : "flex-start"};gap:10px;margin-top:30px;">
      ${ids.map((id) => {
        const rp = PROJECTS[id];
        return `<div data-card-fit data-color-card data-color-id="${id}" data-open-project="${id}" class="card-zoom-only" style="position:relative;width:auto;max-width:100%;padding:0 100px;cursor:pointer;overflow:hidden;background-color:#0D0D0E;height:${cardH};">
          <div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;padding:24px;color:#fafafa;">
            <span style="font-family:'PP Lettra Mono',monospace;font-size:16px;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;">${esc(rp.cat)}</span>
            <span style="font-family:${rp.titleFont || "'PP Gatwick',sans-serif"};font-weight:600;font-size:${state.isMobile ? "clamp(28px,7vw,44px)" : "clamp(20px,2.6vw,32px)"};line-height:1.1;${state.isMobile ? "display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal;" : "white-space:nowrap;"}overflow:hidden;text-overflow:ellipsis;" data-fit-title>${esc(rp.title)}</span>
            <span style="font-family:'PP Hatton',serif;font-size:16px;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;">${esc(rp.year)}</span>
          </div>
        </div>`;
      }).join("")}
    </div>
  </div>`;
}

const isActive = (v) => Array.isArray(v) ? v.includes(state.view) : state.view === v;
const navStyle = (v) => isActive(v) ? "opacity:0.5;" : "";

function headerHtml() {
  const mobileNav = `<nav style="display:flex;justify-content:space-between;align-items:center;width:100%;">
    <img data-go="home" src="images/logo-ets-black.svg" alt="e/ts" style="width:70px;height:21px;cursor:pointer;display:block;">
    <span data-toggle-mobile-menu style="font-family:'PP Migra',serif;font-weight:400;font-size:16px;cursor:pointer;">${state.mobileMenuOpen ? "close" : "menu"}</span>
  </nav>`;

  const desktopNav = `<nav style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:40px 24px;width:100%;">
    <img data-go="home" src="images/logo-ets-black.svg" alt="e/ts" style="width:80px;height:24px;cursor:pointer;display:block;">
    <span id="nav-projects" data-go="projects" class="hoverlink" style="font-family:'PP Gatwick',sans-serif;font-weight:700;font-size:18px;line-height:30px;color:#0D0D0E;cursor:pointer;${navStyle(["projects", "project"])}">projects</span>
    <span id="nav-news" data-go="news" class="hoverlink" style="font-family:'PP Telegraf',sans-serif;font-size:18px;line-height:30px;color:#0D0D0E;cursor:pointer;${navStyle(["news", "post"])}">news</span>
    <span id="nav-people" data-go="people" class="hoverlink" style="font-family:'PP Migra',serif;font-style:italic;font-size:18px;line-height:30px;color:#0D0D0E;cursor:pointer;${navStyle("people")}">people</span>
    <span id="nav-about" data-go="about" class="hoverlink" style="font-family:'PP Stellar',sans-serif;font-size:18px;line-height:30px;color:#0D0D0E;cursor:pointer;${navStyle("about")}">about</span>
    <span id="nav-contact" data-go="contact" class="hoverlink" style="font-family:'PP Watch',sans-serif;letter-spacing:1.5px;font-size:18px;line-height:30px;color:#0D0D0E;cursor:pointer;${navStyle("contact")}">contact</span>
  </nav>`;

  return `<header style="position:sticky;top:0;z-index:20;background:#FAFFFD;padding:clamp(20px,5vw,50px) clamp(20px,6vw,100px) 24px;">
    ${state.isMobile && !state.mobileMenuOpen ? mobileNav : ""}
    ${!state.isMobile ? desktopNav : ""}
  </header>`;
}

function mobileMenuHtml() {
  if (!(state.isMobile && state.mobileMenuOpen)) return "";
  const projectsSub = ["architecture", "urban design", "interior", "exhibition"];
  return `<div style="position:fixed;inset:0;z-index:30;background:#FAFFFD;padding:clamp(20px,5vw,50px) clamp(20px,6vw,100px) clamp(20px,6vw,40px);display:flex;flex-direction:column;overflow-y:auto;font-family:'PP Playground',sans-serif;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <img data-go="home" src="images/logo-ets-black.svg" alt="e/ts" style="width:70px;height:21px;cursor:pointer;display:block;">
      <span data-toggle-mobile-menu style="font-family:'PP Migra',serif;font-style:italic;font-size:20px;cursor:pointer;">close</span>
    </div>
    <div style="display:flex;justify-content:space-between;gap:24px;margin-top:80px;font-size:22px;">
      <div style="display:flex;flex-direction:column;gap:18px;font-family:'PP Telegraf',sans-serif;font-weight:700;line-height:1.2;">
        <span data-go="projects" style="cursor:pointer;font-family:'PP Gatwick',sans-serif;${navStyle(["projects", "project"])}">projects</span>
        ${projectsSub.map((key) => `<span data-filter="${key}" style="cursor:pointer;font-size:16px;">${key}</span>`).join("")}
      </div>
      <div style="display:flex;flex-direction:column;gap:18px;text-align:right;font-weight:400;font-family:'PP Right Serif',serif;line-height:1.2;">
        <span data-go="news" style="cursor:pointer;font-family:'PP Stellar',sans-serif;${navStyle(["news", "post"])}">news</span>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:60px;font-size:22px;">
      <span data-go="people" style="font-family:'PP Hatton',serif;font-style:italic;cursor:pointer;font-size:16px;font-weight:800;${navStyle("people")}">people</span>
      <span data-go="about" style="font-family:'PP Gatwick',sans-serif;cursor:pointer;font-size:16px;${navStyle("about")}">about</span>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:60px;font-size:22px;font-weight:700;">
      <a href="mailto:studio@e-ts.am" style="font-family:'PP Frama',sans-serif;color:#0D0D0E;font-size:16px;">email</a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" style="font-family:'PP Stellar',sans-serif;font-style:italic;color:#0D0D0E;font-size:16px;">instagram</a>
    </div>
    <div style="margin-top:60px;font-family:'PP Lettra Mono',monospace;font-size:16px;line-height:1.4;">
      <span style="font-size:16px;text-align:center;">Azatutyan 24/12, Yerevan,<br>Armenia 0014</span>
    </div>
    <div style="flex:1;min-height:40px;"></div>
    <div style="display:flex;justify-content:space-between;align-items:center;font-size:16px;">
      <span data-go="contact" style="cursor:pointer;font-family:'PP Frama',sans-serif;">Time flies</span>
      <span style="font-family:'PP Frama',sans-serif;">2026</span>
    </div>
  </div>`;
}

function heroSubnavHtml() {
  const projectsSub = ["architecture", "urban design", "interior", "exhibition"];
  if (state.isMobile) {
    return `<div style="display:flex;justify-content:space-between;gap:24px;margin-top:40px;">
      <div style="display:flex;flex-direction:column;gap:12px;font-family:'PP Telegraf',sans-serif;font-weight:700;">
        ${projectsSub.map((key) => `<span data-filter="${key}" class="hoverlink" style="font-size:16px;color:#0D0D0E;cursor:pointer;">${key}</span>`).join("")}
      </div>
    </div>`;
  }
  return `<div style="position:relative;height:${projectsSub.length * 34}px;margin-top:8px;">
    <div style="position:absolute;top:0;left:var(--pad-left);display:flex;flex-direction:column;gap:12px;font-family:'PP Telegraf',sans-serif;font-weight:700;">
      ${projectsSub.map((key) => `<span data-filter="${key}" class="hoverlink" style="font-size:16px;color:#0D0D0E;cursor:pointer;">${key}</span>`).join("")}
    </div>
  </div>`;
}

function homeHtml() {
  const cards = TOP_CARDS.filter((c) => !state.filter || c.cat === state.filter);
  const align = state.isMobile ? "text-align:center;" : "text-align:left;";
  return `<main style="padding:0 clamp(20px,6vw,100px);">
    <div id="wrap" style="max-width:1512px;margin:0 auto;">
      ${heroSubnavHtml()}
      ${titleWrap("electric architects", "architectural and urban design studio", null, null, 100)}
      <div style="display:flex;flex-direction:column;gap:10px;">${cards.map((c) => cardHtml(c)).join("")}</div>
      <div style="margin:100px 0 60px;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
        <span data-go="projects" class="backlink" style="font-family:'PP Hatton',serif;font-weight:500;font-size:16px;cursor:pointer;border-bottom:1px solid #000;padding-bottom:4px;">all projects →</span>
      </div>
      ${homeNewsHtml()}
      ${homeAboutHtml()}
      ${homePeopleHtml()}
    </div>
  </main>`;
}

function smallCardsHtml(items) {
  const align = state.isMobile ? "text-align:center;" : "text-align:left;";
  const gapShare = 12;
  const heightPool = ["clamp(380px, 46vw, 560px)", "clamp(460px, 56vw, 680px)", "clamp(320px, 40vw, 480px)", "clamp(420px, 50vw, 600px)"];
  const mobileHeightPool = ["70vw", "95vw", "82vw", "60vw"];
  const shuffle = (arr) => { const a = arr.slice(); for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a; };
  const heights = shuffle(heightPool);
  const mobileHeights = shuffle(mobileHeightPool);
  const titleFonts = ["'PP Gatwick',sans-serif", "'PP Watch',sans-serif", "'PP Migra',serif", "'PP Stellar',sans-serif", "'PP Lettra Mono',monospace"];
  const row = (item, i) => `
    <div data-open-project="${item.id}" style="display:flex;flex-direction:column;gap:16px;cursor:pointer;width:${state.isMobile ? "100%" : `calc(50% - ${gapShare}px)`};${align}">
      <div style="display:flex;flex-direction:column;gap:8px;">
        <span style="font-family:${titleFonts[i % titleFonts.length]};font-weight:600;font-size:clamp(20px,3vw,40px);line-height:1.2;text-wrap:pretty;">${esc(item.title)}</span>
        <span style="font-family:'PP Stellar',sans-serif;font-size:16px;line-height:1.4;color:#5a5a5a;">${esc(catLabel(item.cat))} — ${esc(item.year)}</span>
      </div>
      <div style="width:100%;height:${state.isMobile ? mobileHeights[i % mobileHeights.length] : heights[i % heights.length]};background:#e5e5e5;background-image:repeating-linear-gradient(135deg,#e5e5e5 0 2px,#dcdcdc 2px 4px);display:flex;align-items:center;justify-content:center;">
        <span style="font-family:'PP Lettra Mono',monospace;font-size:13px;color:#8a8a8a;">image — ${esc(item.title)}</span>
      </div>
    </div>`;
  return `<div style="display:flex;flex-wrap:wrap;gap:100px 24px;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};margin-right:0px;margin-top:100px;margin-bottom:100px;">
    ${items.map((item, i) => row(item, i)).join("")}
  </div>`;
}

function bigCardHtml(item) {
  return `<div data-open-project="${item.id}" class="card-zoom-only" style="position:relative;width:100%;cursor:pointer;overflow:hidden;background:#e5e5e5;background-image:repeating-linear-gradient(135deg,#e5e5e5 0 2px,#dcdcdc 2px 4px);height:${state.isMobile ? "85vh" : "clamp(420px, 46vw, 680px)"};">
    <div style="position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;justify-content:space-between;${state.isMobile ? "align-items:center;text-align:center;padding:24px;" : `align-items:flex-start;text-align:left;padding:30px 100px 30px var(--pad-left);`}color:#0D0D0E;">
      <span style="font-family:'PP Lettra Mono',monospace;font-size:22px;line-height:1.4;">${esc(catLabel(item.cat))}</span>
      <span style="font-family:'PP Gatwick',sans-serif;font-weight:600;font-size:clamp(32px,6vw,60px);line-height:1;">${esc(item.title)}</span>
      <span style="font-family:'PP Hatton',serif;font-size:22px;line-height:1.4;">${esc(item.year)}</span>
    </div>
  </div>`;
}

function projectsLayoutHtml(realCards) {
  const realItems = realCards.map((c) => ({ id: c.id, cat: c.cat, year: c.year, kind: "real" }));
  const phItems = PLACEHOLDER_ITEMS.filter((p) => (!state.filter || p.cat === state.filter) && (!state.yearFilter || String(p.year) === state.yearFilter)).map((p) => ({ ...p, kind: "ph" }));
  const items = [...realItems, ...phItems].sort((a, b) => b.year - a.year);
  const renderBig = (it) => it.kind === "real" ? cardHtml(TOP_CARDS.find((c) => c.id === it.id)) : bigCardHtml(it);
  let html = "";
  const firstBig = items.slice(0, 3);
  if (firstBig.length) html += `<div style="display:flex;flex-direction:column;gap:10px;">${firstBig.map(renderBig).join("")}</div>`;
  let i = 3;
  while (i < items.length) {
    const chunk = items.slice(i, i + 4);
    html += smallCardsHtml(chunk);
    i += 4;
    if (i < items.length) {
      html += `<div style="display:flex;flex-direction:column;gap:10px;">${renderBig(items[i])}</div>`;
      i += 1;
    }
  }
  return html;
}

function projectsHtml() {
  const cards = TOP_CARDS.filter((c) => (!state.filter || c.cat === state.filter) && (!state.yearFilter || String(c.year) === state.yearFilter)).sort((a, b) => b.year - a.year);
  const align = state.isMobile ? "text-align:center;" : "text-align:left;";
  const years = [...new Set([...TOP_CARDS, ...PLACEHOLDER_META.map((m) => ({ cat: m[2], year: m[3] }))].filter((c) => !state.filter || c.cat === state.filter).map((c) => String(c.year)))].sort((a, b) => b - a);
  return `<main style="padding:0 clamp(20px,6vw,100px);">
    <div id="wrap" style="max-width:1512px;margin:0 auto;">
      ${heroSubnavHtml()}
      <div style="padding-left:${state.isMobile ? "0px" : "var(--pad-left)"};">
        <div style="display:flex;flex-direction:column;gap:16px;padding:100px 0 0;${state.isMobile ? "align-items:center;text-align:center;" : ""}">
          <span style="font-family:'PP Gatwick',sans-serif;font-weight:700;font-size:clamp(32px,6vw,52px);line-height:1.2;">all projects</span>
          ${state.filter ? `<span style="font-family:'PP Telegraf',sans-serif;font-weight:700;font-size:32px;line-height:1.2;color:#0D0D0E80;">${state.filter}</span>` : ""}
        </div>
        <div style="display:flex;gap:6px;margin-top:100px;padding-bottom:100px;${state.isMobile ? "flex-wrap:wrap;justify-content:center;" : ""}">
          ${years.map((y, i) => `${i > 0 ? `<span style="font-size:16px;font-family:'PP Stellar',sans-serif;color:#0D0D0E4D;">/</span>` : ""}<span data-year-filter="${y}" class="hoverlink" style="cursor:pointer;font-size:16px;font-family:'PP Stellar',sans-serif;${state.yearFilter === y ? "opacity:0.5;" : ""}">${state.isMobile || i === 0 ? y : y.slice(2)}</span>`).join("")}
        </div>
      </div>
      ${projectsLayoutHtml(cards)}
      ${state.filter ? `<div style="margin:100px 0 0;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};padding-bottom:100px;${align}">
        <span data-go="projects" class="backlink" style="font-family:'PP Hatton',serif;font-weight:500;font-size:16px;cursor:pointer;border-bottom:1px solid #000;padding-bottom:4px;">← all projects</span>
      </div>` : ""}
    </div>
  </main>`;
}

function homeNewsHtml() {
  const align = state.isMobile ? "text-align:center;" : "text-align:left;";
  const items = NEWS_ITEMS.slice(0, 3);
  const widths = ["92%", "68%", "80%"];
  return `<div style="padding:0 0 60px;">
    ${titleWrap("news", "", null, null, 100)}
    <div style="display:flex;flex-direction:column;gap:10px;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};margin-right:${state.isMobile ? "0px" : "clamp(20px,6vw,100px)"};">
      ${items.map((n, i) => `
        <div data-open-post="${n.id}" class="card-hover-black" style="position:relative;width:${state.isMobile ? "100%" : widths[i % widths.length]};max-width:900px;cursor:pointer;overflow:hidden;background-color:#e5e5e5;background-repeat:no-repeat;background-image:url(${n.image});background-position:${n.imgPos};background-size:cover;height:clamp(260px, 26vw, 380px);">
          <div style="position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;justify-content:space-between;padding:24px;color:#fafafa;">
            <span style="font-family:'PP Lettra Mono',monospace;font-size:16px;line-height:1.3;">${esc(n.date)}</span>
            <span style="font-family:'PP Gatwick',sans-serif;font-weight:600;font-size:clamp(20px,2.6vw,32px);line-height:1.1;">${esc(n.title)}</span>
          </div>
        </div>`).join("")}
    </div>
    <div style="margin:100px 0 0;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
      <span data-go="news" class="backlink" style="font-family:'PP Hatton',serif;font-weight:500;font-size:16px;cursor:pointer;border-bottom:1px solid #000;padding-bottom:4px;">all news →</span>
    </div>
  </div>`;
}

function homePeopleHtml() {
  const align = state.isMobile ? "text-align:center;" : "text-align:left;";
  return `<div style="padding:0 0 60px;">
    ${titleWrap("e / people", "", null, null, 100)}
    <div style="display:flex;flex-direction:column;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};margin-right:${state.isMobile ? "0px" : "clamp(20px,6vw,100px)"};">
      ${TEAM.map((p, i) => `
        <div style="display:flex;flex-direction:column;gap:8px;padding:20px 0;${i === 0 ? "" : "border-top:1px solid #000;"}${align}">
          <span style="font-family:${p.nameFont || "'PP Telegraf',sans-serif"};font-weight:600;font-size:16px;line-height:1.4;">${esc(p.name)}</span>
          <span style="font-family:${p.roleFont || "'PP Watch',sans-serif"};font-size:16px;line-height:1.4;color:#5a5a5a;">${esc(p.role)}</span>
        </div>`).join("")}
    </div>
    <div style="margin:100px 0 0;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
      <span data-go="people" class="backlink" style="font-family:'PP Hatton',serif;font-weight:500;font-size:16px;cursor:pointer;border-bottom:1px solid #000;padding-bottom:4px;">all people →</span>
    </div>
  </div>`;
}

function homeAboutHtml() {
  const align = state.isMobile ? "text-align:center;" : "text-align:left;";
  const margin = state.isMobile ? "0 auto" : "0";
  return `<div style="padding:0 0 60px;">
    ${titleWrap("about", "", null, null, 100)}
    <div style="margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
      <p style="max-width:600px;margin:${margin};font-size:16px;line-height:30px;">${ABOUT_TEXT}</p>
    </div>
    <div style="margin:100px 0 0;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
      <span data-go="about" class="backlink" style="font-family:'PP Hatton',serif;font-weight:500;font-size:16px;cursor:pointer;border-bottom:1px solid #000;padding-bottom:4px;">read more →</span>
    </div>
  </div>`;
}

function projectHtml() {
  const p = PROJECTS[state.project];
  const slides = p.photos ? [] : (SLIDES_MAP[state.project] || []);
  const align = state.isMobile ? "text-align:center;" : "text-align:left;";
  const margin = state.isMobile ? "0 auto" : "0";
  const alignItems = state.isMobile ? "align-items:center;" : "align-items:flex-start;";
  return `<main style="padding:0 clamp(20px,6vw,100px);">
    <div id="wrap" style="max-width:1512px;margin:0 auto;">
      ${heroSubnavHtml()}
      ${titleWrap(p.title, p.subtitleOverride || `${p.cat} — ${p.year}`, null, null, 100)}
      ${infoTable(p.info)}
      <div style="padding:100px 0 100px;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
        <p style="max-width:600px;margin:${margin};font-size:16px;line-height:30px;">${p.desc}</p>
      </div>
      ${p.photos ? p.photos.map((src) => `
        <img class="hero-hover" src="${src}" alt="${esc(p.title)}" loading="lazy" style="display:block;width:100%;height:auto;margin-bottom:10px;background-color:#e5e5e5;">`).join("") : p.placeholder ? `<div class="hero-hover" style="width:100%;height:clamp(420px, 58vw, 880px);margin-bottom:10px;background:#e5e5e5;background-image:repeating-linear-gradient(135deg,#e5e5e5 0 2px,#dcdcdc 2px 4px);display:flex;align-items:center;justify-content:center;"><span style="font-family:'PP Lettra Mono',monospace;font-size:13px;color:#8a8a8a;">image — ${esc(p.title)}</span></div>` : `<div class="hero-hover" style="width:100%;height:clamp(420px, 58vw, 880px);margin-bottom:10px;background-size:cover;background-repeat:no-repeat;background-color:#e5e5e5;background-image:url(${p.hero});background-position:${p.heroPos};"></div>`}
      ${slides.map((src, i) => `
        <div class="hero-hover" style="width:100%;height:clamp(420px, 46vw, 680px);margin-bottom:10px;background-image:url(${src});background-size:cover;background-position:50% 50%;background-repeat:no-repeat;background-color:#e5e5e5;"></div>`).join("")}
      ${relatedProjectsHtml()}
      <div style="margin:100px 0 0;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
        <span data-go="projects" class="backlink" style="font-family:'PP Hatton',serif;font-weight:500;font-size:16px;cursor:pointer;border-bottom:1px solid #000;padding-bottom:4px;">← all projects</span>
      </div>
    </div>
  </main>`;
}

function newsHtml() {
  const align = state.isMobile ? "text-align:center;" : "text-align:left;";
  const margin = state.isMobile ? "0 auto" : "0";
  return `<main style="padding:0 clamp(20px,6vw,100px);">
    <div id="wrap" style="max-width:1512px;margin:0 auto;">
      ${heroSubnavHtml()}
      ${titleWrap("e / thoughts", "", null, "'PP Right Serif',serif", 100)}
      ${NEWS_ITEMS.map((n) => `
        <div data-open-post="${n.id}" style="cursor:pointer;padding:0 0 40px;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
          <span style="font-family:'PP Telegraf',sans-serif;font-size:16px;">${esc(n.date)}</span>
          <div style="margin-top:10px;">
            <span style="font-family:${n.titleFont};font-weight:700;font-size:clamp(32px,6vw,52px);line-height:1.2;">${esc(n.title)}</span>
          </div>
        </div>
        <div style="padding:0 0 60px;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
          <p style="max-width:600px;margin:${margin};font-size:16px;line-height:30px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;">${esc(n.text)}</p>
        </div>
        <div data-open-post="${n.id}" class="card-zoom-only" style="cursor:pointer;width:auto;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};margin-right:${state.isMobile ? "0px" : "clamp(20px,6vw,100px)"};height:clamp(360px, 44vw, 640px);margin-bottom:140px;background-size:${n.imgSize};background-position:${n.imgPos};background-repeat:no-repeat;background-color:#e5e5e5;background-image:url(${n.image});"></div>`).join("")}
    </div>
  </main>`;
}

function relatedNewsHtml() {
  const ids = NEWS_ITEMS.map((n) => n.id).filter((id) => id !== state.post);
  const marginX = state.isMobile ? "0px" : "var(--pad-left)";
  const align2 = state.isMobile ? "text-align:center;" : "text-align:left;";
  return `<div style="margin:160px 0 0;margin-left:${marginX};margin-right:${marginX};${align2}">
    <span style="font-family:'PP Migra',serif;font-size:18px;">related news</span>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:30px;">
      ${ids.map((id) => {
        const n = NEWS_ITEMS.find((x) => x.id === id);
        return `<div data-open-post="${id}" class="card-hover-black" style="position:relative;flex:1 1 320px;max-width:480px;cursor:pointer;overflow:hidden;background-color:#e5e5e5;background-repeat:no-repeat;background-image:url(${n.image});background-position:${n.imgPos};background-size:cover;height:clamp(260px, 26vw, 380px);">
          <div style="position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;justify-content:space-between;padding:24px;color:#fafafa;">
            <span style="font-family:'PP Lettra Mono',monospace;font-size:16px;line-height:1.3;">${esc(n.date)}</span>
            <span style="font-family:'PP Gatwick',sans-serif;font-weight:600;font-size:clamp(20px,2.6vw,32px);line-height:1.1;">${esc(n.title)}</span>
          </div>
        </div>`;
      }).join("")}
    </div>
  </div>`;
}

function postHtml() {
  const n = NEWS_ITEMS.find((x) => x.id === state.post) || NEWS_ITEMS[0];
  const align = state.isMobile ? "text-align:center;" : "text-align:left;";
  const margin = state.isMobile ? "0 auto" : "0";
  return `<main style="padding:0 clamp(20px,6vw,100px);">
    <div id="wrap" style="max-width:1512px;margin:0 auto;">
      ${heroSubnavHtml()}
      ${titleWrap(n.title, n.date, null, n.titleFont)}
      <div style="display:grid;grid-template-columns:${state.isMobile ? "1fr" : "calc(var(--pad-news) - var(--pad-left)) 1fr"};align-items:${state.isMobile ? "center" : "stretch"};text-align:${state.isMobile ? "center" : "left"};gap:${state.isMobile ? "4px" : "0px"};padding:20px 0;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};">
        <span style="font-family:'PP Telegraf',sans-serif;font-weight:600;font-size:16px;flex-shrink:0;color:#0D0D0E4D;">Author</span>
        <span style="font-family:'PP Stellar',sans-serif;font-size:16px;line-height:1.5;color:#0D0D0E;">${esc(n.author)}</span>
      </div>
      <div style="padding:60px 0 60px;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
        <p style="max-width:600px;margin:${margin};font-size:16px;line-height:30px;">${esc(n.text)}</p>
      </div>
      <div class="hero-hover" style="width:100%;height:clamp(420px, 58vw, 880px);margin-bottom:60px;background-size:${n.imgSize};background-position:${n.imgPos};background-repeat:no-repeat;background-color:#e5e5e5;background-image:url(${n.image});"></div>
      ${relatedNewsHtml()}
      <div style="margin:100px 0 0;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
        <span data-go="news" class="backlink" style="font-family:'PP Hatton',serif;font-weight:500;font-size:16px;cursor:pointer;border-bottom:1px solid #000;padding-bottom:4px;">← all news</span>
      </div>
    </div>
  </main>`;
}

function peopleHtml() {
  const cols = [[], []];
  TEAM.forEach((p, i) => cols[i % 2].push(p));
  const widths = [["100%", "66%", "82%"], ["78%", "100%"]];
  return `<main style="padding:0 clamp(20px,6vw,100px);">
    <div id="wrap" style="max-width:1512px;margin:0 auto;">
      ${heroSubnavHtml()}
      ${titleWrap("e / people", "", null, "'PP Stellar',sans-serif", 100)}
      <div style="margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};margin-right:${state.isMobile ? "0px" : "clamp(20px,6vw,100px)"};display:${state.isMobile ? "flex" : "grid"};${state.isMobile ? "flex-direction:column;" : "grid-template-columns:1fr 1fr;"}gap:40px;padding-bottom:160px;">
        ${cols.map((col, ci) => `
          <div style="display:flex;flex-direction:column;gap:20px;">
            ${col.map((p, pi) => `
              <div style="display:flex;flex-direction:column;gap:16px;width:${state.isMobile ? "100%" : widths[ci][pi]};text-align:left;">
                <div style="width:100%;height:${state.isMobile ? "60vw" : "clamp(320px, 34vw, 480px)"};background:#e5e5e5;background-image:repeating-linear-gradient(135deg,#e5e5e5 0 2px,#dcdcdc 2px 4px);display:flex;align-items:center;justify-content:center;">
                  <span style="font-family:'PP Lettra Mono',monospace;font-size:13px;color:#8a8a8a;">portrait — ${esc(p.name)}</span>
                </div>
                <div style="display:flex;flex-direction:column;gap:8px;${state.isMobile ? "align-items:center;text-align:center;" : ""}">
                  <span style="font-family:${p.nameFont || "'PP Telegraf',sans-serif"};font-weight:600;font-size:16px;line-height:1.4;white-space:nowrap;">${esc(p.name)}</span>
                  <span style="font-family:${p.roleFont || "'PP Watch',sans-serif"};font-size:16px;line-height:1.4;color:#5a5a5a;">${esc(p.role)}</span>
                  <div style="display:flex;gap:16px;">
                    <a href="${p.linkedin}" target="_blank" rel="noreferrer" class="hoverlink" style="font-family:${p.linksFont || "'PP Stellar',sans-serif"};font-size:16px;line-height:1.4;color:#0D0D0E;">linkedin</a>
                    <a href="${p.instagram}" target="_blank" rel="noreferrer" class="hoverlink" style="font-family:${p.linksFont || "'PP Stellar',sans-serif"};font-size:16px;line-height:1.4;color:#0D0D0E;">instagram</a>
                  </div>
                </div>
              </div>`).join("")}
          </div>`).join("")}
      </div>
    </div>
  </main>`;
}

function aboutHtml() {
  return `<main style="padding:0 clamp(20px,6vw,100px);">
    <div id="wrap" style="max-width:1512px;margin:0 auto;">
      ${heroSubnavHtml()}
      ${titleWrap("e / story", "", null, null, 100, "flex-end")}
      <div style="padding:0 0 140px;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${state.isMobile ? "text-align:center;" : "text-align:left;"}">
        <p style="max-width:600px;margin:${state.isMobile ? "0 auto" : "0"};font-size:16px;line-height:30px;">${ABOUT_TEXT}</p>
      </div>
    </div>
  </main>`;
}

function contactHtml() {
  const align = state.isMobile ? "align-items:center;text-align:center;" : "align-items:flex-start;text-align:left;";
  return `<main style="padding:0 clamp(20px,6vw,100px);">
    <div id="wrap" style="max-width:1512px;margin:0 auto;">
      ${heroSubnavHtml()}
      ${titleWrap("e / hello", "", null, "'PP Telegraf',sans-serif", 100)}
      <div style="display:flex;flex-direction:column;gap:30px;padding:0 0 200px;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
        <span style="font-size:16px;">Azatutyan 24/12, Yerevan, Armenia 0014</span>
        <a href="mailto:studio@e-ts.am" class="backlink" style="font-family:'PP Telegraf',sans-serif;font-weight:500;font-size:16px;line-height:1;width:fit-content;border-bottom:1px solid #000;padding-bottom:6px;color:#0D0D0E;">email</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" class="backlink" style="font-family:'PP Hatton',serif;font-weight:500;font-size:16px;line-height:1;width:fit-content;border-bottom:1px solid #000;padding-bottom:6px;color:#0D0D0E;text-decoration-line:none;">instagram</a>
      </div>
    </div>
  </main>`;
}

function footerHtml() {
  const gridStyle = state.isMobile
    ? "display:flex;flex-direction:column;gap:clamp(56px,12vw,84px);align-items:center;text-align:center;"
    : "max-width:1512px;margin:0 auto;display:grid;grid-template-columns:var(--pad-left) 1fr auto;row-gap:clamp(60px,10vw,100px);align-items:center;";
  const order = state.isMobile
    ? { logo: 1, email: 2, address: 3, instagram: 4, year: 5, timeFlies: 6 }
    : { logo: 0, email: 0, address: 0, instagram: 0, year: 0, timeFlies: 0 };
  return `<footer style="padding:clamp(80px,20vw,200px) clamp(20px,6vw,100px) clamp(40px,8vw,80px);">
    <div style="${gridStyle}">
      <img data-go="home" src="images/logo-ets-black.svg" alt="e/ts" style="width:80px;height:24px;cursor:pointer;display:block;order:${order.logo};">
      <a href="mailto:studio@e-ts.am" class="hoverlink" style="font-size:16px;line-height:1;color:#0D0D0E;order:${order.email};">email</a>
      <span data-go="contact" class="hoverlink" style="font-size:16px;line-height:1;cursor:pointer;order:${order.timeFlies};">Time flies.</span>
      <span style="grid-column:2 / -1;text-align:center;font-size:16px;font-family:'PP Lettra Mono',monospace;order:${order.address};">Azatutyan 24/12, Yerevan, Armenia 0014</span>
      <span style="order:0;"></span><!-- empty cell: keeps year + instagram on the right grid columns -->
      <span style="font-size:16px;line-height:1;font-family:'PP Hatton',serif;order:${order.year};">2026</span>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" class="hoverlink" style="justify-self:end;font-size:16px;line-height:1;color:#0D0D0E;font-family:'PP Migra',serif;order:${order.instagram};">instagram</a>
    </div>
  </footer>`;
}

function render() {
  let main = "";
  if (state.view === "home") main = homeHtml();
  else if (state.view === "project") main = projectHtml();
  else if (state.view === "projects") main = projectsHtml();
  else if (state.view === "news") main = newsHtml();
  else if (state.view === "post") main = postHtml();
  else if (state.view === "people") main = peopleHtml();
  else if (state.view === "about") main = aboutHtml();
  else if (state.view === "contact") main = contactHtml();

  document.getElementById("app").innerHTML = `
    ${headerHtml()}
    ${mobileMenuHtml()}
    ${main}
    ${footerHtml()}
  `;
  measurePad();
  initSlideshows();
  fitCardTitles();
  initCardColors();
}

function measurePad() {
  if (state.isMobile) return;
  const wrapEl = document.getElementById("wrap");
  const projEl = document.getElementById("nav-projects");
  const newsEl = document.getElementById("nav-news");
  const peopleEl = document.getElementById("nav-people");
  const aboutEl = document.getElementById("nav-about");
  const contactEl = document.getElementById("nav-contact");
  if (!wrapEl || !projEl) return;
  const measure = (el, varName) => {
    if (!el) return;
    const v = Math.round(el.getBoundingClientRect().left - wrapEl.getBoundingClientRect().left);
    if (v > 0) document.documentElement.style.setProperty(varName, v + "px");
  };
  measure(projEl, "--pad-left");
  measure(newsEl, "--pad-news");
  measure(peopleEl, "--pad-people");
  measure(aboutEl, "--pad-about");
  measure(contactEl, "--pad-contact");
}

document.addEventListener("click", (e) => {
  const goEl = e.target.closest("[data-go]");
  if (goEl) { go(goEl.dataset.go); return; }
  const filterEl = e.target.closest("[data-filter]");
  if (filterEl) { go("projects", filterEl.dataset.filter); return; }
  const yearEl = e.target.closest("[data-year-filter]");
  if (yearEl) { state.yearFilter = state.yearFilter === yearEl.dataset.yearFilter ? null : yearEl.dataset.yearFilter; render(); return; }
  const projEl = e.target.closest("[data-open-project]");
  if (projEl) { openProject(projEl.dataset.openProject); return; }
  const postEl = e.target.closest("[data-open-post]");
  if (postEl) { openPost(postEl.dataset.openPost); return; }
  const mobileToggleEl = e.target.closest("[data-toggle-mobile-menu]");
  if (mobileToggleEl) { toggleMobileMenu(); return; }
});

window.addEventListener("resize", measurePad);

MOBILE_MQ.addEventListener("change", (e) => { state.isMobile = e.matches; state.mobileMenuOpen = false; render(); });

const slideState = {}; // card id -> current slide index (timer keeps running across re-renders)
const slideDelay = () => 1400 + Math.random() * 1400;
function showSlide(id, idx) {
  document.querySelectorAll(`[data-card-id="${id}"]`).forEach((el) => {
    el.style.opacity = Number(el.dataset.slideIndex) === idx ? 1 : 0;
  });
}
function initSlideshows() {
  const ids = new Set(Array.from(document.querySelectorAll("[data-card-id]")).map((el) => el.dataset.cardId));
  ids.forEach((id) => {
    if (!(id in slideState)) {
      const total = Number(document.querySelector(`[data-card-id="${id}"]`).dataset.slideTotal);
      slideState[id] = Math.floor(Math.random() * total);
      const tick = () => {
        slideState[id] = (slideState[id] + 1) % total;
        showSlide(id, slideState[id]);
        setTimeout(tick, slideDelay());
      };
      setTimeout(tick, slideDelay());
    }
    showSlide(id, slideState[id]);
  });
}

const CARD_COLORS = ["#000000", "#39ff14", "#ff00ff", "#00f0ff", "#ffe600", "#ff2079", "#000000"];
const cardColorTimers = {};
function initCardColors() {
  document.querySelectorAll("[data-color-card]").forEach((card, i) => {
    const id = card.dataset.colorId;
    const interval = 2000 * (1 + i * 0.05);
    card.style.backgroundColor = CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)];
    if (cardColorTimers[id]) return;
    const tick = () => {
      const el = document.querySelector(`[data-color-id="${id}"]`);
      if (el) el.style.backgroundColor = CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)];
      cardColorTimers[id] = setTimeout(tick, interval);
    };
    cardColorTimers[id] = setTimeout(tick, interval);
  });
}

function fitCardTitles() {
  const canvas = fitCardTitles._canvas || (fitCardTitles._canvas = document.createElement("canvas"));
  const ctx = canvas.getContext("2d");
  document.querySelectorAll("[data-card-fit]").forEach((card) => {
    const el = card.querySelector("[data-fit-title]");
    if (!el) return;
    const fontSize = parseFloat(getComputedStyle(el).fontSize);
    const fontFamily = getComputedStyle(el).fontFamily;
    ctx.font = `600 ${fontSize}px ${fontFamily}`;
    const textWidth = ctx.measureText(el.textContent).width;
    const wrapperMax = card.parentElement.clientWidth;
    if (state.isMobile) {
      const words = el.textContent.split(" ");
      let bestWidth = 0;
      words.forEach((w) => { const ww = ctx.measureText(w).width; if (ww > bestWidth) bestWidth = ww; });
      card.style.width = Math.min(Math.max(Math.round(bestWidth + 200), 220), wrapperMax) + "px";
    } else {
      card.style.width = Math.min(Math.round(textWidth + 200), wrapperMax) + "px";
    }
  });
}
window.addEventListener("resize", fitCardTitles);

if (document.fonts && document.fonts.ready) document.fonts.ready.then(measurePad);
render();
