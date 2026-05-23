// payment.tsx
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PaymentScreen() {
    const [paymentTab, setPaymentTab] = useState<'upi' | 'bank'>('upi');
    const [upiId, setUpiId] = useState('');

    return (
        <SafeAreaView className="flex-1 bg-[#F8F9FA]" edges={['top']}>
            <View className="px-5 pt-5 pb-4 flex-row items-center">
                <TouchableOpacity onPress={() => router.back()} className="mr-3">
                    <Ionicons name="arrow-back" size={22} color="#1F2937" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-[#1F2937]">Payment</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

                {/* Header */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-5 border border-gray-100 flex-row items-start">
                    <View className="w-12 h-12 bg-purple-100 rounded-full items-center justify-center mr-4">
                        <Ionicons name="logo-usd" size={22} color="#6B46C1" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-base font-bold text-[#1F2937]">Payment & Payout Details</Text>
                        <Text className="text-xs text-gray-500 mt-1 leading-relaxed">
                            Add your UPI ID or bank account so MentorSarthi can transfer your session earnings directly to you.
                        </Text>
                    </View>
                </View>

                {/* Security notice */}
                <View className="mx-5 mb-4 bg-blue-50 border border-blue-100 rounded-xl p-3 flex-row items-start">
                    <Ionicons name="information-circle-outline" size={16} color="#3B82F6" />
                    <Text className="text-xs text-blue-600 ml-2 flex-1 leading-relaxed">
                        Your payment details are <Text className="font-bold">stored securely</Text> and only used to process your session payouts. They are never shared with mentees.
                    </Text>
                </View>

                {/* How payment works */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-5 border border-gray-100">
                    <View className="flex-row items-center mb-4">
                        <Ionicons name="logo-usd" size={16} color="#6B46C1" />
                        <Text className="text-sm font-bold text-[#1F2937] ml-2">How Your Payment Works</Text>
                    </View>
                    <View className="flex-row gap-3 mb-3">
                        <View className="flex-1 bg-orange-50 border border-orange-100 rounded-2xl p-4 items-center">
                            <Text className="text-2xl font-bold text-orange-500">30%</Text>
                            <Text className="text-xs font-bold text-orange-500 mt-0.5">PLATFORM FEE</Text>
                            <Text className="text-xs text-orange-400">MentorSarthi</Text>
                        </View>
                        <View className="flex-1 bg-green-50 border border-green-100 rounded-2xl p-4 items-center">
                            <Text className="text-2xl font-bold text-green-600">70%</Text>
                            <Text className="text-xs font-bold text-green-600 mt-0.5">YOUR EARNINGS</Text>
                            <Text className="text-xs text-green-500">Transferred to you</Text>
                        </View>
                    </View>
                    {/* Progress bar */}
                    <View className="h-2 rounded-full overflow-hidden flex-row mb-3">
                        <View className="bg-orange-400" style={{ width: '30%' }} />
                        <View className="bg-green-400 flex-1" />
                    </View>
                    <View className="flex-row items-center justify-between bg-gray-50 rounded-xl p-3">
                        <Text className="text-xs text-gray-500">Example — Session priced at ₹1,000</Text>
                        <Text className="text-xs font-bold text-green-600">You get ₹700</Text>
                    </View>
                    <Text className="text-xs text-gray-400 mt-3 leading-relaxed">
                        Payouts are processed within <Text className="font-bold text-gray-600">3–5 business days</Text> after a session is marked complete, directly to the UPI ID or bank account you set below.
                    </Text>
                </View>

                {/* UPI / Bank tab */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-5 border border-gray-100">
                    <View className="flex-row mb-4 bg-gray-100 p-1 rounded-xl">
                        <TouchableOpacity
                            onPress={() => setPaymentTab('upi')}
                            className={`flex-1 py-2.5 rounded-lg items-center flex-row justify-center ${paymentTab === 'upi' ? 'bg-white shadow-sm' : ''}`}
                        >
                            <Ionicons name="card-outline" size={14} color={paymentTab === 'upi' ? '#6B46C1' : '#9CA3AF'} />
                            <Text className={`text-xs font-semibold ml-1 ${paymentTab === 'upi' ? 'text-[#6B46C1]' : 'text-gray-400'}`}>UPI / QR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setPaymentTab('bank')}
                            className={`flex-1 py-2.5 rounded-lg items-center flex-row justify-center ${paymentTab === 'bank' ? 'bg-white shadow-sm' : ''}`}
                        >
                            <Ionicons name="business-outline" size={14} color={paymentTab === 'bank' ? '#6B46C1' : '#9CA3AF'} />
                            <Text className={`text-xs font-semibold ml-1 ${paymentTab === 'bank' ? 'text-[#6B46C1]' : 'text-gray-400'}`}>Bank Transfer</Text>
                        </TouchableOpacity>
                    </View>

                    {paymentTab === 'upi' && (
                        <View>
                            <Text className="text-sm font-bold text-[#1F2937] mb-1">UPI ID — Recommended & Instant</Text>
                            <Text className="text-xs text-gray-400 mb-3">YOUR UPI ID</Text>
                            <TextInput
                                value={upiId}
                                onChangeText={setUpiId}
                                placeholder="yourname@paytm  /  9876543210@upi"
                                placeholderTextColor="#D1D5DB"
                                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1F2937] mb-2"
                            />
                            <Text className="text-xs text-gray-400 mb-5">Works with PhonePe, Google Pay, Paytm, BHIM, or any UPI-enabled app</Text>
                            <TouchableOpacity className="bg-[#6B46C1] py-4 rounded-2xl items-center flex-row justify-center">
                                <Ionicons name="save-outline" size={16} color="white" />
                                <Text className="text-white font-bold ml-2">Save Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    {paymentTab === 'bank' && (
                        <View>
                            <Text className="text-sm font-bold text-[#1F2937] mb-4">Bank Account Details</Text>
                            {[
                                { label: 'Account Holder Name', placeholder: 'Your full name' },
                                { label: 'Account Number', placeholder: 'Enter account number' },
                                { label: 'IFSC Code', placeholder: 'e.g. SBIN0001234' },
                                { label: 'Bank Name', placeholder: 'e.g. State Bank of India' },
                            ].map((field) => (
                                <View key={field.label} className="mb-3">
                                    <Text className="text-xs font-semibold text-gray-500 mb-1">{field.label}</Text>
                                    <TextInput
                                        placeholder={field.placeholder}
                                        placeholderTextColor="#D1D5DB"
                                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1F2937]"
                                    />
                                </View>
                            ))}
                            <TouchableOpacity className="bg-[#6B46C1] py-4 rounded-2xl items-center flex-row justify-center mt-2">
                                <Ionicons name="save-outline" size={16} color="white" />
                                <Text className="text-white font-bold ml-2">Save Payment Details</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    <View className="mt-4 flex-row items-start">
                        <Ionicons name="shield-checkmark-outline" size={14} color="#9CA3AF" />
                        <Text className="text-xs text-gray-400 ml-1 flex-1 leading-relaxed">
                            <Text className="font-bold">Your data is protected.</Text> Payment details are stored securely and are only accessible to the MentorSarthi finance team for payout processing.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}