import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    KeyboardAvoidingView, Platform,
    ScrollView, Text, TouchableOpacity, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../../components/InputField';
import PrimaryButton from '../../components/PrimaryButton';

export default function MentorRegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <ScrollView
                    className="flex-1 px-6"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 40, paddingTop: 24 }}
                >
                    {/* Back button */}
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-10 h-10 bg-white border border-gray-100 rounded-full items-center justify-center mb-8"
                    >
                        <Ionicons name="arrow-back" size={20} color="#1F2937" />
                    </TouchableOpacity>

                    {/* Header */}
                    <View className="mb-8">
                        <View className="bg-purple-100 self-start px-3 py-1 rounded-full mb-3">
                            <Text className="text-xs font-bold text-[#6B46C1] uppercase tracking-widest">
                                Mentor Portal
                            </Text>
                        </View>
                        <Text className="text-3xl font-extrabold text-[#1F2937] tracking-tight mb-2">
                            Join as a Mentor
                        </Text>
                        <Text className="text-base text-gray-500 leading-relaxed">
                            Share your expertise and help professionals grow their careers.
                        </Text>
                    </View>

                    {/* What you get */}
                    <View className="bg-purple-50 border border-purple-100 rounded-2xl p-4 mb-8">
                        {[
                            { icon: 'people-outline', text: 'Connect with motivated mentees' },
                            { icon: 'wallet-outline', text: 'Earn from your expertise (you keep 70%)' },
                            { icon: 'calendar-outline', text: 'Set your own schedule and availability' },
                        ].map((item, i) => (
                            <View key={i} className="flex-row items-center mb-2 last:mb-0">
                                <View className="w-7 h-7 bg-purple-100 rounded-full items-center justify-center mr-3">
                                    <Ionicons name={item.icon as any} size={14} color="#6B46C1" />
                                </View>
                                <Text className="text-sm text-[#6B46C1] font-medium flex-1">{item.text}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Form */}
                    <View className="gap-4 mb-8">
                        <InputField
                            label="Full Name"
                            iconName="person-outline"
                            placeholder="Enter your full name"
                            value={name}
                            onChangeText={setName}
                        />
                        <InputField
                            label="Work Email Address"
                            iconName="mail-outline"
                            placeholder="expert@example.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <InputField
                            label="Password"
                            iconName="lock-closed-outline"
                            placeholder="Create a strong password"
                            isPassword={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <PrimaryButton
                        title="Create Mentor Account"
                        onPress={() => router.push('/(auth)/mentor-verify')}
                        variant="dark"
                    />

                    <View className="flex-row justify-center mt-6">
                        <Text className="text-gray-500">Already have an account? </Text>
                        <TouchableOpacity onPress={() => router.replace('/(auth)/mentor-login')}>
                            <Text className="text-[#6B46C1] font-bold">Log In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}