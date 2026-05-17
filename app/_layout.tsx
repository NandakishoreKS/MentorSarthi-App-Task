import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* 1. The Entry Point (Welcome Screen) */}
      <Stack.Screen name="index" />

      {/* 2. The Authentication Flow */}
      <Stack.Screen name="(auth)" />

      {/* 3. The Mentee Experience */}
      <Stack.Screen name="(tabs)" />

      {/* 4. The Mentor Experience */}
      <Stack.Screen name="(mentor-tabs)" />

      {/* Catch-all for 404 pages */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}