import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function MentorLoginScreen() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-[#F9F5FF]">
            <View className="flex-1 justify-center px-4">

                {/* --- Logo Header Section --- */}
                <View className="items-center mb-6 pt-4">
                    <View className="w-14 h-14 bg-[#9333EA] rounded-2xl items-center justify-center mb-3 shadow-sm shadow-purple-200">
                        <Ionicons name="person-outline" size={28} color="white" />
                    </View>
                    <Text className="text-3xl font-bold text-[#1F2937]">MentorSarthi</Text>
                    <View className="bg-purple-50 px-3 py-1 rounded-full flex-row items-center mt-2 border border-purple-100">
                        <Ionicons name="person-outline" size={14} color="#9333EA" />
                        <Text className="text-[#9333EA] text-xs font-semibold ml-1">Mentor Login</Text>
                    </View>
                    <Text className="text-gray-500 mt-4 text-center">Welcome back to your mentor login!</Text>
                </View>

                {/* --- Main Login Card --- */}
                <View className="bg-white rounded-3xl p-6 shadow-md shadow-gray-200 border border-gray-100">
                    <Text className="text-2xl font-bold text-[#1F2937] mb-1">Mentor Sign In</Text>
                    <Text className="text-gray-500 text-sm mb-6">Access your mentor login</Text>

                    {/* Google Button (Moved to top based on screenshot) */}
                    <TouchableOpacity className="w-full bg-white border border-gray-200 rounded-xl py-3 items-center flex-row justify-center mb-6 shadow-sm shadow-gray-50">
                        <Ionicons name="logo-google" size={20} color="#1F2937" />
                        <Text className="text-[#1F2937] font-semibold text-base ml-2">Sign in with Google</Text>
                    </TouchableOpacity>

                    {/* Divider */}
                    <View className="flex-row items-center mb-6">
                        <View className="flex-1 h-[1px] bg-gray-200" />
                        <Text className="px-4 text-gray-400 text-sm">or continue with email</Text>
                        <View className="flex-1 h-[1px] bg-gray-200" />
                    </View>

                    {/* Form Inputs */}
                    <View className="space-y-4 mb-6">
                        <View>
                            <Text className="text-sm font-medium text-[#1F2937] mb-1.5">Email Address</Text>
                            <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3.5 bg-white">
                                <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
                                <TextInput
                                    className="flex-1 ml-3 text-base text-[#1F2937]"
                                    placeholder="Enter your email"
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
                                    placeholder="Enter your password"
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                    <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#9CA3AF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Primary Login Button */}
                    <TouchableOpacity
                        className="w-full bg-[#9333EA] rounded-xl py-4 flex-row justify-center items-center mb-5 shadow-md shadow-purple-200"
                        onPress={() => router.replace('/(tabs)')} // Routes to Dashboard on success
                    >
                        <Text className="text-white font-bold text-lg mr-2">Mentor Sign In</Text>
                        <Ionicons name="arrow-forward" size={20} color="white" />
                    </TouchableOpacity>

                    {/* Mentee Redirect Info Box */}
                    <View className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                        <Text className="text-sm text-[#1F2937] leading-5">
                            <Text className="font-bold">For Mentees:</Text> Use the <Text className="text-blue-700 font-bold underline" onPress={() => router.push('/login')}>Mentee Signup</Text> to book sessions and find mentors.
                        </Text>
                    </View>

                    {/* Footer Links */}
                    <View className="flex-row justify-center mb-5">
                        <Text className="text-gray-500">Don't have a mentor account? </Text>
                        <TouchableOpacity>
                            <Text className="text-[#3B82F6] font-bold">Mentor Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity className="items-center">
                        <Text className="text-gray-500 text-sm">Forgot your password?</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}