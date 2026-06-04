# FRESKA — Ocean Goods · Sitio web

Landing page premium para **FRESKA Ocean Goods (Venezuela)**, construida con el lenguaje
de diseño editorial limpio de Mowi (mucho blanco, fotografía a sangre, tipografía grotesca,
navegación sticky y narrativa por secciones) expresado con la identidad de marca FRESKA
(naranja + blanco, wordmark + firma manuscrita, etiqueta de trazabilidad).

## Cómo verlo

Es un sitio estático (HTML + CSS + JS, sin build). Ábrelo directamente o sirve la carpeta:

```bash
cd freska
python3 -m http.server 8080
# abre http://localhost:8080
```

## Estructura

```
freska/
├── index.html      # Estructura y contenido
├── styles.css      # Design system (tokens en :root) + componentes
├── script.js       # Productos, animaciones, nav, formulario
└── assets/
    ├── hero.jpg            # (opcional) imagen de héroe a sangre
    ├── origen.jpg          # (opcional) imagen sección "Origen"
    ├── products/           # (opcional) fotos reales de producto
    │   ├── pulpo.jpg
    │   ├── atun.jpg
    │   ├── pargo.jpg
    │   └── salmon.jpg
    └── recetas/            # (opcional) fotos de recetas
        ├── salmon.jpg · atun.jpg · pulpo.jpg
```

## Sobre las imágenes

El sitio **funciona perfecto sin fotos**: cada producto recrea fielmente la **etiqueta de
empaque FRESKA** (ESPECIE / ZONA DE PESCA FAO / ORIGEN / PESO NETO / CONSERVACIÓN) con una
ilustración SVG de la especie.

Cuando coloques las fotos reales en `assets/`, el JS las detecta automáticamente:
la foto sustituye a la etiqueta recreada en cada tarjeta. Para activar la imagen del héroe,
sube `assets/hero.jpg` y pon `opacity: .6` en la regla `.hero__bg::after` de `styles.css`.

## Personalización rápida

Todos los tokens de marca están en `:root` dentro de `styles.css`. La paleta se
**extrajo del archivo oficial del logo** (`LOGOTIPO PRINCIPAL - FRESKA.ai`):

| Token       | Valor       | Uso                                   |
|-------------|-------------|---------------------------------------|
| `--coral`   | `#EB6E42`   | Color primario de marca               |
| `--blue`    | `#40739E`   | Secundario (océano) — héroe           |
| `--rust`    | `#B35843`   | Acento — sección CTA                  |
| `--cream`   | `#ECE9E1`   | Fondo de marca (no blanco puro)       |
| `--ink`     | `#2B2620`   | Texto principal                       |

El **logotipo oficial** vive en `assets/brand/` (versiones coral, crema y blanca,
con fondo transparente, extraídas del .ai). Tipografía: Archivo (display),
Inter (texto), Spline Sans Mono (etiquetas tipo "OCEAN GOODS").

Los datos de producto (especie, FAO, origen, peso, precio) están en el array
`PRODUCTS` de `script.js` — edítalos ahí.

## Catálogo incluido

| Producto                    | Especie               | FAO     | Origen           |
|-----------------------------|-----------------------|---------|------------------|
| Pulpo Tentáculos            | Octopus vulgaris      | FAO 34  | Océano Atlántico |
| Atún Medregal en Churrasco  | Thunnus obesus        | FAO 31  | Océano Atlántico |
| Filete de Pargo Rojo        | Lutjanus campechanus  | FAO 31  | Océano Atlántico |
| Filete de Salmón            | Salmo salar           | FAO 87  | Chile            |
