import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // <-- Upgraded import!

export default function CheckoutScreen() {
    return (
        <SafeAreaView className="flex-1 bg-[#F9F5FF]" edges={['top', 'bottom']}>

            {/* --- Header --- */}
            <View className="flex-row justify-between items-center px-6 py-4 bg-white shadow-sm shadow-gray-100 border-b border-gray-100 z-10">
                <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full bg-gray-50">
                    <Ionicons name="arrow-back" size={24} color="#1F2937" />
                </TouchableOpacity>
                <Text className="text-lg font-bold text-[#1F2937]">Checkout</Text>
                <View className="w-10" />
            </View>

            {/* --- Main Scroll Area (Flex-1 handles the spacing naturally now) --- */}
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 24 }}>

                <Text className="text-lg font-bold text-[#1F2937] mb-4">Session Summary</Text>
                <View className="bg-white rounded-3xl p-5 shadow-sm shadow-gray-200 border border-gray-100 mb-8">
                    <View className="flex-row items-center mb-5 pb-5 border-b border-gray-100">
                        <Image source={{ uri: "https://i.pravatar.cc/150?u=pradeep" }} className="w-16 h-16 rounded-xl bg-gray-100" />
                        <View className="ml-4 flex-1">
                            <Text className="text-lg font-bold text-[#1F2937]">Pradeep Yuvaraj</Text>
                            <Text className="text-sm text-[#6B46C1] font-medium mt-1">Business Storytelling</Text>
                        </View>
                    </View>

                    <View className="space-y-4">
                        <View className="flex-row justify-between items-center">
                            <View className="flex-row items-center">
                                <Ionicons name="calendar-outline" size={18} color="#6B7280" />
                                <Text className="text-gray-600 ml-2">Date & Time</Text>
                            </View>
                            <Text className="font-bold text-[#1F2937]">Today, 10:00 AM</Text>
                        </View>
                        <View className="flex-row justify-between items-center">
                            <View className="flex-row items-center">
                                <Ionicons name="videocam-outline" size={18} color="#6B7280" />
                                <Text className="text-gray-600 ml-2">Meeting Type</Text>
                            </View>
                            <Text className="font-bold text-[#1F2937]">Video Call (1hr)</Text>
                        </View>
                    </View>
                </View>

                <Text className="text-lg font-bold text-[#1F2937] mb-4">Payment Method</Text>

                <TouchableOpacity className="bg-white border-2 border-[#6B46C1] rounded-2xl p-4 flex-row items-center justify-between mb-4 shadow-sm shadow-purple-100">
                    <View className="flex-row items-center">
                        <View className="w-10 h-10 bg-purple-50 rounded-full items-center justify-center mr-3">
                            <Ionicons name="card" size={20} color="#6B46C1" />
                        </View>
                        <View>
                            <Text className="font-bold text-[#1F2937] text-base">Pay via Razorpay</Text>
                            <Text className="text-xs text-gray-500 mt-0.5">UPI, Cards, Netbanking</Text>
                        </View>
                    </View>
                    <Ionicons name="checkmark-circle" size={24} color="#6B46C1" />
                </TouchableOpacity>

                <View className="bg-white rounded-3xl p-5 shadow-sm shadow-gray-200 border border-gray-100 mt-4">
                    <View className="flex-row justify-between mb-3">
                        <Text className="text-gray-500">Session Fee</Text>
                        <Text className="font-semibold text-[#1F2937]">₹ 1,500.00</Text>
                    </View>
                    <View className="flex-row justify-between mb-4 pb-4 border-b border-gray-100">
                        <Text className="text-gray-500">Platform Tax (18% GST)</Text>
                        <Text className="font-semibold text-[#1F2937]">₹ 270.00</Text>
                    </View>
                    <View className="flex-row justify-between items-center">
                        <Text className="text-lg font-bold text-[#1F2937]">Total Amount</Text>
                        <Text className="text-2xl font-bold text-[#6B46C1]">₹ 1,770.00</Text>
                    </View>
                </View>

            </ScrollView>

            {/* --- Sticky Bottom Bar (No longer absolute, naturally sits at bottom) --- */}
            <View className="bg-white px-6 py-5 border-t border-gray-200 shadow-[0_-10px_15px_rgba(0,0,0,0.05)]">
                <TouchableOpacity
                    className="bg-[#1e1b4b] w-full py-4 rounded-2xl flex-row justify-center items-center shadow-lg shadow-indigo-200"
                    onPress={() => router.replace('/(tabs)/dashboard')}
                >
                    <Ionicons name="lock-closed" size={18} color="white" className="mr-2" />
                    <Text className="text-white font-bold text-lg ml-2">Secure Pay ₹1,770</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}