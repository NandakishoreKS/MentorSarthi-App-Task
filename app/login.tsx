import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 justify-center px-6">

                {/* --- Brand Logo Area --- */}
                <View className="items-center mb-8 pt-10">
                    <Text className="text-5xl font-bold text-[#1F2937] tracking-tight">
                        M<Text className="text-3xl">entor</Text><Text className="text-3xl text-[#6B46C1]">Sarthi</Text>
                    </Text>
                    <Text className="text-[10px] text-gray-500 font-bold tracking-[0.2em] mt-1 uppercase">
                        Connecting Ambitions with Experience
                    </Text>
                </View>

                <Text className="text-sm font-semibold text-gray-500 mb-6 text-center">For mentees seeking guidance</Text>

                {/* --- Form Inputs (Web Matched) --- */}
                <View className="space-y-4 mb-4">
                    <View>
                        <Text className="text-sm font-medium text-[#1F2937] mb-1.5">Email Address</Text>
                        <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3.5 bg-white">
                            <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
                            <TextInput
                                className="flex-1 ml-3 text-base text-[#1F2937]"
                                placeholder="you@example.com"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>
                    </View>

                    <View>
                        <Text className="text-sm font-medium text-[#1F2937] mb-1.5">Password</Text>
                        <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3.5 bg-white">
                            <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
                            <TextInput
                                className="flex-1 ml-3 text-base text-[#1F2937]"
                                placeholder="••••••••"
                                secureTextEntry
                            />
                        </View>
                    </View>
                </View>

                {/* --- Remember Me & Forgot Password --- */}
                <View className="flex-row justify-between items-center mb-6 px-1">
                    <TouchableOpacity
                        className="flex-row items-center"
                        onPress={() => setRememberMe(!rememberMe)}
                    >
                        <View className={`w-4 h-4 border rounded items-center justify-center mr-2 ${rememberMe ? 'bg-[#6B46C1] border-[#6B46C1]' : 'border-gray-300'}`}>
                            {rememberMe && <Ionicons name="checkmark" size={12} color="white" />}
                        </View>
                        <Text className="text-sm text-gray-600">Remember me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text className="text-sm font-bold text-[#6B46C1]">Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                {/* --- Primary Login Button --- */}
                <TouchableOpacity
                    className="w-full bg-[#9333EA] rounded-xl py-4 flex-row justify-center items-center mb-6 shadow-md shadow-purple-200"
                    onPress={() => router.replace('/(tabs)')}
                >
                    <Ionicons name="log-in-outline" size={22} color="white" className="mr-2" />
                    <Text className="text-white font-bold text-lg ml-1">Mentee Sign In</Text>
                </TouchableOpacity>

                {/* --- Mentor Toggle Card (Wired up for Navigation) --- */}
                <TouchableOpacity
                    className="bg-purple-50 border border-purple-100 rounded-xl p-4 flex-row items-center mb-6"
                    onPress={() => router.push('/mentor-login')}
                >
                    <Ionicons name="person-outline" size={20} color="#6B46C1" />
                    <View className="ml-3 flex-1">
                        <Text className="text-sm font-bold text-[#1F2937]">Are you a Mentor?</Text>
                        <Text className="text-xs text-gray-600 mt-0.5">
                            Use the <Text className="text-[#6B46C1] font-bold underline">Mentor Login</Text> for managing sessions.
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* --- Divider --- */}
                <View className="flex-row items-center mb-6 px-2">
                    <View className="flex-1 h-[1px] bg-gray-200" />
                    <Text className="px-4 text-gray-400 text-sm">Or continue with</Text>
                    <View className="flex-1 h-[1px] bg-gray-200" />
                </View>

                {/* --- Google Auth --- */}
                <TouchableOpacity className="w-full bg-white border border-gray-200 rounded-xl py-3.5 items-center flex-row justify-center mb-8 shadow-sm shadow-gray-50">
                    <Ionicons name="logo-google" size={20} color="#1F2937" />
                    <Text className="text-[#1F2937] font-semibold text-base ml-2">Sign in with Google</Text>
                </TouchableOpacity>

                {/* --- Sign Up Link --- */}
                <View className="flex-row justify-center pb-8">
                    <Text className="text-gray-500">Don't have a mentee account? </Text>
                    <TouchableOpacity onPress={() => router.push('/register')}>
                        <Text className="text-[#6B46C1] font-bold">Mentee Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}