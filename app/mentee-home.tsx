import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';

export default function SplashScreen() {
    // Set up animation values
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
        // 1. Run the animation when the screen loads
        Animated.parallel([
            Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
            Animated.spring(scaleAnim, { toValue: 1, friction: 4, useNativeDriver: true })
        ]).start();

        // 2. Automatically redirect to the Login screen after 2.5 seconds
        const timer = setTimeout(() => {
            router.replace('/login');
        }, 2500);

        return () => clearTimeout(timer); // Cleanup timer if user closes app early
    }, []);

    return (
        <View className="flex-1 bg-[#1e1b4b] justify-center items-center">
            <Animated.View
                style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}
                className="items-center"
            >
                {/* Mock Logo Graphic */}
                <View className="w-24 h-24 bg-[#9333EA] rounded-3xl items-center justify-center mb-6 shadow-xl shadow-purple-900/50">
                    <Ionicons name="people" size={48} color="white" />
                </View>

                {/* Brand Text */}
                <Text className="text-5xl font-bold text-white tracking-tight">
                    M<Text className="text-3xl">entor</Text><Text className="text-3xl text-[#FBBF24]">Sarthi</Text>
                </Text>
                <Text className="text-xs text-indigo-300 font-bold tracking-[0.3em] mt-3 uppercase">
                    Connecting Ambitions
                </Text>
            </Animated.View>
        </View>
    );
}