# prototipo2
# Postpartum Support Website

A compassionate, responsive, and interactive website offering real emotional and practical support for people navigating the postpartum period. Built with pure HTML, CSS, and JavaScript—no frameworks, only Font Awesome for icons.

## Description

This project was born from real experience. It provides verified, empathetic content about physical recovery, emotional well-being, and daily postpartum life—**not from theory, but from lived truth**.

Features include:
- A contact form with **JavaScript validation** (4+ fields)
- A personal journal with **CRUD functionality** (stored as JSON in `localStorage`)
- A responsive gallery with **10+ real, non-stock images**
- A dedicated **parallax page** with reflective messages on motherhood
- Full mobile-first responsive design for **mobile, tablet (≥600px), and desktop (≥768px)**
- **Zero Lorem Ipsum**—every word is intentional and in Spanish (with correct tildes and orthography)

All developer-facing code (file names, classes, variables, comments) is in **English**. All user-facing content is in **Spanish**, crafted with care and realism.

## Inspiration

This design was inspired by:  
[Addressing Postpartum Depression – Conversational AI](https://dribbble.com/shots/24175831-Addressing-Postpartum-Depression-Conversational-AI) on Dribbble.

But more importantly, it was **inspired by Zaira Hernández Martínez**, who generously shared her raw, honest, and powerful experience as a new mother—her joys, struggles, doubts, and triumphs. Her voice is the heart of this project.

## Technologies Used

- **HTML5** – Semantic, accessible, W3C-compliant  
- **CSS3** – Flexbox, media queries, responsive layout  
- **JavaScript** – DOM manipulation, form validation, CRUD operations  
- **Font Awesome** – Used **only for icons**, as permitted by project rules  

> ⚠️ **No CSS frameworks, no external libraries** (except Font Awesome for icons).

## Features

### 📱 Responsive Design
- Header and footer adapt clearly across 3 breakpoints  
- Gallery: 2 images/row (mobile) → 3 (tablet) → 5 (desktop)  
- Typography and spacing optimized per device

### ✍️ Contact Form (JavaScript Validation)
- Fields: name, email, support type (select), message  
- **100% validated in JavaScript**—no reliance on HTML5 `required`  
- Real-time error messages in Spanish

### 📓 Postpartum Journal (CRUD)
- **Create**: Add entries with date, title, and personal reflection  
- **Read**: Entries displayed dynamically from browser storage  
- Data stored as **JSON** in `localStorage`

### 🌄 Parallax Page (`parallax.html`)
- Separate page with true `background-attachment: fixed` effect  
- Messages like: *“Siéntete orgullosa: no solo diste vida…”*  
- Disabled on mobile for performance, but fully responsive

### ✨ Interactive Details
- Hover effects on images (elevation + soft shadow)  
- Toggleable emotional tips section  
- Smooth scroll navigation

## Naming Conventions

- Files: `hyphen-case` (`parallax.html`, `main.js`)  
- CSS: `hyphen-case` (`.journal-entry`, `#contact-form`)  
- JavaScript:  
  - Constants: `UPPER_SNAKE_CASE` (`SUBMIT_BUTTON`)  
  - Functions/variables: `camelCase` (`validateForm`, `journalData`)  
  - Classes: `PascalCase`

## Validation & Quality

- ✅ **W3C Validated**  
- ✅ Formatted with **2-space indentation** (VS Code "Format Document")  
- ✅ All image filenames in English (`baby-sleeping.jpg`, `pelvic-floor-care.jpg`)  
- ✅ No broken links or console errors

## Authors

- **Sebastian Martinez Salazar** – Development, design, content integration  
- **Zaira Hernández Martínez** – Lived experience, emotional guidance, content authenticity

> ❤️ This project exists because Zaira chose to share her truth. Her courage makes this more than code—it’s a companion for others walking the same path.

## License

This project is for educational and non-commercial purposes.  
Licensed under **CC0 1.0 Universal** — see `LICENSE.md` for details.

## Acknowledgements

- To **Zaira Hernández Martínez**, for trusting us with her story and ensuring this site speaks with **real human warmth**, not clinical detachment.  
- To every parent who has ever felt alone in the postpartum journey—you are seen.  
- To the open-source community for tools like Font Awesome and VS Code.  
- To the Dribbble designer who sparked the visual direction.

⌨️ With love and respect,  
**Sebastian & Zaira**
