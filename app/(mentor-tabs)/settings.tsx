import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
    const [emailNotifs, setEmailNotifs] = useState(false);
    const [pushNotifs, setPushNotifs] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);
    const [showContact, setShowContact] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-[#F8F9FA]" edges={['top']}>
            <View className="px-5 pt-5 pb-4">
                <Text className="text-xl font-bold text-[#1F2937]">Settings</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

                {/* Account Security */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-5 border border-gray-100">
                    <View className="flex-row items-center mb-4">
                        <Ionicons name="lock-closed-outline" size={18} color="#6B46C1" />
                        <Text className="text-sm font-bold text-[#1F2937] ml-2">Account Security</Text>
                    </View>
                    <View className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-3">
                        <View className="flex-row items-center mb-2">
                            <Ionicons name="log-in-outline" size={16} color="#3B82F6" />
                            <Text className="text-sm font-bold text-blue-700 ml-2">Google Account Connected</Text>
                        </View>
                        <Text className="text-xs text-blue-600 leading-relaxed mb-2">
                            Your account is secured with Google OAuth. You don't have a traditional password since you signed in using Google.
                        </Text>
                        <Text className="text-xs font-semibold text-[#1F2937] mb-1">How to manage your account:</Text>
                        {['Your account security is managed through Google', 'To change your password, update it in your Google account', 'Enable 2FA in your Google account for additional security'].map((tip, i) => (
                            <Text key={i} className="text-xs text-blue-600 mb-0.5">• {tip}</Text>
                        ))}
                    </View>
                    <View className="bg-green-50 border border-green-100 rounded-xl p-3 flex-row items-center">
                        <Ionicons name="checkmark-circle" size={16} color="#22C55E" />
                        <Text className="text-xs text-green-700 font-semibold ml-2">Your account is secure with Google OAuth</Text>
                    </View>
                </View>

                {/* Booking Mode */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-5 border border-gray-100">
                    <View className="flex-row items-center mb-3">
                        <Ionicons name="calendar-outline" size={18} color="#6B46C1" />
                        <Text className="text-sm font-bold text-[#1F2937] ml-2">Booking Mode</Text>
                    </View>
                    <View className="flex-row items-center justify-between mb-1">
                        <Text className="text-xs text-gray-500">Current Mode</Text>
                        <View className="bg-purple-100 px-2 py-1 rounded-full">
                            <Text className="text-xs text-[#6B46C1] font-semibold">Time Slots</Text>
                        </View>
                    </View>
                    <Text className="text-xs text-gray-400 mb-4">Time Slots — Mentees can book your available slots directly</Text>
                    <View className="flex-row items-center justify-between mb-3">
                        <Text className="text-xs font-semibold text-[#1F2937]">Switch Mode</Text>
                        <TouchableOpacity className="bg-[#6B46C1] px-4 py-2 rounded-xl">
                            <Text className="text-white text-xs font-bold">Switch to Session Requests</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row gap-3">
                        <View className="flex-1 border-2 border-[#6B46C1] bg-purple-50 rounded-xl p-3">
                            <Text className="text-xs font-bold text-[#6B46C1] mb-1">Time Slots</Text>
                            {['Mentees see your available time slots', 'Instant booking and confirmation', 'No approval needed from you'].map((f, i) => (
                                <Text key={i} className="text-xs text-green-600">• {f}</Text>
                            ))}
                        </View>
                        <View className="flex-1 border border-gray-200 bg-gray-50 rounded-xl p-3">
                            <Text className="text-xs font-bold text-gray-400 mb-1">Session Requests</Text>
                            {['Mentees send custom session requests', 'You review and approve each request', 'More control over your schedule'].map((f, i) => (
                                <Text key={i} className="text-xs text-gray-400">• {f}</Text>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Notifications — Coming Soon */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-5 border border-gray-100 opacity-60">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-row items-center">
                            <Ionicons name="person-outline" size={18} color="#9CA3AF" />
                            <Text className="text-sm font-bold text-gray-400 ml-2">Account Settings</Text>
                        </View>
                        <Text className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">Coming Soon</Text>
                    </View>
                    {[
                        { label: 'Email Notifications', sub: 'Receive email updates about your account', value: emailNotifs, onChange: setEmailNotifs },
                        { label: 'Push Notifications', sub: 'Get notified about new appointments', value: pushNotifs, onChange: setPushNotifs },
                    ].map((item, i) => (
                        <View key={i} className="flex-row items-center justify-between py-3 border-b border-gray-100">
                            <View className="flex-1 mr-4">
                                <Text className="text-sm font-medium text-gray-400">{item.label}</Text>
                                <Text className="text-xs text-gray-300 mt-0.5">{item.sub}</Text>
                            </View>
                            <Switch value={item.value} onValueChange={item.onChange} disabled trackColor={{ true: '#6B46C1' }} />
                        </View>
                    ))}
                </View>

                {/* Privacy Settings — Coming Soon */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-5 border border-gray-100 opacity-60">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-row items-center">
                            <Ionicons name="shield-outline" size={18} color="#9CA3AF" />
                            <Text className="text-sm font-bold text-gray-400 ml-2">Privacy Settings</Text>
                        </View>
                        <Text className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">Coming Soon</Text>
                    </View>
                    {[
                        { label: 'Profile Visibility', sub: 'Make your profile visible to mentees', value: profileVisible, onChange: setProfileVisible },
                        { label: 'Contact Information', sub: 'Show contact details to mentees', value: showContact, onChange: setShowContact },
                    ].map((item, i) => (
                        <View key={i} className="flex-row items-center justify-between py-3 border-b border-gray-100">
                            <View className="flex-1 mr-4">
                                <Text className="text-sm font-medium text-gray-400">{item.label}</Text>
                                <Text className="text-xs text-gray-300 mt-0.5">{item.sub}</Text>
                            </View>
                            <Switch value={item.value} onValueChange={item.onChange} disabled trackColor={{ true: '#6B46C1' }} />
                        </View>
                    ))}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}