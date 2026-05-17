import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VerifyScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            <View className="flex-1 px-6 pt-6">

                {/* Custom Back Button */}
                <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 bg-gray-50 rounded-full items-center justify-center mb-8 border border-gray-100">
                    <Ionicons name="arrow-back" size={20} color="#1F2937" />
                </TouchableOpacity>

                <Text className="text-3xl font-bold text-[#1F2937] mb-2">Verify Email</Text>
                <Text className="text-base text-gray-500 mb-8 leading-relaxed">
                    We've sent a 4-digit verification code to <Text className="font-bold text-[#1F2937]">you@example.com</Text>.
                </Text>

                {/* 4-Digit OTP Input Row */}
                <View className="flex-row justify-between mb-10 px-2">
                    {[1, 2, 3, 4].map((index) => (
                        <TextInput
                            key={index}
                            className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-2xl text-center text-2xl font-bold text-[#6B46C1]"
                            keyboardType="number-pad"
                            maxLength={1}
                            placeholder="0"
                            placeholderTextColor="#D1D5DB"
                        />
                    ))}
                </View>

                {/* Verify Button */}
                <TouchableOpacity
                    className="w-full bg-[#9333EA] rounded-xl py-4 flex-row justify-center items-center mb-6 shadow-md shadow-purple-200"
                    onPress={() => router.replace('/(tabs)')} // Takes them to the main app on success
                >
                    <Text className="text-white font-bold text-lg">Verify & Continue</Text>
                </TouchableOpacity>

                {/* Resend Code */}
                <View className="flex-row justify-center items-center mt-4">
                    <Text className="text-gray-500">Didn't receive the code? </Text>
                    <TouchableOpacity>
                        <Text className="text-[#6B46C1] font-bold">Resend</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}