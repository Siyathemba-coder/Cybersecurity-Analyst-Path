
# Cybersecurity Analyst - South Africa Career Guide

[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)

---

## Overview

A fully redesigned, single-page career guide for aspiring Cybersecurity Analysts in South Africa. The site tells a warm story about the role - who does it, why it matters in Mzansi, and how to build a career in it.

Built from scratch as a single self-contained HTML file (no build tools, no dependencies to install). Just open it in a browser.

---

## What changed from the original

The original project was a multi-page site with a dark terminal aesthetic. This version is a complete redesign:

- Single file instead of 9 separate files
- South African context throughout - Rand salaries, POPIA compliance, local employers, SA market data
- Warm editorial design inspired by SA's earth and sunset tones, with SA flag accent colours
- Scroll-triggered animations on cards, skill bars, and the career timeline
- Floating hero stat cards with gentle breathing animations

---

## Structure

Everything lives in one file:

```
cybersecurity-analyst.html
```

Sections inside the file:

1. **Hero** - "Guard Mzansi's digital world" with Ubuntu proverb, four floating stat cards (R2.78B losses, 3rd most attacked in Africa, R1.1M+ salary, 42% job growth)
2. **What You'll Do** - Six responsibility cards covering Monitoring, Incident Response, Threat Intelligence, Vulnerability Management, POPIA Compliance, and Security Awareness
3. **Pull Quote** - Full-width quote section breaking the page rhythm
4. **Where You'll Work** - SA industry cards: Banking, Telecoms, Government, Healthcare, Mining, and MSSPs with named SA companies
5. **Skills and Tools** - Animated skill bars (technical and human skills) plus a tool chip cloud of 16 real-world tools
6. **The SA Market** - Chart.js line graph of SA cyber roles filled vs open positions (2018-2026), with four stat callouts
7. **Career Path** - Four-phase timeline (0-2 yrs to 10+ yrs) with certs per phase, salary grid in Rands, and a "getting started in SA" note

---

## SA-specific content

- Salaries in ZAR (R220K entry-level to R4M+ CISO)
- POPIA listed as a critical and SA-specific skill
- Named employers: Standard Bank, Absa, Nedbank, FNB, Capitec, MTN, Vodacom, Telkom, Netcare, Mediclinic, Discovery, Anglo American, Sasol, Eskom, CSIR, SITA
- Local MSSPs: Liquid Cyber, Performanta, BCX Security
- Education: University of Pretoria, Wits, UCT, UNISA, SITA bursaries
- SA context in incident response copy (Transnet, SARS, Experian breaches mentioned)
- Chart data uses SA-specific job figures, not global numbers

---

## Design

- **Fonts** - Playfair Display (headings, serif, italic accents) and DM Sans (body, light weight)
- **Colours** - Warm cream base (#faf6ef) with SA flag accents: green (#007a4d), gold (#ffb612), red (#de3831), blue (#002395)
- **SA flag stripe** - Thin 6-colour stripe at the very top of the page
- **Flag icons** - Mini flag column strips in the nav and footer

---

## Technologies

- HTML5
- CSS3 (custom properties, grid, flexbox, keyframe animations)
- JavaScript (ES6, IntersectionObserver for scroll animations)
- Chart.js (via CDN)
- Google Fonts (Playfair Display, DM Sans - via CDN)

No npm, no build step, no frameworks. Open the file and it works.

---

## Data sources

CSIR, Interpol Africa Cyberthreat Assessment Report, CareerJunction SA, Cybersecurity Ventures, Check Point Research - 2023/2024
