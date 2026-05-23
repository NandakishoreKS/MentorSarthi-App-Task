import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const STATS = [
    { label: 'Sessions', value: '2', icon: 'calendar-outline', color: '#6B46C1', bg: '#F5F3FF' },
    { label: 'Mentors', value: '2', icon: 'people-outline', color: '#3B82F6', bg: '#EFF6FF' },
    { label: 'Hours', value: '3', icon: 'time-outline', color: '#22C55E', bg: '#F0FDF4' },
];

const GOALS = ['Career Growth', 'Learn New Skills'];
const INTERESTS = ['Mobile Development', 'AI / Machine Learning', 'Leadership', 'Personal Branding'];

export default function ProfileScreen() {
    return (
        <SafeAreaView className="flex-1 bg-[#F8F9FA]" edges={['top']}>

            {/* Header */}
            <View className="px-5 pt-5 pb-4 bg-white border-b border-gray-100 flex-row justify-between items-center">
                <Text className="text-xl font-extrabold text-[#1F2937]">My Profile</Text>
                <TouchableOpacity
                    onPress={() => router.push('/settings')}
                    className="w-9 h-9 bg-gray-50 rounded-full items-center justify-center border border-gray-100"
                >
                    <Ionicons name="settings-outline" size={20} color="#1F2937" />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {/* Profile card */}
                <View className="bg-white mx-5 mt-5 mb-4 rounded-3xl p-5 border border-gray-100">
                    <View className="flex-row items-center mb-4">
                        <View className="relative mr-4">
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/150?u=nanda' }}
                                className="w-20 h-20 rounded-2xl bg-gray-100"
                            />
                            <TouchableOpacity className="absolute -bottom-1 -right-1 bg-[#6B46C1] w-7 h-7 rounded-full items-center justify-center border-2 border-white">
                                <Ionicons name="camera" size={13} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View className="flex-1">
                            <Text className="text-lg font-extrabold text-[#1F2937]">Nandakishore</Text>
                            <Text className="text-sm text-[#6B46C1] font-medium mt-0.5">
                                AI/ML Engineer & Developer
                            </Text>
                            <View className="flex-row items-center mt-1.5">
                                <View className="w-2 h-2 bg-green-400 rounded-full mr-1.5" />
                                <Text className="text-xs text-gray-500">Active learner</Text>
                            </View>
                        </View>
                    </View>

                    {/* Edit profile button */}
                    <TouchableOpacity
                        onPress={() => router.push('/edit-profile')}
                        className="bg-purple-50 border border-purple-100 py-3 rounded-2xl flex-row items-center justify-center"
                    >
                        <Ionicons name="create-outline" size={16} color="#6B46C1" />
                        <Text className="text-[#6B46C1] font-bold text-sm ml-2">Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Stats row */}
                <View className="flex-row mx-5 mb-4 gap-3">
                    {STATS.map((stat, i) => (
                        <View
                            key={i}
                            className="flex-1 bg-white rounded-2xl p-3 items-center border border-gray-100"
                        >
                            <View
                                className="w-9 h-9 rounded-xl items-center justify-center mb-1.5"
                                style={{ backgroundColor: stat.bg }}
                            >
                                <Ionicons name={stat.icon as any} size={17} color={stat.color} />
                            </View>
                            <Text className="text-lg font-extrabold text-[#1F2937]">{stat.value}</Text>
                            <Text className="text-xs text-gray-400 mt-0.5">{stat.label}</Text>
                        </View>
                    ))}
                </View>

                {/* Goals */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-4 border border-gray-100">
                    <View className="flex-row items-center justify-between mb-3">
                        <View className="flex-row items-center">
                            <Ionicons name="flag-outline" size={16} color="#6B46C1" />
                            <Text className="text-sm font-bold text-[#1F2937] ml-2">My Goals</Text>
                        </View>
                        <TouchableOpacity onPress={() => router.push('/settings')}>
                            <Text className="text-xs text-[#6B46C1] font-semibold">Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row flex-wrap gap-2">
                        {GOALS.map(goal => (
                            <View key={goal} className="flex-row items-center bg-purple-50 border border-purple-100 px-3 py-1.5 rounded-full">
                                <Ionicons name="checkmark-circle" size={13} color="#6B46C1" />
                                <Text className="text-xs text-purple-700 font-semibold ml-1">{goal}</Text>
                            </View>
                        ))}
                        <TouchableOpacity className="flex-row items-center bg-gray-50 border border-dashed border-gray-200 px-3 py-1.5 rounded-full">
                            <Ionicons name="add" size={13} color="#9CA3AF" />
                            <Text className="text-xs text-gray-400 ml-1">Add goal</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Interests */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-4 border border-gray-100">
                    <View className="flex-row items-center justify-between mb-3">
                        <View className="flex-row items-center">
                            <Ionicons name="heart-outline" size={16} color="#6B46C1" />
                            <Text className="text-sm font-bold text-[#1F2937] ml-2">Interests</Text>
                        </View>
                        <TouchableOpacity onPress={() => router.push('/settings')}>
                            <Text className="text-xs text-[#6B46C1] font-semibold">Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row flex-wrap gap-2">
                        {INTERESTS.map(interest => (
                            <View key={interest} className="bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
                                <Text className="text-xs text-blue-700 font-medium">{interest}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Account section */}
                <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest mx-5 mb-2">
                    Account
                </Text>
                <View className="mx-5 mb-4 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <SettingsRow
                        icon="person-outline"
                        title="Personal Information"
                        sub="Name, email, phone"
                        color="#6B46C1"
                        bg="#F5F3FF"
                        onPress={() => router.push('/settings')}
                    />
                    <SettingsRow
                        icon="card-outline"
                        title="Payment Methods"
                        sub="Cards and UPI"
                        color="#22C55E"
                        bg="#F0FDF4"
                        onPress={() => router.push('/settings')}
                    />
                    <SettingsRow
                        icon="notifications-outline"
                        title="Notifications"
                        sub="Alerts and reminders"
                        color="#F97316"
                        bg="#FFF7ED"
                        onPress={() => router.push('/settings')}
                        noBorder
                    />
                </View>

                {/* Support section */}
                <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest mx-5 mb-2">
                    Support & Legal
                </Text>
                <View className="mx-5 mb-5 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <SettingsRow
                        icon="help-buoy-outline"
                        title="Help Center"
                        sub="FAQs and support"
                        color="#3B82F6"
                        bg="#EFF6FF"
                    />
                    <SettingsRow
                        icon="shield-checkmark-outline"
                        title="Privacy Policy"
                        sub="How we use your data"
                        color="#8B5CF6"
                        bg="#F5F3FF"
                    />
                    <SettingsRow
                        icon="document-text-outline"
                        title="Terms of Service"
                        sub="Platform rules"
                        color="#6B7280"
                        bg="#F9FAFB"
                        noBorder
                    />
                </View>

                {/* App version */}
                <Text className="text-xs text-gray-300 text-center mb-4">
                    MentorSarthi v1.0.0
                </Text>

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

function SettingsRow({
    icon, title, sub, color, bg, noBorder = false, onPress
}: {
    icon: any;
    title: string;
    sub: string;
    color: string;
    bg: string;
    noBorder?: boolean;
    onPress?: () => void;
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`flex-row items-center px-4 py-3.5 ${noBorder ? '' : 'border-b border-gray-100'}`}
        >
            <View
                className="w-9 h-9 rounded-xl items-center justify-center mr-3"
                style={{ backgroundColor: bg }}
            >
                <Ionicons name={icon} size={18} color={color} />
            </View>
            <View className="flex-1">
                <Text className="text-sm font-semibold text-[#1F2937]">{title}</Text>
                <Text className="text-xs text-gray-400 mt-0.5">{sub}</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
        </TouchableOpacity>
    );
}