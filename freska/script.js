/* ============================================================
   FRESKA — Ocean Goods · interactions
   ============================================================ */

/* ---------- Fish illustrations (inline SVG silhouettes) ---------- */
const FISH = {
  pulpo: `<svg class="label__fish" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M32 8c8 0 13 6 13 14 0 4-1 6-1 8"/><path d="M19 30c0-2-1-4-1-8C18 14 24 8 32 8"/>
    <circle cx="27" cy="22" r="1.6" fill="currentColor" stroke="none"/><circle cx="37" cy="22" r="1.6" fill="currentColor" stroke="none"/>
    <path d="M20 32c-3 6-8 8-12 7M24 34c-2 8-6 12-10 13M30 35c-1 9-3 14-5 17M34 35c1 9 3 14 5 17M40 34c2 8 6 12 10 13M44 32c3 6 8 8 12 7"/>
  </svg>`,
  atun: `<svg class="label__fish" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M6 32c8-11 24-15 38-11 6 2 11 6 14 11-3 5-8 9-14 11-14 4-30 0-38-11Z"/>
    <path d="M58 32l-8-7m8 7l-8 7"/><path d="M30 21l5 6m-5 16l5-6"/>
    <circle cx="18" cy="30" r="1.8" fill="currentColor" stroke="none"/>
  </svg>`,
  pargo: `<svg class="label__fish" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M8 32c7-12 22-16 34-12 5 2 9 5 12 9 1 2 1 4 0 6-3 4-7 7-12 9-12 4-27 0-34-12Z"/>
    <path d="M54 26c4-2 6-1 6-1s-1 4-4 5M54 38c4 2 6 1 6 1s-1-4-4-5"/>
    <path d="M24 19v26M32 21v22"/><circle cx="16" cy="30" r="1.8" fill="currentColor" stroke="none"/>
  </svg>`,
  salmon: `<svg class="label__fish" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5 32c9-10 24-13 37-9 6 2 12 5 17 9-5 4-11 7-17 9-13 4-28 1-37-9Z"/>
    <path d="M59 32l-7-6m7 6l-7 6"/><path d="M22 23q6 9 0 18"/>
    <circle cx="15" cy="30" r="1.8" fill="currentColor" stroke="none"/>
  </svg>`
};

/* ---------- Product data (from FRESKA packaging) ---------- */
const PRODUCTS = [
  {
    cat: "Mariscos", name: "Pulpo Tentáculos", label: "PULPO TENTÁCULOS",
    fish: "pulpo", sci: "Octopus vulgaris", fao: "FAO 34",
    origen: "Océano Atlántico", peso: "500 g", temp: "0° a 4 °C", price: "18,90",
    photo: "assets/products/pulpo.jpg"
  },
  {
    cat: "Pescado azul", name: "Atún Medregal en Churrasco", label: "ATÚN MEDREGAL EN CHURRASCO",
    fish: "atun", sci: "Thunnus obesus", fao: "FAO 31",
    origen: "Océano Atlántico", peso: "500 g", temp: "0° a 4 °C", price: "16,50",
    photo: "assets/products/atun.jpg"
  },
  {
    cat: "Pescado blanco", name: "Filete de Pargo Rojo", label: "FILETE DE PARGO ROJO",
    fish: "pargo", sci: "Lutjanus campechanus", fao: "FAO 31",
    origen: "Océano Atlántico", peso: "500 g", temp: "0° a 4 °C", price: "15,90",
    photo: "assets/products/pargo.jpg"
  },
  {
    cat: "Pescado azul", name: "Filete de Salmón", label: "FILETE DE SALMÓN",
    fish: "salmon", sci: "Salmo salar", fao: "FAO 87",
    origen: "Chile", peso: "500 g", temp: "0° a 4 °C", price: "19,90",
    photo: "assets/products/salmon.jpg"
  }
];

function productCard(p) {
  return `
  <article class="product reveal">
    <div class="product__photo" data-img="${p.photo}">
      <div class="label">
        <div class="label__head">
          <span class="label__mark">FRESKA<sup>®</sup></span>
          <span class="label__sign">freska</span>
          <span class="label__sub">Ocean Goods · Venezuela</span>
        </div>
        <div class="label__body">
          <div class="label__name">${p.label}</div>
          ${FISH[p.fish]}
          <ul class="label__specs">
            <li><b>ESPECIE:</b> ${p.sci}</li>
            <li><b>ZONA DE PESCA:</b> ${p.fao}</li>
            <li><b>ORIGEN:</b> ${p.origen}</li>
            <li><b>PESO NETO:</b> ${p.peso}</li>
            <li><b>CONSERVACIÓN:</b> ${p.temp}</li>
          </ul>
        </div>
        <div class="label__foot">Listo para consumir<br>Mantener refrigerado</div>
      </div>
    </div>
    <div class="product__info">
      <span class="product__cat">${p.cat}</span>
      <h3 class="product__name">${p.name}</h3>
      <span class="product__sci">${p.sci} · ${p.fao}</span>
      <div class="product__row">
        <span class="product__price">${p.price} €<span> / ${p.peso}</span></span>
        <button class="product__add" aria-label="Añadir ${p.name}">+</button>
      </div>
    </div>
  </article>`;
}

/* ---------- Render products ---------- */
const grid = document.getElementById("productGrid");
if (grid) grid.innerHTML = PRODUCTS.map(productCard).join("");

/* ---------- Apply optional background images (graceful if missing) ---------- */
document.querySelectorAll("[data-img]").forEach((el) => {
  const src = el.getAttribute("data-img");
  if (!src) return;
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url("${src}")`;
    el.classList.add("has-img");
    // When a real product photo loads, fade out the recreated label
    const label = el.querySelector(".label");
    if (label) label.style.display = "none";
  };
  img.src = src;
});

/* ---------- Nav: stuck state + mobile menu ---------- */
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const mobile = document.getElementById("navMobile");

window.addEventListener("scroll", () => {
  nav.classList.toggle("is-stuck", window.scrollY > 12);
}, { passive: true });

if (toggle) {
  toggle.addEventListener("click", () => {
    const open = mobile.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  mobile.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobile.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- Active nav link via section observation ---------- */
const navLinks = [...document.querySelectorAll(".nav__links a")];
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);
const sectionIO = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      navLinks.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }
  }),
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => sectionIO.observe(s));

/* ---------- Newsletter form ---------- */
const form = document.getElementById("newsletterForm");
const note = document.getElementById("formNote");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    note.textContent = ok
      ? "¡Gracias! Pronto recibirás lo más fresco de FRESKA."
      : "Introduce un correo válido, por favor.";
    note.style.color = ok ? "#9CE5B4" : "#FFB0A0";
    if (ok) form.reset();
  });
}

/* ---------- Year ---------- */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
