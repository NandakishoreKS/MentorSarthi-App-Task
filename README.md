# MentorSarthi Mobile App

A React Native mobile application for the MentorSarthi platform — connecting mentees with industry experts for 1-on-1 mentorship sessions.

Built with Expo SDK 54, TypeScript, and NativeWind v4.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Expo SDK 54 + Expo Router | File-based navigation and app infrastructure |
| React Native + TypeScript | Core mobile framework |
| NativeWind v4 (Tailwind CSS) | Styling and responsive layouts |
| React Native Reanimated 3 | Native-thread animations |
| Zustand 5 | Global state management |
| Moti | Declarative animation primitives |
| Expo Notifications | Push notification integration |
| React Native Razorpay | Payment processing |

---

## Project Structure

```
app/
├── (auth)/                    # Authentication and onboarding flows
│   ├── login.tsx              # Mentee login
│   ├── mentor-login.tsx       # Mentor login
│   ├── register.tsx           # Mentee registration
│   ├── verify.tsx             # Email OTP verification (mentee)
│   ├── mentor-register.tsx    # Mentor registration
│   ├── mentor-verify.tsx      # Email OTP verification (mentor)
│   ├── mentee-onboard-1.tsx   # Mentee onboarding — Goals
│   ├── mentee-onboard-2.tsx   # Mentee onboarding — Interests
│   ├── mentee-onboard-3.tsx   # Mentee onboarding — Profile setup
│   ├── mentor-onboard-1.tsx   # Mentor onboarding — Profile Info
│   ├── mentor-onboard-2.tsx   # Mentor onboarding — Services
│   ├── mentor-onboard-3.tsx   # Mentor onboarding — Payment
│   ├── mentor-onboard-4.tsx   # Mentor onboarding — Availability
│   └── mentor-onboard-5.tsx   # Mentor onboarding — Go Live
│
├── (tabs)/                    # Mentee tab navigation
│   ├── index.tsx              # Discover / Home screen
│   ├── dashboard.tsx          # Sessions (Upcoming + Past)
│   ├── mentors.tsx            # Find Expert screen
│   ├── profile.tsx            # Mentee profile
│   ├── settings.tsx           # Mentee settings
│   └── mentor/[id].tsx        # Mentor profile + booking modal
│
├── (mentor-tabs)/             # Mentor tab navigation
│   ├── index.tsx              # Mentor dashboard
│   ├── appointments.tsx       # All appointments
│   ├── profile.tsx            # Mentor profile management
│   ├── settings.tsx           # Mentor settings
│   ├── availability.tsx       # Weekly schedule management
│   ├── services.tsx           # Services management
│   └── payment.tsx            # Payout details
│
├── index.tsx                  # Welcome / role selection screen
└── _layout.tsx                # Root layout

components/
├── InputField.tsx             # Reusable text input with icon
├── PrimaryButton.tsx          # Reusable primary button
├── OnboardingHeader.tsx       # Mentor onboarding progress header
└── MenteeOnboardingHeader.tsx # Mentee onboarding progress header

hooks/
└── usePushNotifications.ts    # Expo push notification token handler
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI
- Android Studio or Xcode (for device emulation)
- Physical device with Expo Go app (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/NandakishoreKS/MentorSarthi-App-Task.git
cd MentorSarthi-App-Task

# Install dependencies
npm install

# Start the development server
npx expo start
```

Scan the QR code with Expo Go (Android) or the Camera app (iOS).

---

## App Flows

### Mentee Flow

```
Welcome Screen
    └── I am a Mentee
        ├── Login (existing user) → Discover tab
        └── Register → Verify Email → Goals → Interests → Profile Setup → Discover tab
```

### Mentor Flow

```
Welcome Screen
    └── I am a Mentor
        ├── Login (existing mentor) → Mentor Dashboard
        └── Register → Verify Email → Profile Info → Services → Payment → Availability → Go Live → Mentor Dashboard
```

---

## Key Features

**Mentee side:**
- Discover screen with mentor carousel, search, category filter, quick actions
- Find Expert screen with full mentor listing, tap to view profile
- Mentor profile with bio, work journey, education, expertise tags
- 2-step booking flow: session plan selection → request form with topic, description, duration
- Sessions screen with Upcoming and Past tabs
- Profile screen with goals, interests, session stats
- Full settings screen with notification toggles and privacy controls

**Mentor side:**
- Dashboard with welcome banner, profile completion stepper, stats cards, booking mode selector, quick actions, upcoming appointments
- Appointments screen with filter tabs (All, Upcoming, With Meeting Links, Completed)
- Profile management with contact info, social links, education, work experience, services
- Availability management with booking mode (Time Slots vs Session Requests), weekly schedule, quick presets
- Services management with default 1-on-1 session and custom service creation
- Payment & payout details with UPI and bank transfer support
- Settings with booking mode switcher, notification toggles, privacy settings

---

## Environment

```bash
# No environment variables required for frontend-only development
# For production API integration, create a .env file:
EXPO_PUBLIC_API_URL=https://api.mentorsarthi.com
```

---

## Scripts

```bash
npx expo start          # Start development server
npx expo start --android  # Start on Android
npx expo start --ios      # Start on iOS
npx expo start --web      # Start on web
```

---

## Notes

- All data is currently static/mock — no backend integration yet
- Push notification token generation is set up and ready for backend hookup
- Razorpay payment SDK is installed and ready for payment flow integration
- The app targets both iOS and Android with platform-specific tab bar heights

---

## Author

Nandakishore KS — Internship project at MentorSarthi