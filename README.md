# Pautang B1 Trade

**Pautang B1 Trade** is a simulated online lending platform built with HTML, CSS, and JavaScript.  
It provides a clean, corporate-style interface with an animated falling peso and dollar background.

Live site: [https://b1loan.github.io/Utang-Now/](https://b1loan.github.io/Utang-Now/)

---

## 💼 Features

- Animated **falling peso and dollar** background (transparent gradient style)
- **Login Page** with file upload and remember-me functionality (LocalStorage)
- **Auto-slideshow** page that starts instantly (0.8-second interval)
- **Dashboard** with membership instructions
- **Membership Page** with payment upload simulation
- **Borrow Page** with loan input and limits
- **Loan Calculation Page**
- **Platform Fee Page** with QR code upload and 10-second verification message
- **About Us Page** with company details and contact info
- Fully **responsive** design for Android/iOS
- **Simulated backend** — no real transactions occur

---

## 🧩 Pages Included

| Page | File | Description |
|------|------|--------------|
| Login | `index.html` | User login and validation |
| Files | `files.html` | Auto-start slideshow of lending images |
| Dashboard | `dashboard.html` | Main user dashboard with membership rules |
| Membership | `membership.html` | Membership fee upload page |
| Borrow | `borrow.html` | Simulated loan entry page |
| Calculate | `calculate.html` | Loan details and calculation page |
| Payment | `payment.html` | Platform fee QR upload & verification |
| About Us | `about.html` | Company info and contact section |

---

## 🧠 Simulation Logic

- **LocalStorage** keeps the user’s name (used in dashboard greeting).  
- All **file uploads** are simulated locally — no server storage.  
- After submitting payment, users see a **10-second verification screen** (“Waiting 24 hours”).

---

## 📂 Folder Structure

```
Pautang-Peso/
│
├── index.html
├── files.html
├── dashboard.html
├── membership.html
├── borrow.html
├── calculate.html
├── payment.html
├── about.html
│
├── style.css
├── script.js
├── slideshow.js
├── dashboard.js
├── borrow.js
├── payment.js
│
└── files/
    ├── IMG_9464.jpeg
    ├── IMG_9465.jpeg
    ├── IMG_9466.jpeg
    ├── ... etc ...
```

---

## 🏢 About the Company

**Author:** Pautang B1 Trade  
**Company:** LHL ONLINE LENDING, INC  
**Company Registration:** CS201916699  
**Certificate of Authority:** 3119  
**Address:** Unit D5 Echelon Tower, 2100 A Mabini St., Malate, Manila, Philippines  
**Email:** help@pautangpeso.com  
**Hotline (Globe):** +639666511466  
**Hotline (Smart):** +639397195157

---

## ⚙️ How to Deploy to GitHub Pages

1. Upload all project files (including `files/` folder) to your GitHub repository.
2. Go to **Settings → Pages → Branch** → choose `main` (or `master`) and `/ (root)` folder.
3. Wait a few minutes and open your site at:  
   `https://yourusername.github.io/Pautang-Peso/`

---

© 2025 Pautang B1 Trade. All Rights Reserved.
