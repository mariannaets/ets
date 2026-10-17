// ============================================================
// CONTENT — edit texts, news, team and projects here
// ============================================================

const STUDIO_INSTAGRAM = "https://www.instagram.com/electricarchitects/";

const DESC = "Electric Architects, together with TUMO Centre for Creative Technologies, were appointed curators and authors of the Armenian National Pavilion at the Venice Biennale of Architecture 2025. The concept revolves around training a new AI model on 3D-scanned artefacts of Armenian cultural heritage, creating a mechanism that can endlessly reinterpret and reinvent them into new models and shapes. The project addresses the preservation of lost and endangered monuments, while letting them stay resilient and keep evolving through modern technology.";

const ABOUT_TEXT = "Electric Architects is a Yerevan-based studio working across architecture, interiors and urban design. We treat every commission as a chance to test a new idea about materials, space or context — from a single bar interior to a masterplan. The studio is small by choice: every project passes through the same two hands, from first sketch to last detail on site.";

const NEWS_FONTS = ["'PP Gatwick',sans-serif", "'PP Telegraf',sans-serif", "'PP Hatton',serif", "'PP Right Serif',serif", "'PP Stellar',sans-serif", "'PP Lettra Mono',monospace"];
const NEWS_ITEMS = [
  { id: "towers-topped", title: "Sunday Towers, topped out", date: "March 2026", titleFont: NEWS_FONTS[0], author: "Aram Sargsyan",
    text: "Construction on Sunday Towers has reached its final floor. The residential complex reinterprets Yerevan's tuff-stone facades through a contemporary lens, pairing red volcanic stone with deep-set loggias.",
    image: "images/news-spread.webp", imgSize: "100% 112.565%", imgPos: "50% 0%" },
  { id: "biennale-selected", title: "Selected for the Venice Biennale 2025", date: "January 2026", titleFont: NEWS_FONTS[2], author: "Lucine Hakobyan",
    text: DESC, image: "images/hero-bar.webp", imgSize: "cover", imgPos: "100% 55.267%" },
];

const TEAM = [
  { name: "Marianna Karapetyan", role: "Founder / architect", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  { name: "Karen", role: "Partner / interiors", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  { name: "Maria", role: "Project architect", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  { name: "Name", role: "Urban design lead", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  { name: "Name", role: "Architectural designer", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
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
  simona: { slug: "simona", hidden: true, cat: "interior", title: "Simona", year: "2026", subtitleOverride: "2026",
    info: { status: "—", client: "—", sector: "—", location: "—",
      collaborators: "—", staff: "—" },
    hero: "images/portrait-bw.webp", heroPos: "30% 30%",
    second: "images/shopfront.webp", secondPos: "50% 55%", desc: DESC },
  barevdzez: { slug: "venice-biennale", cat: "exhibition", title: "Venice Biennale of Architecture", year: "2025", titleFont: "'PP Hatton',serif", subtitleOverride: "2025",
    info: { status: "Completed", client: "—", sector: "Temporary", location: "Venice, Italy",
      collaborators: "—", staff: "—" },
    // photos: shown on the project page in this order, at their natural proportions
    photos: ["01","02","03","04","05","06","07","08","09"].map((n) => `images/barevdzez/project/${n}.webp`),
    desc: "Electric Architects, along with TUMO Centre for Creative Technologies has been appointed as curators and authors of Armenian National Pavilion at Venice Biennale of Architecture 2025. The concept evolves around training a new AI model with 3D scanned files of Armenian cultural heritage in order to create a new mechanism which allows to endlessly interpret or reinvent these heritage artefacts into new models and shapes. This project refers to preservation of lost and endangered monuments while allowing their further resilience and development via modern technologies." },
  vallee: { slug: "vallee-de-larpa", cat: "architecture", title: "Vallée de l'Arpa", year: "2024", titleFont: "'PP Lettra Mono',monospace",
    info: { status: "Under Construction", client: "Vallée de l’Arpa", sector: "Commercial", location: "Aghavnadzor, Armenia",
      collaborators: "—", staff: "—" },
    // photos: shown on the project page in this order, at their natural proportions
    photos: ["01","02","03","04","05","06","07","08","09","10"].map((n) => `images/vallee/project/${n}.webp`),
    desc: "Winery and guest houses complex in Aghavnadzor village in Vayots Dzor region of Armenia. The picturesque landscape of Aghavnadzor village is shaping the scenario of the vineyards and winery area, offering possibility of short term residences in guest houses. The guest houses are located on northern part of the plot, creating a welcoming area for visitors, from modest entry zone to a maze of modular elements of different typologies of guest houses units and their public zones, such as restaurant, spa area and other common rooms. The path then lays through vineyards to brutalist shapes of winery, which are intertwined with landscape through series of voids and monumental shapes. Both guest houses and winery use local stone material mixed with concrete to achieve sustainable building technology, where the outer walls offer both insulation and lightweight construction." },
  totaldrama: { slug: "total-drama", cat: "exhibition", title: "Total Drama", year: "2024", titleFont: "'PP Hatton',serif",
    info: { status: "Completed", client: "—", sector: "Temporary", location: "Yerevan, Armenia",
      collaborators: "—", staff: "—" },
    // photos: shown on the project page in this order, at their natural proportions
    photos: ["01","02","03","04","05"].map((n) => `images/totaldrama/project/${n}.webp`),
    desc: "“Total Drama” is a month long festival established as the curated program by Electric Architects for Library for Architecture. It seeks to research the performativeness of architecture and spatiality of theatre. The monthly program includes opening exhibition of 5000 m2 contemporary art on the verge of theatre and architecture, lectures, workshops, public talks, movie screening, urban installations and scenography production." },
  dilijan: { slug: "dilijan-houses", cat: "architecture", title: "Dilijan Houses", year: "2024", titleFont: "'PP Lettra Mono',monospace",
    info: { status: "Under Construction", client: "Andy", sector: "Residential", location: "Dilijan, Armenia",
      collaborators: "—", staff: "—" },
    // photos: shown on the project page in this order, at their natural proportions
    photos: ["01","02","03","04","05","06","07","08","09","10"].map((n) => `images/dilijan/project/${n}.webp`),
    desc: "Two private houses in forests of Dilijan connected with common public area with pool and outdoor kitchen zone. The concept of houses evolves around the importance of breathtaking views throughout the site on mountainous landscapes of Dilijan. The architecture is referring and reinterpreting traditional references to local architecture with delicate woodwork and large terraces with more brutal shapes of concrete volumes. The houses include double height spaces to accent the uninterrupted views to surroundings." },
  coaf: { slug: "coaf", cat: "architecture", title: "COAF", year: "2022", titleFont: "'PP Lettra Mono',monospace",
    info: { status: "Competition Short List", client: "COAF", sector: "Educational", location: "Armavir, Armenia",
      collaborators: "—", staff: "—" },
    // photos: shown on the project page in this order, at their natural proportions
    photos: ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"].map((n) => `images/coaf/project/${n}.webp`),
    desc: "Three blocks of the COAF campus are located on the various points of the river, which will be activated through new circulation system with reservoirs and pumps on the site. These buildings are variations of caravansary typology, where the indoor spaces are located in a frame surrounding the garden. Every building changes it’s relationship with water according to the location and program. Enclosed courtyards act as main collective spaces for the surrounding functions. Every room has access to courtyard and the green spaces located between outer walls and indoor spaces. This layer of gardens surrounding rooms acts as a natural ventilation and cooling system for classrooms and other facilities." },
  arleam: { slug: "arleam", cat: "architecture, urban design", title: "Arleam", year: "2021", titleFont: "'PP Lettra Mono',monospace",
    info: { status: "Completed", client: "Arleam", sector: "Commercial", location: "Ashtarak, Armenia",
      collaborators: "—", staff: "—" },
    // photos: shown on the project page in this order, at their natural proportions
    photos: ["01","02","03","04","05","06"].map((n) => `images/arleam/project/${n}.webp`),
    desc: "The farm is part of 100 hectares master planning project with industrial, agricultural, private and public amenities. It’s an animal farm, which is realized in the form of a small village with certain sequence of public spaces. Horse stables, chicken coop, dove tower, and hay storage are wooden structures, and goat stables, traditional bakery and guest house are concrete and stone structures. The farm complex is integrated with a small pond on higher level, with series of connections throughout the area. Every space has a scenario and variety of uses and views." },
  affordable: { slug: "affordable-housing", cat: "architecture, interior", title: "Affordable Housing", year: "2023", titleFont: "'PP Lettra Mono',monospace",
    info: { status: "Under Construction", client: "AC Design Engineering", sector: "Residential", location: "Yerevan, Armenia",
      collaborators: "—", staff: "—" },
    // photos: shown on the project page in this order, at their natural proportions
    photos: ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"].map((n) => `images/affordable/project/${n}.webp`),
    desc: "A unique project for Armenian real estate market where affordable housing is designed to be aesthetically pleasing and unique. It’s a former kindergarten building, where additional two floors are elevated and the basement is opened to natural light to accommodate more living spaces. Every apartment on ground floor has an access to private gardens, and the communal courtyard which has no car access. Apartment on top floors have mezzanines and double height living rooms. Outer facade of building is cladded in natural tuff stone, while courtyard is painted in bright light color creating a curious contrast in shapes." },
  towers: { slug: "sunday-towers", cat: "architecture", title: "Sunday Towers", year: "2022", titleFont: "'PP Lettra Mono',monospace",
    info: { status: "Under Construction", client: "UP Development", sector: "Residential", location: "Yerevan, Armenia",
      collaborators: "—", staff: "—" },
    // photos: shown on the project page in this order, at their natural proportions
    photos: ["01","02","03","04","05","06","07","08","09","10","11"].map((n) => `images/towers/project/${n}.webp`),
    desc: "1.4 hectares of former industrial area in Arabkir district are transformed into high end mixed use development district. The area includes 6 buildings 6 to 14 floors height, with commercial and office spaces on lower levels. Every building in the district has a distinct architectural style with well thought detailing, stonework and metal cladding. Every apartment is designed to fit the needs of modern living, comfort and social interactions." },
};
Object.keys(PROJECTS).forEach((id) => { if (PROJECTS[id].hidden) delete PROJECTS[id]; });

const SIMONA_SLIDES = ["images/simona/1.webp","images/simona/2.webp","images/simona/3.webp","images/simona/4.webp","images/simona/5.webp","images/simona/6.webp"];
const BAREVDZEZ_SLIDES = ["images/barevdzez/1.webp","images/barevdzez/2.webp","images/barevdzez/3.webp","images/barevdzez/4.webp","images/barevdzez/5.webp"];
const TOWERS_SLIDES = ["images/towers/1.webp","images/towers/2.webp","images/towers/3.webp","images/towers/4.webp","images/towers/5.webp"];
const VALLEE_SLIDES = [1, 2, 3, 4, 5].map((n) => `images/vallee/${n}.webp`);
const TOTALDRAMA_SLIDES = [1, 2, 3, 4, 5].map((n) => `images/totaldrama/${n}.webp`);
const DILIJAN_SLIDES = [1, 2, 3, 4, 5].map((n) => `images/dilijan/${n}.webp`);
const COAF_SLIDES = [1, 2, 3, 4, 5].map((n) => `images/coaf/${n}.webp`);
const ARLEAM_SLIDES = [1, 2, 3, 4, 5].map((n) => `images/arleam/${n}.webp`);
const AFFORDABLE_SLIDES = [1, 2, 3, 4, 5].map((n) => `images/affordable/${n}.webp`);
const SLIDES_MAP = { simona: SIMONA_SLIDES, barevdzez: BAREVDZEZ_SLIDES, towers: TOWERS_SLIDES, vallee: VALLEE_SLIDES, totaldrama: TOTALDRAMA_SLIDES, dilijan: DILIJAN_SLIDES, coaf: COAF_SLIDES, arleam: ARLEAM_SLIDES, affordable: AFFORDABLE_SLIDES };
const catLabel = (c) => c.replace(/\b\w/g, (ch) => ch.toUpperCase());
// a project can have several categories: cat: "architecture, urban design"
const catList = (c) => String(c).split(",").map((x) => x.trim());
const inCat = (c, f) => !f || catList(c).includes(f);
// placeholder projects (grey boxes) — empty now, real projects only
const PLACEHOLDER_META = [
  ["2750-anniversary-park-renovation","2750 Anniversary Park Renovation","urban design","2024"],
  ["upd-sales-office","UPD Sales Office","interior","2024"],
  ["airport-administration","Airport Administration","architecture, urban design","2025"],
  ["andaco","Andaco","architecture","2025"],
  ["apri","Apri","interior","2023"],
  ["asteria","Asteria","interior","2022"],
  ["cofix","Cofix","interior, architecture","2023"],
  ["dilijan-village","Dilijan Village","urban design, architecture","2025"],
  ["hayelectro","Hayelectro","architecture","2024"],
  ["jrvezh-forest-park","Jrvezh Forest Park","urban design","2024"],
  ["kapybara","Kapybara","interior","2024"],
  ["gevorg-kochar-street","Gevorg Kochar Street","urban design","2024"],
  ["koor-winery","Koor Winery","architecture, interior","2024"],
  ["martini","Martini","interior","2024"],
  ["media-relations-space","Media Relations Space","interior","2025"],
  ["moskovyan-22","Moskovyan 22","architecture","2022"],
  ["nera-project-showroom","Nera Project Showroom","interior","2023"],
  ["noble-row","Noble Row","architecture","2014"],
  ["nork-residential","Nork Residential","architecture, urban design","2023"],
  ["freedom-square-renovation","Freedom Square Renovation","urban design","2024"],
  ["hotel-le-blanc","Hôtel Le Blanc","interior","2025"],
  ["parpetsi-street-redesign","Parpetsi Street Redesign","urban design","2024"],
  ["poplavok-park-renovation","Poplavok Park Renovation","urban design","2024"],
  ["pushkin-street","Pushkin Street","urban design","2024"],
  ["red-house","Red House","architecture","2025"],
  ["rustaveli-32","Rustaveli 32","architecture","2022"],
  ["saryan-street-public-space","Saryan Street Public Space","urban design","2024"],
  ["school-park-renovation","School Park Renovation","urban design","2024"],
  ["wakepark-armenia","Wakepark Armenia","architecture, urban design","2024"],
  ["woods-center-blue-building","WOODS Center - Blue Building","architecture","2025"],
  ["woods-residence","WOODS Residence","architecture, urban design","2024"],
  ["wu","WU","interior","2023"],
  ["yadro-armenia","Yadro Armenia","interior","2022"],
  ["youth-sport-centre","Youth Sport Centre","architecture","2025"],
  ["zithopia","Zithopia","interior","2024"],
  ["ac-design-head-office","AC Design Head Office","architecture, interior","2025"],
  ["avobar-abu-dhabi","Avobar Abu Dhabi","interior","2023"],
  ["avobar-london","Avobar London","interior","2024"],
  ["creme-de-la-creme","Crème de la Crème","interior","2025"],
  ["ground-zero-pop-up","Ground Zero Pop-Up","interior","2024"],
  ["sweet-coast-komitas","Sweet Coast Komitas","interior","2024"],
  ["vtb-bank-head-office","VTB Bank Head Office","interior, architecture","2022"],
];
// text-only projects (photos to come): info + description per id
const PLACEHOLDER_INFO = {
  "2750-anniversary-park-renovation": { info: {"status":"Design Development","client":"Municipality of Yerevan","sector":"Masterplan","location":"Yerevan, Armenia"},
    desc: "Adjacent to the central square, 2750 Park revitalizes a soviet-era landmark. The design restores historic linear fountains and declutters the space by consolidating cafés into modern pavilions. Lightweight canopies and refined surfacing enhance comfort, creating a flexible civic arena for seasonal festivals and large-scale public events." },
  "upd-sales-office": { info: {"status":"Postponed","client":"UP Development","sector":"Commercial","location":"Yerevan, Armenia"},
    desc: "Designed as the primary touchpoint for the Sunday Towers project and upcoming developments by UPD, this sales office translates corporate identity into an open, welcoming, and youthful environment. The interior combines the developer’s signature colors with a clean, modern layout that moves away from traditional corporate spaces, creating a more approachable atmosphere for visitors. Supported by high-quality materials and a custom-designed modular furniture system, the project offers a flexible and highly functional setting for interaction and consultation." },
  "airport-administration": { info: {"status":"Design Development","client":"Zvartnots International Airport","sector":"Commercial","location":"Yerevan, Armenia"},
    desc: "Zvartnots airport administration building is located next to the upcoming metro station, providing convenient pedestrian access for airport workers, while also incorporating additional spaces for rent. The building is designed around inner courtyards to create a sense of enclosure and human scale, as it sits within a vast and open surrounding area. The main facades are oriented toward the views of Mount Ararat and the building is clearly visible for visitors traveling from the airport to the city center, acting as a subtle landmark. The architecture is minimalist, using concrete and large glazing to maximize views, natural light, and engagement with the courtyards." },
  "andaco": { info: {"status":"Concept","client":"Andaco","sector":"Commercial","location":"Yerevan, Armenia"},
    desc: "An office building for a distribution company, which was more like a puzzle rather than a formula, where dozens of pieces had to come together to form functional spaces and logical dispositions. Several repetitive elements are used in the architecture of the building to emphasize the mathematical approach to planning of these spaces." },
  "apri": { info: {"status":"Postponed","client":"Apri","sector":"Commercial","location":"Yerevan, Armenia"},
    desc: "Young and innovative Apri charitable foundation requested to create inspiring working environment for their growing team, which will be focused on constant collaboration and flexible arrangements. They have number of space which are reconfigured to adapt to their constantly changing team and requests. As the team is bigger than the space that they accommodated we have created system of flexible acoustic partitions to add privacy where needed, yet to be able to transform on demand." },
  "asteria": { info: {"status":"Postponed","client":"Tatev Wings","sector":"Horeca","location":"Syunik, Armenia"},
    desc: "A very minimalist space next to Tatev cableway overlooking the mountains is designed to transform the existing cafe to high end restaurant with chef’s table dinners and private events. The brief of client was to emphasize the historical context of the area, where the monastery was related to observatory. We kept the breathtaking blue as the main accent, adding wooden furniture and cosmic reflecting objects as sculptures above tables." },
  "cofix": { info: {"status":"Completed","client":"Aromacup","sector":"Horeca","location":"Yerevan, Armenia"},
    desc: "Armenian branch of renowned Cofix coffeeshops has an aim to renew the brand’s established concept in order to target larger and more sophisticated and demanding audience. It is reshaped to be more democratic and inclusive, yet more edgy and outstanding among large number of competitors. Brand’s iconic orange color is emphasized to be the prevailing one, and the monochrome palette is now much broader and has number of hues and textures to add more tactile and emotional feel to the interior. We combined industrial aesthetics and vibrant orange color with rough materials such as local tuff stone and raw metal." },
  "dilijan-village": { info: {"status":"Concept","client":"Joint Venture","sector":"Masterplan","location":"Dilijan, Armenia"},
    desc: "Nestled near Dilijan National Park, this mountain retreat village is designed as an expansive entertainment and relaxation landscape. Created as an escape from urban bustle, the project offers diverse recreational scenarios for families through immersive landscape solutions. Striking art objects and unique spatial programming foster a transformative experience, merging modern comfort with the serene, untouched beauty of the Armenian Highlands." },
  "hayelectro": { info: {"status":"Design Development","client":"Hayelectro","sector":"Residential","location":"Yerevan, Armenia"},
    desc: "This residential quarter is part of the initial phase of a 50-hectare development guided by West 8’s masterplan. The architecture emphasizes a strong urban edge, textured facades, and deep window reveals, combining rhythm and material contrast to define a contemporary yet grounded living environment. The design features dark-toned brick volumes surrounding a lighter central building, creating a calm yet striking spatial dynamic." },
  "jrvezh-forest-park": { info: {"status":"Under Construction","client":"WOODS Center","sector":"Masterplan","location":"Jrvezh, Armenia"},
    desc: "Jrvezh forest park is reimagined as a “magical Armenian forest,” blending ecological sensitivity with cultural storytelling. Inspired by Armenian art, the design introduces memorable art objects and furniture crafted entirely from sustainable materials. By using foundation-free installations, the project protects the sanctuary’s soil, creating a mystical, low-impact public stage that honors the national park’s environmental integrity." },
  "kapybara": { info: {"status":"Concept/Postponed","client":"Galaxy Group","sector":"Horeca","location":"Yerevan, Armenia"},
    desc: "Kapybara is an unconventional beer bar in a large underground space in central Yerevan. The design centers around the figure of a totem animal, the capybara mascot. To keep the experience theatrical, the architecture focuses on standalone pieces, while the environment comes alive with vibrant illustrations depicting the capybara’s adventures. Surrealistic images with a storyline, along with a central totem figure, have been crafted by talented illustrator Areg Movsisyan. The toilets, contrasting with the main features, take on a simpler approach to visual order." },
  "gevorg-kochar-street": { info: {"status":"Design Development","client":"Municipality of Yerevan","sector":"Masterplan","location":"Yerevan, Armenia"},
    desc: "In Yerevan’s heart, Kochar Street becomes a vibrant pedestrian cultural corridor. Bordering theaters and universities, the design features a cascade-like topography, water lines, and bold orthogonal geometry. Durable stone surfacing and generous greenery frame an open-air art platform, merging youth energy with theater culture into a contemporary public stage." },
  "koor-winery": { info: {"status":"Competition Winner","client":"Koor Wines","sector":"Commercial","location":"Aghavnadzor, Armenia"},
    desc: "Koor winery is located in Aghavnadzor settlement in Armenia, surrounded by vineyards and picturesque mountains. The building is evolving around these views and central tasting room volume. This volume is constructed of wood, resembling the “Koor” boats where the name of the brand comes from. The blocks of factory are located in a way to create a journey around them for visitors and factory workers. Factory walls are made of concrete and large blocks of tuff stone, which is a solution that allows to avoid exterior cladding and interior coverings via its aesthetic and insulating qualities." },
  "martini": { info: {"status":"Concept/Postponed","client":"Martini Royale","sector":"Horeca","location":"Yerevan, Armenia"},
    desc: "The “Martini Cafe” is a stylish homage to the iconic martini cocktail, integrating the drink’s essence directly into the design. Located in the heart of Yerevan, near the Grand Hotel and Moscow Cinema, this cafe’s concept blends Art Deco elegance with modern flair, reflecting the cocktail’s sophistication. The interior embodies the martini’s refined simplicity and timeless allure, showcasing premium marble elements and intricate detailing reminiscent of the drink’s clarity and elegance. By drawing design inspiration from the cocktail itself, Martini Cafe offers a luxurious yet inviting ambiance that captures the spirit of an upscale, classic drink through a contemporary lens." },
  "media-relations-space": { info: {"status":"Concept","client":"Chemonics","sector":"Educational","location":"Yerevan, Armenia"},
    desc: "Located within the Government House of the Republic of Armenia on Republic Square, this project transforms an underused foyer inside Alexander Tamanyan’s landmark building into a flexible space for press briefings, workshops, and meetings. Respecting the historical fabric, the intervention avoids permanent changes and instead introduces lightweight mobile elements and folding paper walls that allow the space to be easily reconfigured while creating a contemporary dialogue with the existing architecture." },
  "moskovyan-22": { info: {"status":"Concept","client":"Renaissance Foundation","sector":"Commercial","location":"Yerevan, Armenia"},
    desc: "A challenging project of renovation and addition to a renowned historical building in central Yerevan had to be respectful to the heritage and simultaneously bring modern and attractive atmosphere to the development. The brief of the client was to create a hotel design, that should be recognized as the most iconic and unique hotel in the city, an important tourist destination and a valuable addition to city fabric. Another challenge was to achieve the required amount of floor space in a high rise building while preserving the existing monument as the main accent and symbol of the cluster. In order to meet these requirements we created a concept where the hotel block would be divided into two volumes, which would allow us to avoid heavyweight building above the existing one and at the same time create an interior street flowing into public realm, connecting two active paths in the city and introduce a new typology of urban public space in the area." },
  "nera-project-showroom": { info: {"status":"Completed","client":"Nera Project","sector":"Commercial","location":"Yerevan, Armenia"},
    desc: "Nera Project is a furniture supplier representing iconic furniture brands on Armenian market, and our mission was to create an office space for them which would be suitable for the furniture pieces which are constant inspiration for every architect and designer. The space itself is a renovated loft from Soviet era factory, full of history and unique elements such as large mosaic wall and number of murals on upper levels. We created a half-level floor on one side of the studio, to accent the historical mosaic, and showcase the furniture in the best way possible. In order to emphasize the height of the space we used large chandelier hanging between two levels." },
  "noble-row": { info: {"status":"Completed","client":"KR Properties","sector":"Residential","location":"Moscow, Russia"},
    desc: "Recognized by several ranking agencies as the best housing block in Moscow, this is a unique project conceived along with Ralph Lauren Interiors design team. Located in central Ostozhenka district it is remaining as the most expensive real estate in the city for more than a decade. The building includes 6 high end apartments with private entrances from the street, private garages and terraces. Each apartment has 5 overground floors and a basement all thoroughly designed with Ralph Lauren Interiors style and furniture." },
  "nork-residential": { info: {"status":"Design Development","client":"Nork Developments","sector":"Residential","location":"Yerevan, Armenia"},
    desc: "This 70,000 m2 residential development is situated on a high-elevation hillside in Yerevan, utilizing the natural topography to ensure unobstructed views of the city skyline for all units. The master plan integrates high-density housing with extensive infrastructure, featuring a large-scale green belt that houses outdoor swimming pools, multi-purpose sports courts, and specialized playgrounds. The site layout is designed to maximize permeable surfaces, connecting the residential blocks via a centralized pedestrian network that segregates recreational zones from vehicular traffic. The architectural identity is defined by a playful application of a monochromatic pink palette, utilizing varying shades and textures across the different building facades. By alternating the tonality and rhythmic geometry of the structures, the design avoids monolithic repetition and creates a dynamic visual “vibe” across the complex. This strategy of using different shades of the same color provides a cohesive aesthetic while emphasizing the distinct architectural volumes and the playful interplay of light and shadow on the hillside." },
  "freedom-square-renovation": { info: {"status":"Concept","client":"Municipality of Yerevan","sector":"Masterplan","location":"Yerevan, Armenia"},
    desc: "Freedom Square, facing the Opera Theatre, is reimagined as a refined civic stage. New natural stone paving brings historic elegance with modern clarity, while the lifted edges create continuous seating and amphitheater-like spaces that transform the square into a theatrical setting for public life." },
  "hotel-le-blanc": { info: {"status":"Under Construction","client":"Hôtel Le Blanc","sector":"Horeca","location":"Paris, France"},
    desc: "Located within a fast-evolving business district on the outskirts of central Paris, Hôtel Le Blanc redefines the modern hospitality experience through the transformation of an existing building. The project combines an active lobby, destination bar, curated restaurant, coworking spaces, and secluded wellness areas into a fluid social environment designed for both international travelers and locals. Balancing business infrastructure with contemporary, narrative-driven interiors, the hotel functions as both a hospitality space and a vibrant neighborhood hub." },
  "parpetsi-street-redesign": { info: {"status":"Design Development","client":"Municipality of Yerevan","sector":"Masterplan","location":"Yerevan, Armenia"},
    desc: "Parpetsi Street in Yerevan is reimagined as a contemporary, pedestrian-oriented urban corridor that balances vehicular access with the needs of people. While maintaining one-way traffic, the design prioritizes walkability, creating a safer, more comfortable, and vibrant public environment. The project introduces wider sidewalks, generous landscaping, modern street furniture, and high-quality public lighting to encourage everyday use and social interaction. Carefully selected materials, including architectural concrete, natural timber, and metal, establish a cohesive and contemporary streetscape while enhancing the character and identity of the street. Designed to support both mobility and public life, the proposal transforms Parpetsi Street into an attractive and accessible urban space that strengthens the connection between the city and its residents." },
  "poplavok-park-renovation": { info: {"status":"Design Development","client":"Municipality of Yerevan","sector":"Masterplan","location":"Yerevan, Armenia"},
    desc: "Poplavok Park revitalizes its soviet-modernist legacy by enhancing its central lake. The design introduces a timber-decked promenade, a unified children’s area, and contemporary pavilions nestled under mature trees. By replacing outdated infrastructure with modern surfacing and furniture, the park reconnects the city with its water, creating a walkable, family-friendly civic escape." },
  "pushkin-street": { info: {"status":"Design Development","client":"Municipality of Yerevan","sector":"Masterplan","location":"Yerevan, Armenia"},
    desc: "The improvement project for Pushkin Street in Yerevan was developed with careful consideration of the street’s important role within the urban fabric and the many public spaces located along it. As one of the city center’s key pedestrian corridors, the project emphasizes greenery, multifunctionality, and pedestrian comfort through new gathering areas, expanded opportunities for urban events, and spaces that encourage everyday social interaction. Special attention is given to the cultural character of the street and its role in connecting different parts of central Yerevan into a unified public environment." },
  "red-house": { info: {"status":"Design Development","client":"Private Client","sector":"Residential","location":"Yerevan, Armenia"},
    desc: "Situated on a steep hillside on the outskirts of Yerevan, red house is a private residence designed to follow the natural terrain while overlooking the gorge and bridge below. The architecture is composed of interlocked volumes arranged across terraced levels, creating a rich sequence of balconies, terraces, and inner courtyards. Clad in local red travertine and detailed with wooden mashrabia grids, the project balances monolithic materiality with light, privacy, and openness to the surrounding landscape." },
  "rustaveli-32": { info: {"status":"Concept","client":"Arman Sahakyan","sector":"Commercial","location":"Gyumri, Armenia"},
    desc: "The project explores new languages and interpretations for traditional Kumayri architecture, utilizing local materials and architectural elements while presenting alternative readings of familiar shapes and rhythms. Part of the building in the Gyumri heritage site was destroyed during the 1988 earthquake, and rustaveli 32 is a proposal for reconstructing the previously existing volume with a new vision." },
  "saryan-street-public-space": { info: {"status":"Design Development","client":"Municipality of Yerevan","sector":"Masterplan","location":"Yerevan, Armenia"},
    desc: "Opposite the Saryan Museum, this neglected slope is transformed into a multi-level playscape and public terrace. Using minimalist architectural concrete, the design integrates modern play equipment and refined seating. This compact project turns an overlooked fragment into a high-intensity social hub on Yerevan’s most active cultural street." },
  "school-park-renovation": { info: {"status":"Design Development","client":"Municipality of Yerevan","sector":"Masterplan","location":"Yerevan, Armenia"},
    desc: "The school no. 20 park in Yerevan is conceived as a contemporary terraced public space that serves both students and the surrounding community. Organized as a cascading landscape, the park offers a variety of functional areas for recreation, social interaction, and everyday use. Despite its compact size, the project provides a highly efficient and flexible layout, enriched by extensive planting and diverse greenery. A continuous ramp system ensures full accessibility for people with reduced mobility throughout the entire site. The proposal also includes the renovation of the adjacent underground pedestrian passage, integrating it into the overall public space. The design employs a contemporary palette of architectural concrete, timber, and metal, complemented by modern urban furniture and integrated lighting to create a comfortable, safe, and welcoming environment." },
  "wakepark-armenia": { info: {"status":"Concept","client":"Wakepark Armenia","sector":"Commercial","location":"Armavir, Armenia"},
    desc: "The largest and most ambitious cable park to be built in a vast territory with restaurants, hotel, camp, spa, aquapark and other activities. The area includes three variations of wakeboarding lakes for different levels of surfing skills. The main entertainment area includes different blocks of infrastructural and leisure facilities, which are planned to create public spaces between and sometimes over them. This is a continuous space of different scenarios and relationship to the water." },
  "woods-center-blue-building": { info: {"status":"Mid-Construction","client":"WOODS Center","sector":"Commercial","location":"Jrvezh, Armenia"},
    desc: "The WOODS center blue building is an adaptive reuse project that transforms an existing two-story concrete parking structure into a four-story multifunctional hub. Two lightweight steel levels are added above the original structure, creating a bold geometric silhouette fully wrapped in blue. The upper floors form a flexible double-height space designed to accommodate a changing program of cultural, creative, and community activities." },
  "woods-residence": { info: {"status":"Under Construction","client":"WOODS Center","sector":"Residential","location":"Jrvezh, Armenia"},
    desc: "This experimental residential project serves as a functional extension of the adjacent WOODS business center, integrating high-density housing into an established ecosystem of educational, commercial, and coworking facilities. Situated directly on the forest’s edge, the building’s orientation and massing are engineered to maximize woodland views and provide immediate access to natural landscapes. The project acts as a logical continuation of the business park’s infrastructure, providing a proximal living solution for the professional demographic working within the complex. The internal program focuses on a specialized housing typology, featuring a high concentration of studio apartments tailored for single-occupancy and business park residents. To balance the high density of private units, the architectural plan incorporates extensive shared communal areas, adopting a co-living model that facilitates social and professional interaction. These integrated shared spaces—ranging from collective kitchens to lounge zones—define the project’s experimental nature, creating a hybrid residential environment that bridges the gap between private living and the collaborative atmosphere of the neighboring business center." },
  "wu": { info: {"status":"Postponed","client":"MBG Group","sector":"Horeca","location":"Yerevan, Armenia"},
    desc: "Vibrant pan-Asian restaurant on saryan street in central Yerevan was meant to attract diverse public. It was meant to emphasize the smells and noises of familiar Asian environments with great street food and friendly service. The idea was to achieve this vibrance with using minimal decoration but to accentuate the active texture of the floor, ceiling construction and different scenarios of light. Large long tables are forming a continuous line through the area of the restaurant referencing the culture of communal dining in Asian streets and large families. Prevailing color is chosen to be red as of the restaurant branding framework and as a symbolic color which is mainly featured in Asian aesthetics." },
  "yadro-armenia": { info: {"status":"Postponed","client":"Yadro Space","sector":"Commercial","location":"Yerevan, Armenia"},
    desc: "A foreign branch for Yadro Space technological company is created in Yerevan, Armenia. The main task was to achieve an interesting vibrant space for employees relocated from their hometown to a new country, where they could feel welcomed and comfortable. The overall design of the space is representing the technological approach of the company’s agenda and the creativeness of their everyday work. Natural stone and wood are used along with stainless steel and brutal metal detailing." },
  "youth-sport-centre": { info: {"status":"Concept","client":"Nazik Avdalyan Foundation","sector":"Educational","location":"Shirak, Armenia"},
    desc: "The youth sports center is a modular regional prototype designed for deployment across rural Armenia, combining sports facilities with community infrastructure. The project includes training spaces for martial arts, wrestling, and gymnastics alongside adaptable classrooms and lecture halls that encourage interaction between local youth and the wider community. Built with a lightweight and cost-efficient steel construction system, the architecture is defined by its recognizable blue exterior, creating a familiar landmark for health, education, and social cohesion." },
  "zithopia": { info: {"status":"Completed","client":"Zithopia","sector":"Horeca","location":"Yerevan, Armenia"},
    desc: "Housed within a former electrical transformer building hidden in a Yerevan courtyard, Zithopia is a vibrant craft beer bar and restaurant that transforms industrial infrastructure into a dynamic social space. The project combines a sequence of indoor and outdoor areas, including a minimalist gravel yard, a colorful fountain terrace, and an amphitheater for screenings and live sports. Using bold colors against the raw textures of the existing structure, the design creates a lively atmosphere dedicated to open-air leisure, comfort food, and craft culture." },
  "ac-design-head-office": { info: {"status":"Completed","client":"AC Design Engineering","sector":"Commercial","location":"Yerevan, Armenia"},
    desc: "A former administrative Soviet era building is renovated, and has additional 2 levels and is enlarged with 6m wide section. Main floor space is designed for rental areas and on upper level the mezzanine double height areas are designed for the head office of the construction and engineering company. The office is designed to reference the technical aesthetics of engineering elements, with lots of exposed ducts and structure details. Steel and glass are highly used for this purpose as well." },
  "avobar-abu-dhabi": { info: {"status":"Completed","client":"Avobar","sector":"Horeca","location":"Abu Dhabi, UAE"},
    desc: "The new Avobar concept is the first one to change the brand identity which will emphasize the freshness and healthiness of the served food and exceptional coffee. Avobar Abu Dhabi is located in a crowded mall, where customers tend to seek privacy. This is the reason the seating areas were thought as islands, to provide the spaces they require. Yellow epoxy organic shapes are the main accent of the space, where every other material is neutral in color, complementing the main actor. Every function in the bar counter is shaped from yellow epoxy to create a cluster of blocks which constitute the counter." },
  "avobar-london": { info: {"status":"Completed","client":"Avobar","sector":"Horeca","location":"London, UK"},
    desc: "Our second Avobar project after Abu Dhabi brings the brand’s healthy food and specialty coffee concept to central London—this time in the heart of Marylebone, on Chiltern Street. The interior revolves around a vibrant yellow epoxy bar, echoing the soft core of an avocado. Surrounding elements are kept deliberately muted—natural tones, soft textures, and touches of wood—creating a calm, contemporary space that lets the central element shine." },
  "creme-de-la-creme": { info: {"status":"Completed","client":"Baklachoff Collection","sector":"Horeca","location":"Yerevan, Armenia"},
    desc: "Situated beside the courts of a major sports center, this branch of Crème de la Crème draws inspiration from classic tennis aesthetics. Warm wood, soft fabrics, and sports-inspired details create an elegant yet relaxed café atmosphere for athletes and visitors alike. At the center of the space, a large communal table clad in white and blue mosaic tiles references the graphic geometry of a tennis court while encouraging social interaction." },
  "ground-zero-pop-up": { info: {"status":"Completed","client":"Ground Zero","sector":"Temporary","location":"Yerevan, Armenia"},
    desc: "Designed as a temporary experimental intervention, this pop-up space combines the identity of the Ground Zero café chain with an art gallery and concept store. Located inside a building awaiting demolition, the project preserves the raw, semi-demolished shell as a backdrop for colorful furniture, custom interactive elements, and gallery-style lighting. At the center of the space, a playful espresso bar finished with black dots on a white surface adds a graphic contrast to the industrial atmosphere." },
  "sweet-coast-komitas": { info: {"status":"Completed","client":"The Coast","sector":"Horeca","location":"Yerevan, Armenia"},
    desc: "The new Komitas branch of Sweet Coast bakery reinterprets the brand’s visual identity through a distinct architectural approach. The interior is intentionally minimalist and muted, directing attention toward a monumental central service counter clad in layered local tuff stone. Inspired by the structure of a honey cake, the counter transforms regional materiality into a graphic element that celebrates the craft and process of baking." },
  "vtb-bank-head-office": { info: {"status":"Completed","client":"VTB Bank Armenia","sector":"Commercial","location":"Yerevan, Armenia"},
    desc: "An existing building of former sports facilities is transformed into headquarters of VTB Armenia for 500 employees and training center. An additional level with an outdoor terrace was added to the building. The construction process duration was 1 year and it included the construction of additional floor and full fit out of 8 levels with large open spaces and private offices." },
};
// photos already uploaded: images/<id>/project/01.webp ... NN.webp (number = how many)
const PLACEHOLDER_PHOTOS = { "airport-administration": 8, "andaco": 7, "dilijan-village": 8, "media-relations-space": 7, "red-house": 8, "noble-row": 11, "woods-residence": 14, "kapybara": 10, "hayelectro": 10, "koor-winery": 5 };
const PLACEHOLDER_ITEMS = PLACEHOLDER_META.map(([id, title, cat, year]) => ({ id, title, cat, year }));
PLACEHOLDER_META.forEach(([id, title, cat, year]) => {
  const x = PLACEHOLDER_INFO[id] || {};
  PROJECTS[id] = { cat, title, year, placeholder: true,
    photos: PLACEHOLDER_PHOTOS[id] ? Array.from({ length: PLACEHOLDER_PHOTOS[id] }, (_, i) => `images/${id}/project/${String(i + 1).padStart(2, "0")}.webp`) : undefined,
    info: Object.assign({ status: "—", client: "—", sector: catLabel(cat), location: "—", collaborators: "—", staff: "—" }, x.info),
    desc: x.desc || DESC };
});

const TOP_CARDS = [
  { id: "towers", home: true, mobileSlides: [1, 2, 3, 4, 5].map((n) => `images/towers/mobile/${n}.webp`), cat: "architecture", catLabel: "Architecture", catLabelFont: "'PP Hatton',serif", title: "Sunday Towers", year: "2022",
    slideshow: true, slides: TOWERS_SLIDES, fromStart: true, pos: "50% 55%", height: "clamp(360px, 40vw, 600px)", mobileHeight: "85vh" },
  { id: "barevdzez", cat: "exhibition", catLabel: "Exhibition", catLabelFont: "'PP Hatton',serif", title: "Venice Biennale of Architecture", year: "2025",
    slideshow: true, slides: BAREVDZEZ_SLIDES, mobileSlides: [1, 2, 3, 4, 5].map((n) => `images/barevdzez/mobile/${n}.webp`), fromStart: true, pos: "50% 50%", height: "clamp(360px, 44vw, 660px)", mobileHeight: "85vh" },
  { id: "vallee", cat: "architecture", catLabel: "Architecture", catLabelFont: "'PP Hatton',serif", title: "Vallée de l'Arpa", year: "2024",
    slideshow: true, slides: VALLEE_SLIDES, mobileSlides: [1, 2, 3, 4, 5].map((n) => `images/vallee/mobile/${n}.webp`), fromStart: true, pos: "50% 50%", height: "clamp(360px, 40vw, 600px)", mobileHeight: "85vh" },
  { id: "totaldrama", cat: "exhibition", catLabel: "Exhibition", catLabelFont: "'PP Hatton',serif", title: "Total Drama", year: "2024",
    slideshow: true, slides: TOTALDRAMA_SLIDES, mobileSlides: [1, 2, 3, 4, 5].map((n) => `images/totaldrama/mobile/${n}.webp`), fromStart: true, pos: "50% 50%", height: "clamp(360px, 40vw, 600px)", mobileHeight: "85vh" },
  { id: "dilijan", cat: "architecture", catLabel: "Architecture", catLabelFont: "'PP Hatton',serif", title: "Dilijan Houses", year: "2024",
    slideshow: true, slides: DILIJAN_SLIDES, mobileSlides: [1, 2, 3, 4, 5].map((n) => `images/dilijan/mobile/${n}.webp`), fromStart: true, pos: "50% 50%", height: "clamp(360px, 40vw, 600px)", mobileHeight: "85vh" },
  { id: "coaf", cat: "architecture", catLabel: "Architecture", catLabelFont: "'PP Hatton',serif", title: "COAF", year: "2022",
    slideshow: true, slides: COAF_SLIDES, mobileSlides: [1, 2, 3, 4, 5].map((n) => `images/coaf/mobile/${n}.webp`), fromStart: true, pos: "50% 50%", height: "clamp(360px, 40vw, 600px)", mobileHeight: "85vh" },
  { id: "arleam", cat: "architecture, urban design", catLabel: "Architecture, Urban Design", catLabelFont: "'PP Hatton',serif", title: "Arleam", year: "2021",
    slideshow: true, slides: ARLEAM_SLIDES, mobileSlides: [1, 2, 3, 4, 5].map((n) => `images/arleam/mobile/${n}.webp`), fromStart: true, pos: "50% 50%", height: "clamp(360px, 40vw, 600px)", mobileHeight: "85vh" },
  { id: "affordable", cat: "architecture, interior", catLabel: "Architecture, Interior", catLabelFont: "'PP Hatton',serif", title: "Affordable Housing", year: "2023",
    slideshow: true, slides: AFFORDABLE_SLIDES, mobileSlides: [1, 2, 3, 4, 5].map((n) => `images/affordable/mobile/${n}.webp`), fromStart: true, pos: "50% 50%", height: "clamp(360px, 40vw, 600px)", mobileHeight: "85vh" },
  { id: "simona", hidden: true, cat: "interior", catLabel: "Interior", catLabelFont: "'PP Right Serif',serif", title: "Simona", year: "2026",
    slideshow: true, slides: SIMONA_SLIDES, pos: "50% 50%", height: "clamp(360px, 40vw, 600px)", mobileHeight: "85vh" },
].filter((c) => !c.hidden); // hidden: true — project is kept in the code but not shown on the site

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
  syncUrl(false);
  window.scrollTo(0, 0);
  render();
}
function go(view, filter) { navigate({ view, filter: filter === undefined ? null : filter, yearFilter: null }); }
function openProject(id) { navigate({ view: "project", project: id }); }
function openPost(id) { navigate({ view: "post", post: id }); }
function toggleMobileMenu() { state.mobileMenuOpen = !state.mobileMenuOpen; render(); }

// note: does not escape HTML — content is trusted, written by us
const esc = (s) => String(s);

function slidesHtml(c) {
  // on mobile, cards with mobileSlides use their own (vertical) frames
  const mobile = state.isMobile && c.mobileSlides && c.mobileSlides.length;
  const list = mobile ? c.mobileSlides : c.slides;
  const key = mobile ? `${c.id}@m` : c.id;
  const pos = mobile ? "50% 50%" : c.pos;
  return list.map((src, i) => `<div data-card-id="${key}" data-slide-index="${i}" data-slide-total="${list.length}"${c.fromStart ? " data-from-start" : ""} style="position:absolute;inset:0;background-image:url(${src});background-size:cover;background-position:${pos};background-repeat:no-repeat;opacity:0;"></div>`).join("");
}

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
    slides = slidesHtml(c);
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
    ["Location", info.location],
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
  let ids = Object.keys(PROJECTS).filter((id) => id !== state.project && catList(PROJECTS[id].cat).some((x) => catList(currentCat).includes(x))).slice(0, 3);
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
        return `<div data-card-fit data-color-card data-color-id="${id}" data-open-project="${id}" class="card-zoom-only card-hover-black" style="position:relative;width:auto;max-width:100%;padding:0 100px;cursor:pointer;overflow:hidden;background-color:#0D0D0E;height:${cardH};">
          <div style="position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;justify-content:space-between;padding:24px;color:#fafafa;">
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
      <a href="${STUDIO_INSTAGRAM}" target="_blank" rel="noreferrer" style="font-family:'PP Stellar',sans-serif;font-style:italic;color:#0D0D0E;font-size:16px;">instagram</a>
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
  // home shows 3 projects: those marked home: true first, then the most recent ones
  const pool = TOP_CARDS.filter((c) => inCat(c.cat, state.filter));
  const pinned = pool.filter((c) => c.home);
  const recent = pool.filter((c) => !c.home).sort((a, b) => b.year - a.year);
  const cards = [...pinned, ...recent].slice(0, 3);
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
  const mobileHeightPool = ["85vh"]; // same height as the big mobile cards
  const shuffle = (arr) => { const a = arr.slice(); for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a; };
  const heights = shuffle(heightPool);
  const mobileHeights = shuffle(mobileHeightPool);
  const titleFonts = ["'PP Gatwick',sans-serif", "'PP Watch',sans-serif", "'PP Migra',serif", "'PP Stellar',sans-serif", "'PP Lettra Mono',monospace"];
  const row = (item, i) => {
    const real = item.kind === "real" ? TOP_CARDS.find((c) => c.id === item.id) : null;
    const boxH = state.isMobile ? mobileHeights[i % mobileHeights.length] : heights[i % heights.length];
    const box = real
      ? `<div class="card-box" style="position:relative;overflow:hidden;width:100%;height:${boxH};background:#e5e5e5;">${slidesHtml(real)}</div>`
      : `<div style="width:100%;height:${boxH};background:#e5e5e5;background-image:repeating-linear-gradient(135deg,#e5e5e5 0 2px,#dcdcdc 2px 4px);display:flex;align-items:center;justify-content:center;">
        <span style="font-family:'PP Lettra Mono',monospace;font-size:13px;color:#8a8a8a;">image — ${esc(item.title)}</span>
      </div>`;
    return `
    <div data-open-project="${item.id}" class="small-card" style="display:flex;flex-direction:column;gap:16px;cursor:pointer;width:${state.isMobile ? "100%" : `calc(50% - ${gapShare}px)`};${align}">
      <div style="display:flex;flex-direction:column;gap:8px;">
        <span style="font-family:${titleFonts[i % titleFonts.length]};font-weight:600;font-size:clamp(20px,3vw,40px);line-height:1.2;text-wrap:pretty;">${esc(item.title)}</span>
        <span style="font-family:'PP Stellar',sans-serif;font-size:16px;line-height:1.4;color:#5a5a5a;">${esc(catLabel(item.cat))} — ${esc(item.year)}</span>
      </div>
      ${box}
    </div>`;
  };
  return `<div style="display:flex;flex-wrap:wrap;gap:100px 24px;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};margin-right:0px;margin-top:${state.isMobile ? "0px" : "100px"};margin-bottom:100px;">
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
  const realItems = realCards.map((c) => ({ id: c.id, title: c.title, cat: c.cat, year: c.year, kind: "real" }));
  const phItems = PLACEHOLDER_ITEMS.filter((p) => inCat(p.cat, state.filter) && (!state.yearFilter || String(p.year) === state.yearFilter)).map((p) => ({ ...p, kind: "ph" }));
  const items = [...realItems, ...phItems].sort((a, b) => b.year - a.year);
  const renderBig = (it) => it.kind === "real" ? cardHtml(TOP_CARDS.find((c) => c.id === it.id)) : bigCardHtml(it);
  let html = "";
  // mobile: one column of identical tall cards with the title on top
  if (state.isMobile) return items.length ? smallCardsHtml(items) : "";
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
  const cards = TOP_CARDS.filter((c) => inCat(c.cat, state.filter) && (!state.yearFilter || String(c.year) === state.yearFilter)).sort((a, b) => b.year - a.year);
  const align = state.isMobile ? "text-align:center;" : "text-align:left;";
  const years = [...new Set([...TOP_CARDS, ...PLACEHOLDER_META.map((m) => ({ cat: m[2], year: m[3] }))].filter((c) => inCat(c.cat, state.filter)).map((c) => String(c.year)))].sort((a, b) => b - a);
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
      <span data-go="people" class="backlink" style="font-family:'PP Hatton',serif;font-weight:500;font-size:16px;cursor:pointer;border-bottom:1px solid #000;padding-bottom:4px;">people →</span>
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
      ${titleWrap(p.title, p.subtitleOverride || `${catLabel(p.cat)} — ${p.year}`, null, null, 100)}
      ${infoTable(p.info)}
      <div style="padding:100px 0 100px;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
        <p style="max-width:600px;margin:${margin};font-size:16px;line-height:30px;">${p.desc.split("\n\n").join("<br><br>")}</p>
      </div>
      ${p.photos ? p.photos.map((src) => `
        <img class="hero-hover" src="${src}" alt="${esc(p.title)}" loading="lazy" style="display:block;width:100%;height:auto;margin-bottom:10px;background-color:#e5e5e5;">`).join("") : p.placeholder ? `<div class="hero-hover" style="width:100%;height:clamp(420px, 58vw, 880px);margin-bottom:10px;background:#e5e5e5;background-image:repeating-linear-gradient(135deg,#e5e5e5 0 2px,#dcdcdc 2px 4px);display:flex;align-items:center;justify-content:center;"><span style="font-family:'PP Lettra Mono',monospace;font-size:13px;color:#8a8a8a;">image — ${esc(p.title)}</span></div>` : `<div class="hero-hover" style="width:100%;height:clamp(420px, 58vw, 880px);margin-bottom:10px;background-size:cover;background-repeat:no-repeat;background-color:#e5e5e5;background-image:url(${p.hero});background-position:${p.heroPos};"></div>`}
      ${slides.map((src, i) => `
        <div class="hero-hover" style="width:100%;height:clamp(420px, 46vw, 680px);margin-bottom:10px;background-image:url(${src});background-size:cover;background-position:50% 50%;background-repeat:no-repeat;background-color:#e5e5e5;"></div>`).join("")}
      <div style="margin:60px 0 0;margin-left:${state.isMobile ? "0px" : "var(--pad-left)"};${align}">
        <span data-share class="backlink" style="font-family:'PP Hatton',serif;font-weight:500;font-size:16px;cursor:pointer;border-bottom:1px solid #000;padding-bottom:4px;">share</span>
      </div>
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
        <a href="${STUDIO_INSTAGRAM}" target="_blank" rel="noreferrer" class="backlink" style="font-family:'PP Hatton',serif;font-weight:500;font-size:16px;line-height:1;width:fit-content;border-bottom:1px solid #000;padding-bottom:6px;color:#0D0D0E;text-decoration-line:none;">instagram</a>
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
      <a href="${STUDIO_INSTAGRAM}" target="_blank" rel="noreferrer" class="hoverlink" style="justify-self:end;font-size:16px;line-height:1;color:#0D0D0E;font-family:'PP Migra',serif;order:${order.instagram};">instagram</a>
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
      const first = document.querySelector(`[data-card-id="${id}"]`);
      const total = Number(first.dataset.slideTotal);
      // fromStart cards always begin at frame 1; others start on a random frame
      slideState[id] = "fromStart" in first.dataset ? 0 : Math.floor(Math.random() * total);
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

// ============================================================
// GALLERY — click a photo on a project page to view it full screen (desktop only)
// ============================================================
const lightbox = { el: null, list: [], i: 0 };
function lbShow(i) {
  const n = lightbox.list.length;
  lightbox.i = (i + n) % n;
  const img = lightbox.el.querySelector(".lb-stage img");
  img.style.opacity = 0;
  const src = lightbox.list[lightbox.i];
  img.onload = () => { img.style.opacity = 1; };
  if (img.getAttribute("src") === src) img.style.opacity = 1;
  else setTimeout(() => { img.src = src; }, img.getAttribute("src") ? 150 : 0);
  lightbox.el.querySelector(".lb-count").textContent = `${lightbox.i + 1} / ${n}`;
  [1, -1].forEach((d) => { new Image().src = lightbox.list[(lightbox.i + d + n) % n]; }); // preload neighbours
}
function lbOpen(list, i) {
  lightbox.list = list;
  const el = document.createElement("div");
  el.className = "lb";
  el.innerHTML = `<button class="lb-close" aria-label="Close">×</button>
    <button class="lb-prev" aria-label="Previous">←</button>
    <div class="lb-stage"><img alt=""></div>
    <button class="lb-next" aria-label="Next">→</button>
    <div class="lb-count"></div>`;
  document.body.appendChild(el);
  document.body.style.overflow = "hidden";
  lightbox.el = el;
  lbShow(i);
  requestAnimationFrame(() => el.classList.add("open"));
  el.addEventListener("click", (e) => {
    if (e.target.closest(".lb-prev")) lbShow(lightbox.i - 1);
    else if (e.target.closest(".lb-next") || e.target.closest(".lb-stage img")) lbShow(lightbox.i + 1);
    else lbClose(); // cross or empty space
  });
}
function lbClose() {
  const el = lightbox.el;
  if (!el) return;
  lightbox.el = null;
  el.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => el.remove(), 250);
}
document.addEventListener("click", (e) => {
  const img = e.target.closest("main img.hero-hover");
  if (!img || state.view !== "project" || state.isMobile || lightbox.el) return;
  const imgs = Array.from(document.querySelectorAll("main img.hero-hover"));
  lbOpen(imgs.map((x) => x.getAttribute("src")), imgs.indexOf(img));
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.el) return;
  if (e.key === "Escape") lbClose();
  else if (e.key === "ArrowRight") lbShow(lightbox.i + 1);
  else if (e.key === "ArrowLeft") lbShow(lightbox.i - 1);
});
MOBILE_MQ.addEventListener("change", () => { if (MOBILE_MQ.matches) lbClose(); });

// ============================================================
// URLS — every page has its own address: projects/coaf/, news/…, about/ …
// (the pages themselves are generated by tools/build.py)
// ============================================================
const BASE = new URL(document.baseURI).pathname; // "/ets/" on github.io, "/" on our own domain
const CAT_SLUGS = { architecture: "architecture", "urban design": "urban-design", interior: "interior", exhibition: "exhibition" };
const SIMPLE_VIEWS = ["news", "people", "about", "contact"];
function projectSlug(id) { return (PROJECTS[id] && PROJECTS[id].slug) || id; }
function pathFor(s) {
  if (s.view === "projects") return s.filter ? `projects/${CAT_SLUGS[s.filter] || ""}/` : "projects/";
  if (s.view === "project") return `projects/${projectSlug(s.project)}/`;
  if (s.view === "post") return `news/${s.post}/`;
  if (SIMPLE_VIEWS.includes(s.view)) return `${s.view}/`;
  return "";
}
function stateFromPath() {
  const [a, b] = location.pathname.slice(BASE.length).split("/").filter(Boolean).map(decodeURIComponent);
  if (a === "projects") {
    if (!b) return { view: "projects", filter: null, yearFilter: null };
    const cat = Object.keys(CAT_SLUGS).find((k) => CAT_SLUGS[k] === b);
    if (cat) return { view: "projects", filter: cat, yearFilter: null };
    const id = Object.keys(PROJECTS).find((k) => projectSlug(k) === b);
    if (id) return { view: "project", project: id };
  }
  if (a === "news" && b && NEWS_ITEMS.some((n) => n.id === b)) return { view: "post", post: b };
  if (SIMPLE_VIEWS.includes(a) && !b) return { view: a };
  return { view: "home", filter: null };
}
function titleFor(s) {
  const site = "Electric Architects";
  if (s.view === "project" && PROJECTS[s.project]) return `${PROJECTS[s.project].title} — ${site}`;
  if (s.view === "post") { const n = NEWS_ITEMS.find((x) => x.id === s.post); if (n) return `${n.title} — ${site}`; }
  if (s.view === "projects") return `${s.filter ? catLabel(s.filter) : "Projects"} — ${site}`;
  if (SIMPLE_VIEWS.includes(s.view)) return `${catLabel(s.view)} — ${site}`;
  return site;
}
function syncUrl(replace) {
  const url = BASE + pathFor(state);
  if (location.pathname !== url) history[replace ? "replaceState" : "pushState"](null, "", url);
  document.title = titleFor(state);
}
window.addEventListener("popstate", () => {
  lbClose();
  Object.assign(state, stateFromPath(), { menuOpen: null, mobileMenuOpen: false });
  document.title = titleFor(state);
  window.scrollTo(0, 0);
  render();
});

// share: phone → native share sheet, desktop → copy the link
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-share]");
  if (!el) return;
  const url = location.href;
  if (state.isMobile && navigator.share) { navigator.share({ title: document.title, url }).catch(() => {}); return; }
  const done = () => { el.textContent = "link copied"; setTimeout(() => { el.textContent = "share"; }, 1600); };
  if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, () => window.prompt("Copy this link:", url));
  else window.prompt("Copy this link:", url);
});

// ============================================================
// START — open the page the URL points to
// ============================================================
Object.assign(state, stateFromPath());
syncUrl(true);
render();
