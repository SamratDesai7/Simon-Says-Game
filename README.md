<h1 align="center">🎮 Simon Says Game</h1>

<p align="center">
  <img src="https://img.shields.io/github/repo-size/SamratDesai7/Simon-Says-Game?style=for-the-badge" />
  <img src="https://img.shields.io/github/languages/top/SamratDesai7/Simon-Says-Game?style=for-the-badge" />
  <img src="https://img.shields.io/github/last-commit/SamratDesai7/Simon-Says-Game?style=for-the-badge" />
</p>

---

## 🧠 Project Overview

“Simon Says” is a classic memory game where the player must repeat an increasingly long sequence of colors. This version is built with **HTML, CSS, and vanilla JavaScript**, focusing on clean DOM manipulation and smooth UX :contentReference[oaicite:1]{index=1}.

Players advance levels by correctly matching the sequence and lose upon making a mistake, with the option to restart.

---

## ✨ Features

- 🕹️ **Start by pressing any key** (or clicking "Start" button on smaller screens)
- 🔵🔴🟢🟡 A sequence of colored button flashes that ramps up in length
- ✅ **Level tracking**: display current level
- ❌ **Game over** screen with final level shown
- 💾 **High score retention** using localStorage (optional enhancement)
- 📱 Fully **responsive** and works across devices :contentReference[oaicite:2]{index=2}

---

## 🛠️ Tech Stack

| Technology         | Purpose                       |
|--------------------|-------------------------------|
| **HTML5**          | Semantic page structure       |
| **CSS3**           | Styling, animations, responsiveness |
| **JavaScript (ES6)** | Game logic, DOM updates, event handling |

---

## 📂 File Structure (Example)

```bash
Simon-Says-Game/
├── index.html        # Main game UI
├── styles.css        # Styles and animations
├── script.js         # Core logic: sequences, input, levels
└── assets/           # (Optional) sounds or icons
