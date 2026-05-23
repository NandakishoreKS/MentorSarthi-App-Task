import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingHeader from '../../components/OnboardingHeader';

const DURATIONS = ['30 min', '1 hour', '1.5 hours', '2 hours'];
const PRICES = ['Free', '₹200', '₹500', '₹1000', '₹1500', '₹2000'];

export default function MentorOnboard2() {
    const [duration, setDuration] = useState('1 hour');
    const [price, setPrice] = useState('Free');
    const [serviceTitle, setServiceTitle] = useState('1-on-1 Mentorship Session');
    const [serviceDesc, setServiceDesc] = useState('');

    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
            <OnboardingHeader currentStep={2} />
            <ScrollView
                className="flex-1 px-6"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 24, paddingBottom: 40 }}
            >
                <Text className="text-2xl font-extrabold text-[#1F2937] mb-1">Your Services</Text>
                <Text className="text-sm text-gray-500 mb-6">
                    Define what you offer. You can add more services later.
                </Text>

                {/* Info banner */}
                <View className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-5 flex-row items-start">
                    <Ionicons name="information-circle-outline" size={18} color="#3B82F6" />
                    <Text className="text-xs text-blue-600 ml-2 flex-1 leading-relaxed">
                        <Text className="font-bold">1-on-1 Mentorship</Text> is your default service and is always visible to mentees. You can add more services after going live.
                    </Text>
                </View>

                {/* Default service card */}
                <View className="bg-white border-2 border-[#6B46C1] rounded-2xl p-5 mb-5">
                    <View className="flex-row items-center mb-4">
                        <View className="w-10 h-10 bg-purple-100 rounded-xl items-center justify-center mr-3">
                            <Ionicons name="book-outline" size={18} color="#6B46C1" />
                        </View>
                        <View>
                            <Text className="text-sm font-bold text-[#1F2937]">1-on-1 Mentorship Session</Text>
                            <View className="flex-row items-center mt-0.5 gap-2">
                                <View className="bg-gray-100 px-2 py-0.5 rounded-full">
                                    <Text className="text-xs text-gray-500">Mentorship</Text>
                                </View>
                                <View className="bg-gray-100 px-2 py-0.5 rounded-full flex-row items-center">
                                    <Ionicons name="lock-closed" size={9} color="#6B7280" />
                                    <Text className="text-xs text-gray-500 ml-1">Default</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Service description */}
                    <View className="mb-4">
                        <Text className="text-xs font-semibold text-gray-500 mb-2">Description</Text>
                        <TextInput
                            value={serviceDesc}
                            onChangeText={setServiceDesc}
                            placeholder="Describe what mentees can expect from a session with you..."
                            placeholderTextColor="#9CA3AF"
                            multiline
                            numberOfLines={3}
                            textAlignVertical="top"
                            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1F2937] h-20"
                        />
                    </View>

                    {/* Duration */}
                    <View className="mb-4">
                        <Text className="text-xs font-semibold text-gray-500 mb-2">Session Duration</Text>
                        <View className="flex-row flex-wrap gap-2">
                            {DURATIONS.map(d => (
                                <TouchableOpacity
                                    key={d}
                                    onPress={() => setDuration(d)}
                                    className={`px-4 py-2 rounded-full border ${duration === d
                                            ? 'bg-[#6B46C1] border-[#6B46C1]'
                                            : 'bg-gray-50 border-gray-200'
                                        }`}
                                >
                                    <Text className={`text-xs font-medium ${duration === d ? 'text-white' : 'text-gray-600'
                                        }`}>
                                        {d}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Price */}
                    <View>
                        <Text className="text-xs font-semibold text-gray-500 mb-2">Session Price</Text>
                        <View className="flex-row flex-wrap gap-2">
                            {PRICES.map(p => (
                                <TouchableOpacity
                                    key={p}
                                    onPress={() => setPrice(p)}
                                    className={`px-4 py-2 rounded-full border ${price === p
                                            ? 'bg-[#6B46C1] border-[#6B46C1]'
                                            : 'bg-gray-50 border-gray-200'
                                        }`}
                                >
                                    <Text className={`text-xs font-medium ${price === p ? 'text-white' : 'text-gray-600'
                                        }`}>
                                        {p}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Revenue info */}
                {price !== 'Free' && (
                    <View className="flex-row gap-3 mb-5">
                        <View className="flex-1 bg-orange-50 border border-orange-100 rounded-xl p-3 items-center">
                            <Text className="text-lg font-bold text-orange-500">30%</Text>
                            <Text className="text-xs text-orange-400">Platform fee</Text>
                        </View>
                        <View className="flex-1 bg-green-50 border border-green-100 rounded-xl p-3 items-center">
                            <Text className="text-lg font-bold text-green-600">70%</Text>
                            <Text className="text-xs text-green-500">Your earnings</Text>
                        </View>
                    </View>
                )}

                <TouchableOpacity
                    className="bg-[#6B46C1] py-4 rounded-2xl items-center flex-row justify-center mb-4"
                    onPress={() => router.push('/(auth)/mentor-onboard-3')}
                >
                    <Text className="text-white font-bold text-base">Continue</Text>
                    <Ionicons name="arrow-forward" size={18} color="white" style={{ marginLeft: 8 }} />
                </TouchableOpacity>

                <TouchableOpacity
                    className="items-center"
                    onPress={() => router.push('/(auth)/mentor-onboard-3')}
                >
                    <Text className="text-gray-400 text-sm">Skip for now</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}