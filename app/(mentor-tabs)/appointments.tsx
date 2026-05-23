import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type FilterType = 'all' | 'upcoming' | 'meeting-links' | 'completed';

import { useState } from 'react';

const FILTERS: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All (0)' },
    { key: 'upcoming', label: 'Upcoming (0)' },
    { key: 'meeting-links', label: 'With Meeting Links (0)' },
    { key: 'completed', label: 'Completed (0)' },
];

const STATS = [
    { label: 'Total Sessions', value: '0', icon: 'calendar-outline', color: '#3B82F6', bg: '#EFF6FF' },
    { label: 'With Meeting Links', value: '0', icon: 'videocam-outline', color: '#22C55E', bg: '#F0FDF4' },
    { label: 'Upcoming', value: '0', icon: 'time-outline', color: '#F97316', bg: '#FFF7ED' },
    { label: 'This Week', value: '0', icon: 'trending-up-outline', color: '#8B5CF6', bg: '#F5F3FF' },
];

export default function AppointmentsScreen() {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    return (
        <SafeAreaView className="flex-1 bg-[#F8F9FA]" edges={['top']}>

            {/* Header Banner */}
            <View className="bg-[#6B46C1] px-5 pt-5 pb-6">
                <View className="flex-row items-center justify-between mb-1">
                    <TouchableOpacity onPress={() => router.back()} className="w-8 h-8 items-center justify-center">
                        <Ionicons name="arrow-back" size={22} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center bg-white/20 px-3 py-1.5 rounded-xl">
                        <Ionicons name="refresh-outline" size={14} color="white" />
                        <Text className="text-white text-xs font-semibold ml-1">Refresh</Text>
                    </TouchableOpacity>
                </View>
                <Text className="text-white text-xl font-bold mt-2">All Appointments</Text>
                <Text className="text-purple-200 text-xs mt-0.5">Manage and track all your mentoring sessions</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

                {/* Stats row */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16, gap: 12, paddingVertical: 16 }}
                >
                    {STATS.map((s, i) => (
                        <View key={i} className="bg-white rounded-2xl p-4 w-32 border border-gray-100">
                            <View className="flex-row items-center justify-between mb-2">
                                <Text className="text-xs text-gray-500 flex-1" numberOfLines={2}>{s.label}</Text>
                                <View className="w-8 h-8 rounded-xl items-center justify-center ml-1" style={{ backgroundColor: s.bg }}>
                                    <Ionicons name={s.icon as any} size={16} color={s.color} />
                                </View>
                            </View>
                            <Text className="text-2xl font-bold text-[#1F2937]">{s.value}</Text>
                        </View>
                    ))}
                </ScrollView>

                {/* Filter tabs */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="mb-4"
                    contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
                >
                    {FILTERS.map((f) => (
                        <TouchableOpacity
                            key={f.key}
                            onPress={() => setActiveFilter(f.key)}
                            className={`px-4 py-2 rounded-xl border ${activeFilter === f.key ? 'bg-[#6B46C1] border-[#6B46C1]' : 'bg-white border-gray-200'}`}
                        >
                            <Text className={`text-xs font-semibold ${activeFilter === f.key ? 'text-white' : 'text-gray-500'}`}>
                                {f.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Empty state */}
                <View className="mx-5 bg-white rounded-2xl p-8 items-center border border-gray-100">
                    <View className="w-20 h-20 bg-purple-50 rounded-full items-center justify-center mb-4">
                        <Ionicons name="calendar-outline" size={32} color="#C4B5FD" />
                    </View>
                    <Text className="text-base font-bold text-[#1F2937] mb-1">No appointments yet</Text>
                    <Text className="text-xs text-gray-400 text-center mb-5">
                        You haven't received any booking requests yet. Once mentees start booking sessions with you, they'll appear here.
                    </Text>
                    <View className="flex-row gap-3">
                        <TouchableOpacity className="bg-gray-100 px-4 py-2.5 rounded-xl flex-row items-center">
                            <Ionicons name="refresh-outline" size={14} color="#6B7280" />
                            <Text className="text-gray-600 text-xs font-bold ml-1">Refresh</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.push('/(mentor-tabs)/availability')}
                            className="bg-[#6B46C1] px-4 py-2.5 rounded-xl flex-row items-center"
                        >
                            <Ionicons name="time-outline" size={14} color="white" />
                            <Text className="text-white text-xs font-bold ml-1">Set Availability</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}