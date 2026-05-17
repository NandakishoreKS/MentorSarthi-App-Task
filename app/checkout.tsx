import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CheckoutScreen() {
    // Simulating the selected payment method
    const [paymentMethod, setPaymentMethod] = useState('upi');

    const handleConfirmBooking = () => {
        Alert.alert(
            "Booking Confirmed! 🎉",
            "Your mentorship session has been scheduled successfully. You will receive a calendar invite shortly.",
            [{ text: "Go to Dashboard", onPress: () => router.push('/(tabs)/dashboard') }]
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>

            {/* --- Header --- */}
            <View className="flex-row items-center px-6 py-4 bg-white border-b border-gray-100">
                <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full bg-gray-50">
                    <Ionicons name="close" size={24} color="#1F2937" />
                </TouchableOpacity>
                <Text className="text-lg font-bold text-[#1F2937] ml-4">Review Booking</Text>
            </View>

            <ScrollView className="flex-1 px-6 pt-6" showsVerticalScrollIndicator={false}>

                {/* --- Order Summary Card --- */}
                <Text className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Session Details</Text>
                <View className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm shadow-gray-200 mb-8">
                    <View className="flex-row items-center justify-between mb-4 border-b border-gray-50 pb-4">
                        <View>
                            <Text className="text-lg font-bold text-[#1F2937]">Vivek Pawar</Text>
                            <Text className="text-sm text-[#6B46C1] font-medium mt-1">Leadership & Tech</Text>
                        </View>
                        <View className="w-12 h-12 bg-purple-50 rounded-full items-center justify-center">
                            <Ionicons name="videocam" size={20} color="#6B46C1" />
                        </View>
                    </View>

                    <View className="flex-row justify-between mt-2">
                        <View className="flex-row items-center">
                            <Ionicons name="calendar-outline" size={18} color="#6B7280" />
                            <Text className="text-[#1F2937] font-medium ml-2">Tomorrow, 20 Apr</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Ionicons name="time-outline" size={18} color="#6B7280" />
                            <Text className="text-[#1F2937] font-medium ml-2">11:30 AM</Text>
                        </View>
                    </View>
                </View>

                {/* --- Payment Methods --- */}
                <Text className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Payment Method</Text>

                {/* UPI Option */}
                <TouchableOpacity
                    onPress={() => setPaymentMethod('upi')}
                    className={`flex-row items-center justify-between p-5 rounded-2xl border-2 mb-3 ${paymentMethod === 'upi' ? 'border-[#6B46C1] bg-purple-50' : 'border-gray-100 bg-white'}`}
                >
                    <View className="flex-row items-center">
                        <View className="w-10 h-10 bg-white border border-gray-100 rounded-full items-center justify-center shadow-sm">
                            <Ionicons name="phone-portrait-outline" size={20} color="#1F2937" />
                        </View>
                        <Text className="text-base font-bold text-[#1F2937] ml-3">UPI (GPay, PhonePe)</Text>
                    </View>
                    <View className={`w-5 h-5 rounded-full border-2 items-center justify-center ${paymentMethod === 'upi' ? 'border-[#6B46C1]' : 'border-gray-300'}`}>
                        {paymentMethod === 'upi' && <View className="w-2.5 h-2.5 rounded-full bg-[#6B46C1]" />}
                    </View>
                </TouchableOpacity>

                {/* Card Option */}
                <TouchableOpacity
                    onPress={() => setPaymentMethod('card')}
                    className={`flex-row items-center justify-between p-5 rounded-2xl border-2 mb-8 ${paymentMethod === 'card' ? 'border-[#6B46C1] bg-purple-50' : 'border-gray-100 bg-white'}`}
                >
                    <View className="flex-row items-center">
                        <View className="w-10 h-10 bg-white border border-gray-100 rounded-full items-center justify-center shadow-sm">
                            <Ionicons name="card-outline" size={20} color="#1F2937" />
                        </View>
                        <View className="ml-3">
                            <Text className="text-base font-bold text-[#1F2937]">Credit/Debit Card</Text>
                        </View>
                    </View>
                    <View className={`w-5 h-5 rounded-full border-2 items-center justify-center ${paymentMethod === 'card' ? 'border-[#6B46C1]' : 'border-gray-300'}`}>
                        {paymentMethod === 'card' && <View className="w-2.5 h-2.5 rounded-full bg-[#6B46C1]" />}
                    </View>
                </TouchableOpacity>

                {/* --- Bill Summary --- */}
                <Text className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Bill Summary</Text>
                <View className="bg-white p-5 rounded-3xl border border-gray-100 mb-10">
                    <View className="flex-row justify-between mb-3">
                        <Text className="text-gray-500">Session Fee (1 hr)</Text>
                        <Text className="text-[#1F2937] font-medium">₹1.00</Text>
                    </View>
                    <View className="flex-row justify-between mb-4">
                        <Text className="text-gray-500">Platform Fee</Text>
                        <Text className="text-[#1F2937] font-medium">₹0.00</Text>
                    </View>
                    <View className="border-t border-gray-100 pt-4 flex-row justify-between items-center">
                        <Text className="text-base font-bold text-[#1F2937]">Total Amount</Text>
                        <Text className="text-xl font-extrabold text-[#6B46C1]">₹1.00</Text>
                    </View>
                </View>

            </ScrollView>

            {/* --- Sticky Payment Button --- */}
            <View className="bg-white px-6 py-5 border-t border-gray-100">
                <View className="flex-row items-center justify-center mb-4">
                    <Ionicons name="lock-closed" size={14} color="#9CA3AF" />
                    <Text className="text-xs text-gray-400 font-medium ml-1">Payments are 100% secure & encrypted</Text>
                </View>
                <TouchableOpacity
                    className="bg-[#1F2937] w-full py-4 rounded-2xl items-center shadow-lg shadow-gray-300"
                    onPress={handleConfirmBooking}
                >
                    <Text className="text-white font-bold text-lg tracking-wide">Confirm & Pay</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}