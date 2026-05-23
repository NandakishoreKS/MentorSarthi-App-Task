import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MentorVerifyScreen() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = useRef<(TextInput | null)[]>([]);

    const handleChange = (val: string, idx: number) => {
        const updated = [...otp];
        updated[idx] = val;
        setOtp(updated);
        if (val && idx < 3) inputs.current[idx + 1]?.focus();
    };

    const handleKeyPress = (e: any, idx: number) => {
        if (e.nativeEvent.key === 'Backspace' && !otp[idx] && idx > 0) {
            inputs.current[idx - 1]?.focus();
        }
    };

    const isComplete = otp.every(d => d !== '');

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            <View className="flex-1 px-6 pt-6">

                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-10 h-10 bg-gray-50 rounded-full items-center justify-center mb-8 border border-gray-100"
                >
                    <Ionicons name="arrow-back" size={20} color="#1F2937" />
                </TouchableOpacity>

                {/* Icon */}
                <View className="w-16 h-16 bg-purple-100 rounded-2xl items-center justify-center mb-6">
                    <Ionicons name="mail-open-outline" size={28} color="#6B46C1" />
                </View>

                <Text className="text-3xl font-bold text-[#1F2937] mb-2">Verify Your Email</Text>
                <Text className="text-base text-gray-500 mb-2 leading-relaxed">
                    We've sent a 4-digit verification code to{' '}
                    <Text className="font-bold text-[#1F2937]">expert@example.com</Text>
                </Text>
                <Text className="text-sm text-gray-400 mb-10">
                    After verifying, you'll set up your mentor profile.
                </Text>

                {/* OTP inputs */}
                <View className="flex-row justify-between mb-10 px-2">
                    {otp.map((digit, idx) => (
                        <TextInput
                            key={idx}
                            ref={r => { inputs.current[idx] = r; }}
                            className={`w-16 h-16 rounded-2xl text-center text-2xl font-bold border ${digit
                                    ? 'bg-purple-50 border-[#6B46C1] text-[#6B46C1]'
                                    : 'bg-gray-50 border-gray-200 text-[#1F2937]'
                                }`}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={digit}
                            onChangeText={val => handleChange(val, idx)}
                            onKeyPress={e => handleKeyPress(e, idx)}
                            placeholder="0"
                            placeholderTextColor="#D1D5DB"
                        />
                    ))}
                </View>

                {/* Verify button */}
                <TouchableOpacity
                    className={`w-full rounded-2xl py-4 items-center mb-6 ${isComplete ? 'bg-[#6B46C1]' : 'bg-gray-200'
                        }`}
                    onPress={() => router.replace('/(auth)/mentor-onboard-1')}
                    disabled={!isComplete}
                >
                    <Text className={`font-bold text-lg ${isComplete ? 'text-white' : 'text-gray-400'}`}>
                        Verify & Set Up Profile
                    </Text>
                </TouchableOpacity>

                <View className="flex-row justify-center items-center">
                    <Text className="text-gray-500">Didn't receive the code? </Text>
                    <TouchableOpacity>
                        <Text className="text-[#6B46C1] font-bold">Resend</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}