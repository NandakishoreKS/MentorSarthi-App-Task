import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            <View className="flex-1 px-6 py-12 justify-between">

                {/* Top Branding Section */}
                <View className="items-center mt-10">
                    <View className="w-20 h-20 bg-purple-50 rounded-3xl items-center justify-center mb-6">
                        <Ionicons name="rocket" size={40} color="#6B46C1" />
                    </View>
                    <Text className="text-4xl font-extrabold text-[#1F2937] tracking-tight mb-3 text-center">
                        MentorSarthi
                    </Text>
                    <Text className="text-base text-gray-500 text-center leading-relaxed px-4">
                        Accelerate your career with 1:1 guidance from top industry experts.
                    </Text>
                </View>

                {/* Role Selection Section */}
                <View className="w-full space-y-4">
                    <Text className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">
                        Choose your path
                    </Text>

                    {/* Mentee Option */}
                    <TouchableOpacity
                        onPress={() => router.push('/(auth)/login')} // Routes to the mentee home we built
                        className="w-full bg-white border-2 border-gray-100 p-5 rounded-3xl flex-row items-center justify-between"
                    >
                        <View className="flex-row items-center flex-1">
                            <View className="w-12 h-12 bg-purple-50 rounded-full items-center justify-center mr-4">
                                <Ionicons name="school" size={24} color="#6B46C1" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-lg font-bold text-[#1F2937] mb-1">I am a Mentee</Text>
                                <Text className="text-sm text-gray-500 pr-4">I want to learn and book sessions with experts.</Text>
                            </View>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="#D1D5DB" />
                    </TouchableOpacity>

                    {/* Mentor Option */}
                    <TouchableOpacity
                        onPress={() => router.push('/(auth)/mentor-register')} // We will build this next
                        className="w-full bg-white border-2 border-gray-100 p-5 rounded-3xl flex-row items-center justify-between mt-4"
                    >
                        <View className="flex-row items-center flex-1">
                            <View className="w-12 h-12 bg-gray-50 rounded-full items-center justify-center mr-4">
                                <Ionicons name="briefcase" size={24} color="#1F2937" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-lg font-bold text-[#1F2937] mb-1">I am a Mentor</Text>
                                <Text className="text-sm text-gray-500 pr-4">I want to share my expertise and manage bookings.</Text>
                            </View>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="#D1D5DB" />
                    </TouchableOpacity>
                </View>

                {/* Bottom Login Link */}
                <View className="flex-row justify-center items-center mt-10">
                    <Text className="text-gray-500 font-medium">Already have an account? </Text>
                    {/* UPDATED: Added the onPress routing to the login page */}
                    <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                        <Text className="text-[#6B46C1] font-bold">Log in</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}