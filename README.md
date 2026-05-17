# 🚀 MentorSarthi App (Frontend Architecture Sprint)

A premium, role-based mobile application built with React Native and Expo. This project connects mentees with top industry experts for 1:1 guidance. 

This repository reflects a major frontend architecture overhaul, transitioning the app from a flat prototype into a highly scalable, production-ready mobile application with premium Awwwards-inspired fluid animations, modular components, and native-thread performance.

---

## ✨ Key Features & Milestones Achieved

* **Role-Based Routing:** Seamlessly separated navigation states for Mentors `(mentor-tabs)` and Mentees `(tabs)` using Expo Router's advanced group routing.
* **Premium UI/UX:** Implemented a modern, minimalist design system using NativeWind v4 (Tailwind CSS) with perfect mobile layout proportions and safe-area handling across iOS and Android.
* **Reusable Component Library:** Abstracted core UI elements (`PrimaryButton`, `InputField` with auto-password toggles) to ensure complete design consistency and rapid future development.
* **Fluid Animations:** Integrated `react-native-reanimated` for buttery-smooth, native-thread animations, including staggered list fade-ins and custom in-app push notification toasts.
* **Push Notification Infrastructure:** Built a robust, environment-aware custom hook (`usePushNotifications`) to safely request permissions and generate device tokens without crashing in Expo Go.
* **Cross-Platform Parity:** Configured PostCSS and Metro bundler to ensure NativeWind classes render flawlessly on Web, iOS, and Android.

---

## 🛠 Tech Stack

* **Framework:** React Native / [Expo](https://expo.dev/) (SDK 53+)
* **Navigation:** Expo Router (File-based routing)
* **Styling:** NativeWind v4 (Tailwind CSS)
* **Animations:** React Native Reanimated 3
* **Icons:** Expo Vector Icons (Ionicons)
* **Notifications:** Expo Notifications & Expo Device

---

## 📂 Project Architecture

The codebase is organized for maximum scalability and readability:

```text
MentorSarthiApp/
├── app/                      # Expo Router file-based routing
│   ├── (auth)/               # Authentication flow (Login, Register)
│   ├── (tabs)/               # Mentee bottom navigation (Dashboard, Find Expert)
│   ├── (mentor-tabs)/        # Mentor bottom navigation (Requests, Earnings)
│   ├── _layout.tsx           # Global app layout & routing config
│   └── index.tsx             # Role-selection Welcome Screen
├── components/               # Reusable UI components (Buttons, Inputs)
├── hooks/                    # Custom React hooks (usePushNotifications)
├── assets/                   # Static images and fonts
├── global.css                # Tailwind CSS entry point for Web support
└── tailwind.config.js        # NativeWind theme & design system config
```
🚀 Getting Started
Prerequisites
Ensure you have Node.js installed, along with the Expo CLI.

Installation
Clone the repository:

Bash
git clone <repository-url>
Install dependencies:

Bash
npm install
Start the development server (with cache cleared):

Bash
npx expo start -c
Testing the App
iOS / Android: Download the Expo Go app on your physical device and scan the QR code in the terminal.

Web: Press w in the terminal to open the web bundler (Tailwind CSS fully supported).

👨‍💻 Author
Nandakishore KS Full Stack Developer & AI Engineer Passionate about building scalable products, complex motion design, and premium user experiences.