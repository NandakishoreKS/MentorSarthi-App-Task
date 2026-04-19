# MentorSarthi Mobile App 🚀

A high-fidelity, cross-platform mobile application built for the Enorvia Global Week 1 Internship Task. This application provides a modern UI/UX for mentees to discover, book, and manage 1:1 sessions with industry experts.

## 🛠️ Technical Stack
* **Framework:** React Native / Expo
* **Routing:** Expo Router (File-based navigation utilizing the `app/` directory)
* **Styling:** NativeWind v4 (Tailwind CSS utility classes)
* **Layouts:** `react-native-safe-area-context` for modern device notch/home-bar handling

## ✨ Week 1 Features Implemented
- **Onboarding & Auth:** Animated splash screen, Mentee/Mentor toggle UI, and simulated Razorpay-style checkout flow.
- **Discovery Engine:** Horizontal scrolling category filters and vertical swipeable mentor cards.
- **Dynamic Routing:** Profile screens that ingest dynamic parameters to display specific mentor data.
- **Dual-Role Dashboards:** A custom segmented control to switch seamlessly between Mentee (upcoming/past sessions) and Mentor (pending requests) views.
- **Notification Center:** A dedicated hub for session reminders, booking confirmations, and payment statuses.

## 🏗️ Architecture & Approach
To ensure rapid UI development and strict adherence to brand guidelines, I integrated **NativeWind v4**, allowing for consistent padding, typography, and color themes (utilizing the brand's core `#6B46C1` and `#FBBF24` hex codes). 

I opted for **Expo Router's** modern file-based routing over traditional React Navigation to provide superior deep-linking capabilities and a scalable architecture. The UI relies on functional components and local state management to handle complex layouts like the Mentor/Mentee dashboard toggle and active category states.

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR-USERNAME/MentorSarthi-App-Task.git](https://github.com/YOUR-USERNAME/MentorSarthi-App-Task.git)

2. Install dependencies:

    Bash
    npm install

3. Start the Expo server:

    Bash
    npx expo start

4. View the app: 

    Press a to open in an Android Emulator, i for iOS Simulator, or scan the QR code with the Expo Go app on your physical device.

Developed by Nandakishore for Enorvia Global.