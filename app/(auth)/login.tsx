import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import our new reusable components!
// Note: Depending on your folder structure, you might need to adjust the path (e.g., '../components/InputField' or '../../components/InputField')
import InputField from '../../components/InputField';
import PrimaryButton from '../../components/PrimaryButton';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // In a real app, you'd verify credentials here.
        // For now, we'll route them to the mentee dashboard.
        router.replace('/(tabs)');
    };

    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <ScrollView className="flex-1 px-6 pt-12 pb-20" showsVerticalScrollIndicator={false}>

                    {/* Back Button */}
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-10 h-10 bg-white border border-gray-100 rounded-full items-center justify-center shadow-sm shadow-gray-200 mb-8 mt-4"
                    >
                        <Ionicons name="arrow-back" size={20} color="#1F2937" />
                    </TouchableOpacity>

                    {/* Header */}
                    <View className="mb-10">
                        <Text className="text-3xl font-extrabold text-[#1F2937] tracking-tight mb-2">Welcome back</Text>
                        <Text className="text-base text-gray-500">Enter your details to access your account.</Text>
                    </View>

                    {/* Form - Look how clean this is now! */}
                    <View className="space-y-4">

                        <InputField
                            label="Email Address"
                            iconName="mail-outline"
                            placeholder="name@example.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <View>
                            <InputField
                                label="Password"
                                iconName="lock-closed-outline"
                                placeholder="Enter your password"
                                isPassword={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                            {/* Forgot Password */}
                            <TouchableOpacity className="self-end mt-1 mb-6">
                                <Text className="text-sm font-bold text-[#6B46C1]">Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Login Button */}
                        <PrimaryButton
                            title="Sign In"
                            onPress={handleLogin}
                            variant="dark"
                        />

                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}