# 🎨 React Multi-Theme Switcher App

A lightweight and elegant **React + TypeScript** application that allows users to switch between **three distinct themes**:  
**Minimal**, **Dark**, and **Colorful** — all built using **Tailwind CSS**, powered by the **Context API**, and persisted using **localStorage**.

---

## 🌟 Features

✅ **Three Dynamic Themes**  
- 🧼 Minimal — Clean and modern look  
- 🌑 Dark — Night-friendly interface  
- 🌈 Colorful — Bright and vibrant  

✅ **Theme Persistence**  
- Your chosen theme is remembered across sessions using `localStorage`.

✅ **Global State Management**  
- Implemented using **React's Context API** for clean and scalable theme control.

✅ **Tailwind CSS**  
- Utility-first styling with support for custom themes and layout styling.

✅ **Responsive & Accessible**  
- Mobile-friendly and keyboard-accessible design.

---

## 🛠️ Tech Stack

- ⚛️ **React** with **TypeScript**
- ⚡ **Vite** for blazing-fast development
- 🎨 **Tailwind CSS**
- 🧠 **Context API** for state management
- 💾 **localStorage** for persistence

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-theme-switcher.git
cd react-theme-switcher
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

The app will be running at: [http://localhost:5173](http://localhost:5173)

---

## 🧩 Project Structure

```bash
src/
│
├── components/        # Reusable UI components
├── context/           # ThemeContext implementation
├── themes/            # Theme-related classes (optional)
├── App.tsx            # Main App component
├── main.tsx           # App entry point
└── index.css          # Tailwind & global styles
```

---

## 🧠 How It Works

- A `ThemeContext` provides the current theme and toggle logic across the app.
- Tailwind utility classes are dynamically applied using the selected theme.
- On load, the theme is fetched from `localStorage` if available.
- Theme changes are instantly reflected and saved for next visits.

---

## 📸 Screenshots

> _Include screenshots here if you have them._

---

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

---

## ✨ Future Enhancements

- Add support for system theme detection
- Transition animations between theme switches
- Save theme preference per route or page

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Made with ❤️ using React, TypeScript, and Tailwind CSS.
