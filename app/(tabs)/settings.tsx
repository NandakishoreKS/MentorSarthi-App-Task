import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
    const [pushNotifs, setPushNotifs] = useState(true);
    const [emailNotifs, setEmailNotifs] = useState(true);
    const [sessionReminders, setSessionReminders] = useState(true);
    const [profileVisible, setProfileVisible] = useState(true);

    return (
        <SafeAreaView className="flex-1 bg-[#F8F9FA]" edges={['top']}>

            {/* Header */}
            <View className="px-5 pt-5 pb-4 bg-white border-b border-gray-100 flex-row items-center">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-9 h-9 bg-gray-50 rounded-full items-center justify-center border border-gray-100 mr-3"
                >
                    <Ionicons name="arrow-back" size={18} color="#1F2937" />
                </TouchableOpacity>
                <Text className="text-xl font-extrabold text-[#1F2937]">Settings</Text>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {/* Account section */}
                <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest mx-5 mt-5 mb-2">
                    Account
                </Text>
                <View className="mx-5 mb-4 bg-white rounded-2xl border border-gray-100 overflow-hidden">

                    {/* Personal Info */}
                    <TouchableOpacity className="flex-row items-center px-4 py-4 border-b border-gray-100">
                        <View className="w-9 h-9 bg-purple-50 rounded-xl items-center justify-center mr-3">
                            <Ionicons name="person-outline" size={18} color="#6B46C1" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-sm font-semibold text-[#1F2937]">Personal Information</Text>
                            <Text className="text-xs text-gray-400 mt-0.5">Nandakishore · nandakishoreks21@gmail.com</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
                    </TouchableOpacity>

                    {/* Goals */}
                    <TouchableOpacity className="flex-row items-center px-4 py-4 border-b border-gray-100">
                        <View className="w-9 h-9 bg-purple-50 rounded-xl items-center justify-center mr-3">
                            <Ionicons name="flag-outline" size={18} color="#6B46C1" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-sm font-semibold text-[#1F2937]">My Goals</Text>
                            <Text className="text-xs text-gray-400 mt-0.5">Career Growth, Learn New Skills</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
                    </TouchableOpacity>

                    {/* Interests */}
                    <TouchableOpacity className="flex-row items-center px-4 py-4">
                        <View className="w-9 h-9 bg-blue-50 rounded-xl items-center justify-center mr-3">
                            <Ionicons name="heart-outline" size={18} color="#3B82F6" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-sm font-semibold text-[#1F2937]">Interests</Text>
                            <Text className="text-xs text-gray-400 mt-0.5">Mobile Dev, AI/ML, Leadership, +1 more</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
                    </TouchableOpacity>
                </View>

                {/* Notifications */}
                <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest mx-5 mb-2">
                    Notifications
                </Text>
                <View className="mx-5 mb-4 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <SwitchRow
                        icon="notifications-outline"
                        iconColor="#F97316"
                        iconBg="#FFF7ED"
                        title="Push Notifications"
                        sub="Session updates and alerts"
                        value={pushNotifs}
                        onChange={setPushNotifs}
                    />
                    <SwitchRow
                        icon="mail-outline"
                        iconColor="#3B82F6"
                        iconBg="#EFF6FF"
                        title="Email Notifications"
                        sub="Booking confirmations and news"
                        value={emailNotifs}
                        onChange={setEmailNotifs}
                    />
                    <SwitchRow
                        icon="alarm-outline"
                        iconColor="#22C55E"
                        iconBg="#F0FDF4"
                        title="Session Reminders"
                        sub="Reminded 30 mins before session"
                        value={sessionReminders}
                        onChange={setSessionReminders}
                        noBorder
                    />
                </View>

                {/* Privacy */}
                <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest mx-5 mb-2">
                    Privacy
                </Text>
                <View className="mx-5 mb-4 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <SwitchRow
                        icon="eye-outline"
                        iconColor="#8B5CF6"
                        iconBg="#F5F3FF"
                        title="Profile Visibility"
                        sub="Allow mentors to view your profile"
                        value={profileVisible}
                        onChange={setProfileVisible}
                        noBorder
                    />
                </View>

                {/* Payment */}
                <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest mx-5 mb-2">
                    Payment
                </Text>
                <View className="mx-5 mb-4 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <TouchableOpacity className="flex-row items-center px-4 py-4 border-b border-gray-100">
                        <View className="w-9 h-9 bg-green-50 rounded-xl items-center justify-center mr-3">
                            <Ionicons name="card-outline" size={18} color="#22C55E" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-sm font-semibold text-[#1F2937]">Payment Methods</Text>
                            <Text className="text-xs text-gray-400 mt-0.5">Add UPI, cards or net banking</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center px-4 py-4">
                        <View className="w-9 h-9 bg-purple-50 rounded-xl items-center justify-center mr-3">
                            <Ionicons name="receipt-outline" size={18} color="#6B46C1" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-sm font-semibold text-[#1F2937]">Transaction History</Text>
                            <Text className="text-xs text-gray-400 mt-0.5">View past payments</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
                    </TouchableOpacity>
                </View>

                {/* Security */}
                <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest mx-5 mb-2">
                    Security
                </Text>
                <View className="mx-5 mb-4 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <View className="px-4 py-4 flex-row items-start">
                        <View className="w-9 h-9 bg-blue-50 rounded-xl items-center justify-center mr-3 mt-0.5">
                            <Ionicons name="logo-google" size={18} color="#3B82F6" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-sm font-semibold text-[#1F2937]">Google Account Connected</Text>
                            <Text className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                                Your account is secured with Google OAuth. Manage your password through Google.
                            </Text>
                        </View>
                    </View>
                    <View className="mx-4 mb-3 bg-green-50 border border-green-100 rounded-xl px-3 py-2 flex-row items-center">
                        <Ionicons name="checkmark-circle" size={14} color="#22C55E" />
                        <Text className="text-xs text-green-700 font-semibold ml-2">
                            Secured with Google OAuth
                        </Text>
                    </View>
                </View>

                {/* Support */}
                <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest mx-5 mb-2">
                    Support
                </Text>
                <View className="mx-5 mb-5 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    {[
                        { icon: 'help-buoy-outline', title: 'Help Center', sub: 'FAQs and guides', color: '#3B82F6', bg: '#EFF6FF' },
                        { icon: 'chatbubble-outline', title: 'Contact Support', sub: 'Chat with our team', color: '#6B46C1', bg: '#F5F3FF' },
                        { icon: 'shield-checkmark-outline', title: 'Privacy Policy', sub: 'How we handle your data', color: '#8B5CF6', bg: '#F5F3FF' },
                        { icon: 'document-text-outline', title: 'Terms of Service', sub: 'Platform rules and guidelines', color: '#6B7280', bg: '#F9FAFB' },
                    ].map((item, i, arr) => (
                        <TouchableOpacity
                            key={item.title}
                            className={`flex-row items-center px-4 py-3.5 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >
                            <View
                                className="w-9 h-9 rounded-xl items-center justify-center mr-3"
                                style={{ backgroundColor: item.bg }}
                            >
                                <Ionicons name={item.icon as any} size={18} color={item.color} />
                            </View>
                            <View className="flex-1">
                                <Text className="text-sm font-semibold text-[#1F2937]">{item.title}</Text>
                                <Text className="text-xs text-gray-400 mt-0.5">{item.sub}</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
                        </TouchableOpacity>
                    ))}
                </View>

                <Text className="text-xs text-gray-300 text-center mb-4">MentorSarthi v1.0.0</Text>

                {/* Logout */}
                <TouchableOpacity
                    className="mx-5 mb-4 bg-red-50 py-4 rounded-2xl flex-row justify-center items-center border border-red-100"
                    onPress={() => router.replace('/(auth)/login')}
                >
                    <Ionicons name="log-out-outline" size={18} color="#EF4444" />
                    <Text className="text-red-500 font-bold text-base ml-2">Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

function SwitchRow({
    icon, iconColor, iconBg, title, sub, value, onChange, noBorder = false
}: {
    icon: any;
    iconColor: string;
    iconBg: string;
    title: string;
    sub: string;
    value: boolean;
    onChange: (v: boolean) => void;
    noBorder?: boolean;
}) {
    return (
        <View className={`flex-row items-center px-4 py-3.5 ${noBorder ? '' : 'border-b border-gray-100'}`}>
            <View
                className="w-9 h-9 rounded-xl items-center justify-center mr-3"
                style={{ backgroundColor: iconBg }}
            >
                <Ionicons name={icon} size={18} color={iconColor} />
            </View>
            <View className="flex-1 mr-3">
                <Text className="text-sm font-semibold text-[#1F2937]">{title}</Text>
                <Text className="text-xs text-gray-400 mt-0.5">{sub}</Text>
            </View>
            <Switch
                value={value}
                onValueChange={onChange}
                trackColor={{ true: '#6B46C1', false: '#E5E7EB' }}
                thumbColor="white"
            />
        </View>
    );
}