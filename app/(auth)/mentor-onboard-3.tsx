import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingHeader from '../../components/OnboardingHeader';

export default function MentorOnboard3() {
    const [tab, setTab] = useState<'upi' | 'bank'>('upi');
    const [upiId, setUpiId] = useState('');

    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
            <OnboardingHeader currentStep={3} />
            <ScrollView
                className="flex-1 px-6"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 24, paddingBottom: 40 }}
            >
                <Text className="text-2xl font-extrabold text-[#1F2937] mb-1">Payment Details</Text>
                <Text className="text-sm text-gray-500 mb-6">
                    Add your payout details so we can transfer your earnings.
                </Text>

                {/* How payment works */}
                <View className="bg-white border border-gray-100 rounded-2xl p-5 mb-5">
                    <Text className="text-sm font-bold text-[#1F2937] mb-3">How your payment works</Text>
                    <View className="flex-row gap-3 mb-3">
                        <View className="flex-1 bg-orange-50 rounded-2xl p-3 items-center">
                            <Text className="text-2xl font-bold text-orange-500">30%</Text>
                            <Text className="text-xs font-bold text-orange-400 mt-0.5">PLATFORM FEE</Text>
                            <Text className="text-xs text-orange-400">MentorSarthi</Text>
                        </View>
                        <View className="flex-1 bg-green-50 rounded-2xl p-3 items-center">
                            <Text className="text-2xl font-bold text-green-600">70%</Text>
                            <Text className="text-xs font-bold text-green-500 mt-0.5">YOUR EARNINGS</Text>
                            <Text className="text-xs text-green-400">Transferred to you</Text>
                        </View>
                    </View>
                    <View className="h-2 rounded-full overflow-hidden flex-row">
                        <View className="bg-orange-400" style={{ width: '30%' }} />
                        <View className="bg-green-400 flex-1" />
                    </View>
                    <Text className="text-xs text-gray-400 mt-2 text-center">
                        Example: ₹1,000 session → <Text className="font-bold text-green-600">you get ₹700</Text>
                    </Text>
                </View>

                {/* Security notice */}
                <View className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-5 flex-row items-start">
                    <Ionicons name="shield-checkmark-outline" size={16} color="#3B82F6" />
                    <Text className="text-xs text-blue-600 ml-2 flex-1">
                        Your payment details are <Text className="font-bold">stored securely</Text> and never shared with mentees.
                    </Text>
                </View>

                {/* UPI / Bank tabs */}
                <View className="bg-white border border-gray-100 rounded-2xl p-5 mb-6">
                    <View className="flex-row bg-gray-100 p-1 rounded-xl mb-4">
                        <TouchableOpacity
                            onPress={() => setTab('upi')}
                            className={`flex-1 py-2.5 rounded-lg items-center flex-row justify-center ${tab === 'upi' ? 'bg-white shadow-sm' : ''}`}
                        >
                            <Ionicons name="card-outline" size={14} color={tab === 'upi' ? '#6B46C1' : '#9CA3AF'} />
                            <Text className={`text-xs font-semibold ml-1 ${tab === 'upi' ? 'text-[#6B46C1]' : 'text-gray-400'}`}>
                                UPI / QR
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setTab('bank')}
                            className={`flex-1 py-2.5 rounded-lg items-center flex-row justify-center ${tab === 'bank' ? 'bg-white shadow-sm' : ''}`}
                        >
                            <Ionicons name="business-outline" size={14} color={tab === 'bank' ? '#6B46C1' : '#9CA3AF'} />
                            <Text className={`text-xs font-semibold ml-1 ${tab === 'bank' ? 'text-[#6B46C1]' : 'text-gray-400'}`}>
                                Bank Transfer
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {tab === 'upi' ? (
                        <View>
                            <Text className="text-xs font-semibold text-gray-500 mb-1">YOUR UPI ID</Text>
                            <TextInput
                                value={upiId}
                                onChangeText={setUpiId}
                                placeholder="yourname@paytm  /  9876543210@upi"
                                placeholderTextColor="#D1D5DB"
                                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1F2937] mb-2"
                            />
                            <Text className="text-xs text-gray-400">
                                Works with PhonePe, Google Pay, Paytm, BHIM, or any UPI-enabled app
                            </Text>
                        </View>
                    ) : (
                        <View className="gap-3">
                            {['Account Holder Name', 'Account Number', 'IFSC Code', 'Bank Name'].map(f => (
                                <View key={f}>
                                    <Text className="text-xs font-semibold text-gray-500 mb-1">{f}</Text>
                                    <TextInput
                                        placeholder={`Enter ${f.toLowerCase()}`}
                                        placeholderTextColor="#D1D5DB"
                                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1F2937]"
                                    />
                                </View>
                            ))}
                        </View>
                    )}
                </View>

                <TouchableOpacity
                    className="bg-[#6B46C1] py-4 rounded-2xl items-center flex-row justify-center mb-4"
                    onPress={() => router.push('/(auth)/mentor-onboard-4')}
                >
                    <Text className="text-white font-bold text-base">Continue</Text>
                    <Ionicons name="arrow-forward" size={18} color="white" style={{ marginLeft: 8 }} />
                </TouchableOpacity>

                <TouchableOpacity
                    className="items-center"
                    onPress={() => router.push('/(auth)/mentor-onboard-4')}
                >
                    <Text className="text-gray-400 text-sm">Skip for now</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}