import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PROFILE_STEPS = [
    { label: 'Profile Info', sub: 'Basic details, bio & links' },
    { label: 'Services', sub: 'Add at least one custom service' },
    { label: 'Payment', sub: 'Add UPI or bank account' },
    { label: 'Availability', sub: 'Set your weekly schedule' },
    { label: 'Go Live', sub: 'Submitted for review' },
];

const STATS = [
    { label: 'Total Sessions', value: '--', sub: 'No sessions yet', icon: 'people-outline', color: '#3B82F6', bg: '#EFF6FF' },
    { label: 'Completed Sessions', value: '0', sub: '--', icon: 'checkmark-circle-outline', color: '#22C55E', bg: '#F0FDF4' },
    { label: 'Pending Sessions', value: '0', sub: 'No pending sessions', icon: 'time-outline', color: '#F97316', bg: '#FFF7ED' },
    { label: 'Session Requests', value: '--', sub: 'No requests', icon: 'chatbubble-outline', color: '#8B5CF6', bg: '#F5F3FF' },
    { label: 'This Month', value: '0', sub: 'No sessions this month', icon: 'trending-up-outline', color: '#6B46C1', bg: '#F5F3FF' },
];

const QUICK_ACTIONS = [
    { label: 'Manage Services', sub: 'Add and edit your services', icon: 'briefcase-outline', color: '#3B82F6', bg: '#EFF6FF', route: '/(mentor-tabs)/services' },
    { label: 'Set Availability', sub: 'Manage your schedule', icon: 'time-outline', color: '#22C55E', bg: '#F0FDF4', route: '/(mentor-tabs)/availability' },
    { label: 'Edit Profile', sub: 'Update your information', icon: 'person-outline', color: '#8B5CF6', bg: '#F5F3FF', route: '/(mentor-tabs)/profile' },
    { label: 'View Appointments', sub: 'Check your bookings', icon: 'calendar-outline', color: '#6B46C1', bg: '#F5F3FF', route: '/(mentor-tabs)/appointments' },
    { label: 'Mark as Busy', sub: 'Temporarily unavailable', icon: 'close-circle-outline', color: '#EF4444', bg: '#FEF2F2', route: null },
    { label: 'Settings', sub: 'Manage preferences', icon: 'settings-outline', color: '#6B7280', bg: '#F9FAFB', route: '/(mentor-tabs)/settings' },
];

export default function MentorDashboardScreen() {
    const completedSteps = 0;
    const totalSteps = PROFILE_STEPS.length;
    const progressPercent = (completedSteps / totalSteps) * 100;

    return (
        <SafeAreaView className="flex-1 bg-[#F8F9FA]" edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

                {/* Header */}
                <View className="px-5 pt-5 pb-4 flex-row justify-between items-center">
                    <Text className="text-2xl font-extrabold text-[#1F2937]">Dashboard</Text>
                    <TouchableOpacity className="w-10 h-10 bg-white rounded-full items-center justify-center border border-gray-100">
                        <Ionicons name="notifications-outline" size={20} color="#1F2937" />
                    </TouchableOpacity>
                </View>

                {/* Welcome Banner */}
                <View className="mx-5 mb-4 bg-[#6B46C1] rounded-3xl p-5 flex-row items-center justify-between overflow-hidden">
                    <View className="flex-1">
                        <Text className="text-white text-xl font-bold mb-1">Welcome back, Nandakishore!</Text>
                        <Text className="text-purple-200 text-xs leading-relaxed">
                            You have 0 pending sessions, 0 completed sessions, and 0 pending session requests
                        </Text>
                    </View>
                    <View className="w-14 h-14 bg-white/20 rounded-full items-center justify-center ml-3">
                        <Ionicons name="person" size={28} color="white" />
                    </View>
                </View>

                {/* Profile Completion Card */}
                <View className="mx-5 mb-4 bg-[#6B46C1] rounded-3xl overflow-hidden">
                    <View className="p-4 flex-row items-center justify-between">
                        <View className="flex-row items-center flex-1">
                            <View className="w-8 h-8 bg-white/20 rounded-full items-center justify-center mr-3">
                                <Ionicons name="time-outline" size={16} color="white" />
                            </View>
                            <View>
                                <Text className="text-white font-bold text-base">Profile 0% complete</Text>
                                <Text className="text-purple-200 text-xs">0 of 5 steps done</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="close" size={20} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Step indicators */}
                    <View className="bg-white mx-3 mb-3 rounded-2xl p-4">
                        <View className="flex-row justify-between mb-4">
                            {PROFILE_STEPS.map((step, i) => (
                                <View key={i} className="items-center flex-1">
                                    <View className={`w-8 h-8 rounded-full items-center justify-center mb-1 ${i < completedSteps ? 'bg-[#6B46C1]' : i === completedSteps ? 'bg-[#6B46C1]' : 'bg-gray-100 border border-gray-200'}`}>
                                        {i < completedSteps ? (
                                            <Ionicons name="checkmark" size={14} color="white" />
                                        ) : (
                                            <Text className={`text-xs font-bold ${i === completedSteps ? 'text-white' : 'text-gray-400'}`}>{i + 1}</Text>
                                        )}
                                    </View>
                                    {i < PROFILE_STEPS.length - 1 && (
                                        <View className="absolute top-4 left-1/2 right-0 h-0.5 bg-gray-100" style={{ width: '100%' }} />
                                    )}
                                </View>
                            ))}
                        </View>

                        <View className="border-t border-gray-100 pt-3">
                            <Text className="text-xs font-bold text-[#1F2937] mb-2">Step 1: Profile Info</Text>
                            <View className="flex-row flex-wrap gap-2 mb-3">
                                {['Profile Photo', 'Bio (min 50 chars)', 'Mentoring Category', 'Areas of Expertise', 'Phone Number'].map((item) => (
                                    <View key={item} className="bg-red-50 border border-red-100 px-2 py-1 rounded-full flex-row items-center">
                                        <View className="w-1.5 h-1.5 rounded-full bg-red-400 mr-1" />
                                        <Text className="text-red-600 text-xs font-medium">{item}</Text>
                                    </View>
                                ))}
                            </View>
                            <View className="flex-row items-center justify-between">
                                <Text className="text-xs text-gray-400">0 of 5 steps complete</Text>
                                <TouchableOpacity
                                    onPress={() => router.push('/(mentor-tabs)/profile')}
                                    className="bg-[#6B46C1] px-4 py-2 rounded-xl flex-row items-center"
                                >
                                    <Ionicons name="create-outline" size={14} color="white" />
                                    <Text className="text-white text-xs font-bold ml-1">Edit Profile →</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Progress bar */}
                        <View className="mt-3 h-1 bg-gray-100 rounded-full">
                            <View
                                className="h-1 bg-[#6B46C1] rounded-full"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </View>
                        <Text className="text-xs text-gray-400 text-right mt-1">{Math.round(progressPercent)}%</Text>
                    </View>
                </View>

                {/* Stats Cards */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="mb-4"
                    contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
                >
                    {STATS.map((stat, i) => (
                        <View key={i} className="bg-white rounded-2xl p-4 w-36 border border-gray-100">
                            <View className="flex-row items-center justify-between mb-2">
                                <Text className="text-xs text-gray-500 flex-1" numberOfLines={2}>{stat.label}</Text>
                                <View className="w-9 h-9 rounded-xl items-center justify-center ml-2" style={{ backgroundColor: stat.bg }}>
                                    <Ionicons name={stat.icon as any} size={18} color={stat.color} />
                                </View>
                            </View>
                            <Text className="text-2xl font-bold text-[#1F2937]">{stat.value}</Text>
                            <Text className="text-xs mt-1" style={{ color: stat.color }}>{stat.sub}</Text>
                        </View>
                    ))}
                </ScrollView>

                {/* Session Rate card */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-4 border border-gray-100 flex-row items-center justify-between">
                    <View>
                        <Text className="text-xs text-gray-400 mb-1">Session Rate</Text>
                        <Text className="text-2xl font-bold text-[#1F2937]">Free</Text>
                        <Text className="text-xs text-green-500 font-medium">Per session</Text>
                    </View>
                    <View className="w-12 h-12 bg-purple-100 rounded-xl items-center justify-center">
                        <Ionicons name="trending-up" size={22} color="#6B46C1" />
                    </View>
                </View>

                {/* Booking Mode */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-4 border border-gray-100">
                    <View className="flex-row items-center justify-between mb-3">
                        <Text className="text-sm font-bold text-[#1F2937]">Booking Mode</Text>
                        <Text className="text-xs text-gray-400">Choose how mentees can book with you</Text>
                    </View>
                    <View className="flex-row gap-3">
                        {/* Time Slots - active */}
                        <View className="flex-1 border-2 border-[#6B46C1] bg-purple-50 rounded-2xl p-3">
                            <View className="flex-row items-center justify-between mb-2">
                                <View className="w-8 h-8 bg-purple-100 rounded-lg items-center justify-center">
                                    <Ionicons name="calendar-outline" size={16} color="#6B46C1" />
                                </View>
                                <Ionicons name="checkmark-circle" size={16} color="#6B46C1" />
                            </View>
                            <Text className="text-xs font-bold text-[#1F2937] mb-0.5">Time Slots</Text>
                            <Text className="text-xs text-gray-500">Direct booking</Text>
                        </View>
                        {/* Session Requests */}
                        <View className="flex-1 border border-gray-200 bg-gray-50 rounded-2xl p-3">
                            <View className="w-8 h-8 bg-gray-200 rounded-lg items-center justify-center mb-2">
                                <Ionicons name="chatbubble-outline" size={16} color="#9CA3AF" />
                            </View>
                            <Text className="text-xs font-bold text-gray-400 mb-0.5">Session Requests</Text>
                            <Text className="text-xs text-gray-400">Approval required</Text>
                        </View>
                    </View>
                    <View className="mt-3 bg-purple-50 rounded-xl p-2.5">
                        <Text className="text-xs text-[#6B46C1]">
                            <Text className="font-bold">Currently Active: </Text>
                            Mentees can book your available time slots directly
                        </Text>
                    </View>
                </View>

                {/* Quick Actions */}
                <View className="mx-5 mb-4">
                    <Text className="text-sm font-bold text-[#1F2937] mb-3">Quick Actions</Text>
                    <View className="flex-row flex-wrap gap-3">
                        {QUICK_ACTIONS.map((action, i) => (
                            <TouchableOpacity
                                key={i}
                                onPress={() => action.route && router.push(action.route as any)}
                                className="bg-white border border-gray-100 rounded-2xl p-4 flex-row items-center"
                                style={{ width: '47%' }}
                            >
                                <View className="w-9 h-9 rounded-xl items-center justify-center mr-3" style={{ backgroundColor: action.bg }}>
                                    <Ionicons name={action.icon as any} size={18} color={action.color} />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-xs font-bold text-[#1F2937]" numberOfLines={1}>{action.label}</Text>
                                    <Text className="text-xs text-gray-400 mt-0.5" numberOfLines={1}>{action.sub}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Upcoming Appointments */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-4 border border-gray-100">
                    <View className="flex-row items-center justify-between mb-3">
                        <View className="flex-row items-center">
                            <View className="w-9 h-9 bg-purple-100 rounded-xl items-center justify-center mr-2">
                                <Ionicons name="calendar" size={18} color="#6B46C1" />
                            </View>
                            <View>
                                <Text className="text-sm font-bold text-[#1F2937]">Upcoming Appointments</Text>
                                <Text className="text-xs text-gray-400">Your scheduled mentoring sessions</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => router.push('/(mentor-tabs)/appointments')}
                            className="flex-row items-center"
                        >
                            <Text className="text-xs text-[#6B46C1] font-semibold">View All</Text>
                            <Ionicons name="arrow-forward" size={12} color="#6B46C1" />
                        </TouchableOpacity>
                    </View>

                    {/* Empty state */}
                    <View className="items-center py-8">
                        <View className="w-16 h-16 bg-purple-50 rounded-full items-center justify-center mb-3">
                            <Ionicons name="calendar-outline" size={28} color="#C4B5FD" />
                        </View>
                        <Text className="text-sm font-semibold text-[#1F2937]">No upcoming sessions</Text>
                        <Text className="text-xs text-gray-400 text-center mt-1 px-4">
                            Once mentees start booking sessions with you, they'll appear here.
                        </Text>
                        <View className="flex-row gap-3 mt-4">
                            <TouchableOpacity
                                onPress={() => router.push('/(mentor-tabs)/availability')}
                                className="bg-[#6B46C1] px-4 py-2.5 rounded-xl flex-row items-center"
                            >
                                <Ionicons name="time-outline" size={14} color="white" />
                                <Text className="text-white text-xs font-bold ml-1">Set Availability</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-gray-100 px-4 py-2.5 rounded-xl flex-row items-center">
                                <Ionicons name="refresh-outline" size={14} color="#6B7280" />
                                <Text className="text-gray-600 text-xs font-bold ml-1">Refresh</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Your Main Service + Recent Sessions row */}
                <View className="mx-5 flex-row gap-3">
                    <View className="flex-1 bg-white rounded-2xl p-4 border border-gray-100">
                        <View className="flex-row items-center justify-between mb-3">
                            <Text className="text-xs font-bold text-[#1F2937]">Your Main Service</Text>
                            <TouchableOpacity onPress={() => router.push('/(mentor-tabs)/services')}>
                                <Text className="text-xs text-[#6B46C1] font-semibold">Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="bg-gray-50 rounded-xl p-3">
                            <Text className="text-xs text-gray-400">--</Text>
                            <View className="flex-row items-center mt-1">
                                <Ionicons name="time-outline" size={12} color="#9CA3AF" />
                                <Text className="text-xs text-gray-400 ml-1">--</Text>
                                <Text className="text-xs text-green-500 font-bold ml-auto">₹ Free</Text>
                            </View>
                            <Text className="text-xs text-gray-400 mt-1">--</Text>
                        </View>
                    </View>

                    <View className="flex-1 bg-green-50 rounded-2xl p-4 border border-green-100">
                        <View className="flex-row items-center mb-2">
                            <View className="w-8 h-8 bg-green-100 rounded-xl items-center justify-center mr-2">
                                <Ionicons name="calendar-outline" size={16} color="#22C55E" />
                            </View>
                            <Text className="text-xs font-bold text-[#1F2937]">Recent Sessions</Text>
                        </View>
                        <Text className="text-xs text-gray-400 mb-1">Your latest completed mentoring sessions</Text>
                        <Text className="text-2xl font-bold text-[#1F2937]">0</Text>
                        <Text className="text-xs text-green-500">Completed</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}