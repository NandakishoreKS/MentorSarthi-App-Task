import { router } from 'expo-router';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
    return (
        <SafeAreaView className="flex-1 bg-[#F9F5FF]">
            {/* ScrollView ensures the keyboard doesn't block the inputs on smaller phones */}
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 40 }}>

                {/* Header Section */}
                <View className="mb-10">
                    <Text className="text-4xl font-bold text-[#1F2937] mb-2">Create Account</Text>
                    <Text className="text-base text-[#6B7280]">Join MentorSarthi and start your journey.</Text>
                </View>

                {/* Input Fields */}
                <View className="space-y-4 mb-8">
                    <View>
                        <Text className="text-sm font-medium text-[#1F2937] mb-1">Full Name</Text>
                        <TextInput
                            className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 text-base"
                            placeholder="Enter your full name"
                        />
                    </View>

                    <View>
                        <Text className="text-sm font-medium text-[#1F2937] mb-1">Email</Text>
                        <TextInput
                            className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 text-base"
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View>
                        <Text className="text-sm font-medium text-[#1F2937] mb-1">Password</Text>
                        <TextInput
                            className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 text-base"
                            placeholder="Create a password"
                            secureTextEntry
                        />
                    </View>
                </View>

                {/* Sign Up Button */}
                <TouchableOpacity
                    className="w-full bg-[#6B46C1] rounded-2xl py-4 items-center mb-6 shadow-lg shadow-purple-200"
                    onPress={() => router.replace('/verify')} // Bypasses auth for testing
                >
                    <Text className="text-white font-bold text-lg">Sign Up</Text>
                </TouchableOpacity>

                {/* Back to Login Navigation */}
                <View className="flex-row justify-center mt-2">
                    <Text className="text-[#6B7280]">Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text className="text-[#6B46C1] font-bold">Log In</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}