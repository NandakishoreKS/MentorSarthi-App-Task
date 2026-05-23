import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" />
            <Stack.Screen name="mentor-login" />
            <Stack.Screen name="register" />
            <Stack.Screen name="verify" />
            {/* Mentor onboarding */}
            <Stack.Screen name="mentor-register" />
            <Stack.Screen name="mentor-verify" />
            <Stack.Screen name="mentor-onboard-1" />
            <Stack.Screen name="mentor-onboard-2" />
            <Stack.Screen name="mentor-onboard-3" />
            <Stack.Screen name="mentor-onboard-4" />
            <Stack.Screen name="mentor-onboard-5" />
            {/* Mentee onboarding */}
            <Stack.Screen name="mentee-onboard-1" />
            <Stack.Screen name="mentee-onboard-2" />
            <Stack.Screen name="mentee-onboard-3" />
        </Stack>
    );
}