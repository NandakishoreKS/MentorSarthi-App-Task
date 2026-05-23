// availability.tsx
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const QUICK_PRESETS = [
    { label: 'Evening Weekdays', sub: 'Mon–Fri, 6–9 PM', icon: 'calendar-outline', color: '#6B46C1', bg: '#F5F3FF' },
    { label: 'Weekend Mornings', sub: 'Sat–Sun, 10 AM–1 PM', icon: 'time-outline', color: '#8B5CF6', bg: '#F5F3FF' },
    { label: 'Morning + Evening', sub: '8–10 AM & 6–9 PM', icon: 'add', color: '#22C55E', bg: '#F0FDF4' },
    { label: 'Clear All', sub: 'Remove all availability', icon: 'close', color: '#EF4444', bg: '#FEF2F2' },
];

export default function AvailabilityScreen() {
    const [dayEnabled, setDayEnabled] = useState<Record<string, boolean>>({});
    const [bookingMode, setBookingMode] = useState<'timeslots' | 'requests'>('timeslots');

    return (
        <SafeAreaView className="flex-1 bg-[#F8F9FA]" edges={['top']}>
            <View className="px-5 pt-5 pb-4 flex-row items-center">
                <TouchableOpacity onPress={() => router.back()} className="mr-3">
                    <Ionicons name="arrow-back" size={22} color="#1F2937" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-[#1F2937]">Availability</Text>
                <TouchableOpacity className="ml-auto bg-[#6B46C1] px-4 py-2 rounded-xl flex-row items-center">
                    <Ionicons name="save-outline" size={14} color="white" />
                    <Text className="text-white text-xs font-bold ml-1">Save Changes</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

                {/* Booking mode selector */}
                <View className="mx-5 mb-4 bg-purple-50 border border-purple-100 rounded-2xl p-5 items-center">
                    <View className="w-12 h-12 bg-purple-100 rounded-full items-center justify-center mb-3">
                        <Ionicons name="calendar-outline" size={22} color="#6B46C1" />
                    </View>
                    <Text className="text-base font-bold text-[#1F2937] mb-1">How would you like to accept sessions?</Text>
                    <Text className="text-xs text-gray-500 text-center mb-4">Choose your booking style — you can always change this later from the dashboard.</Text>
                    <View className="flex-row gap-3 w-full">
                        <TouchableOpacity
                            onPress={() => setBookingMode('timeslots')}
                            className={`flex-1 rounded-2xl p-4 border-2 ${bookingMode === 'timeslots' ? 'border-[#6B46C1] bg-white' : 'border-gray-200 bg-white'}`}
                        >
                            <View className="w-8 h-8 bg-purple-100 rounded-lg items-center justify-center mb-2">
                                <Ionicons name="time-outline" size={16} color="#6B46C1" />
                            </View>
                            <Text className="text-xs font-bold text-[#1F2937] mb-1">Time Slot Booking</Text>
                            <Text className="text-xs text-gray-500 mb-2">Set specific days & times. Mentees pick an open slot and book instantly.</Text>
                            <Text className="text-xs text-[#6B46C1] font-semibold">Set my schedule →</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setBookingMode('requests')}
                            className={`flex-1 rounded-2xl p-4 border-2 ${bookingMode === 'requests' ? 'border-[#6B46C1] bg-white' : 'border-gray-200 bg-white'}`}
                        >
                            <View className="w-8 h-8 bg-gray-100 rounded-lg items-center justify-center mb-2">
                                <Ionicons name="chatbubble-outline" size={16} color="#9CA3AF" />
                            </View>
                            <Text className="text-xs font-bold text-[#1F2937] mb-1">Session Requests</Text>
                            <Text className="text-xs text-gray-500 mb-2">Mentees send you a request. You review and approve each session manually.</Text>
                            <Text className="text-xs text-[#6B46C1] font-semibold">Use this mode →</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Manage Availability */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-5 border border-gray-100">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-row items-center">
                            <View className="w-9 h-9 bg-purple-100 rounded-xl items-center justify-center mr-2">
                                <Ionicons name="calendar" size={18} color="#6B46C1" />
                            </View>
                            <Text className="text-sm font-bold text-[#1F2937]">Manage Availability</Text>
                        </View>
                    </View>

                    {/* Stats row */}
                    <View className="flex-row gap-3 mb-5">
                        {[
                            { label: 'Available Days', value: Object.values(dayEnabled).filter(Boolean).length, icon: 'calendar-outline', color: '#6B46C1' },
                            { label: 'Weekly Hours', value: '0.0', icon: 'time-outline', color: '#6B46C1' },
                            { label: 'Status', value: 'Inactive', icon: 'radio-button-off', color: '#9CA3AF' },
                        ].map((s, i) => (
                            <View key={i} className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-100 items-center">
                                <Ionicons name={s.icon as any} size={16} color={s.color} />
                                <Text className="text-xs text-gray-400 mt-1 text-center">{s.label}</Text>
                                <Text className="text-base font-bold text-[#1F2937] mt-0.5">{s.value}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Weekly Schedule */}
                    <Text className="text-sm font-bold text-[#1F2937] mb-3 flex-row items-center">
                        Weekly Schedule
                    </Text>
                    {DAYS.map((day) => (
                        <View key={day} className="flex-row items-center justify-between py-3 border-b border-gray-100">
                            <View className="flex-row items-center">
                                <Switch
                                    value={!!dayEnabled[day]}
                                    onValueChange={(v) => setDayEnabled(prev => ({ ...prev, [day]: v }))}
                                    trackColor={{ true: '#6B46C1' }}
                                />
                                <Text className="text-sm text-[#1F2937] ml-3">{day}</Text>
                            </View>
                            {dayEnabled[day] && (
                                <Text className="text-xs text-[#6B46C1] font-medium">Add times +</Text>
                            )}
                        </View>
                    ))}
                </View>

                {/* Tips */}
                <View className="mx-5 mb-4 bg-purple-50 border border-purple-100 rounded-2xl p-4">
                    <View className="flex-row items-center mb-2">
                        <Ionicons name="bulb-outline" size={16} color="#6B46C1" />
                        <Text className="text-xs font-bold text-[#6B46C1] ml-2">Tips for setting availability (IST)</Text>
                    </View>
                    {['Evening slots (6–9 PM) work well for working professionals', 'Weekend mornings (10 AM–1 PM) are popular for students', 'Leave 15–30 minutes buffer between sessions'].map((tip, i) => (
                        <Text key={i} className="text-xs text-purple-700 mb-1">• {tip}</Text>
                    ))}
                </View>

                {/* Quick Action presets */}
                <View className="mx-5 mb-4">
                    <View className="flex-row items-center mb-3">
                        <Ionicons name="add" size={18} color="#6B46C1" />
                        <Text className="text-sm font-bold text-[#1F2937] ml-1">Quick Actions</Text>
                    </View>
                    <View className="flex-row flex-wrap gap-3">
                        {QUICK_PRESETS.map((p, i) => (
                            <TouchableOpacity
                                key={i}
                                className="bg-white border border-dashed border-gray-200 rounded-2xl p-4 items-center"
                                style={{ width: '47%' }}
                            >
                                <View className="w-10 h-10 rounded-xl items-center justify-center mb-2" style={{ backgroundColor: p.bg }}>
                                    <Ionicons name={p.icon as any} size={18} color={p.color} />
                                </View>
                                <Text className="text-xs font-bold text-[#1F2937] text-center">{p.label}</Text>
                                <Text className="text-xs text-gray-400 text-center mt-0.5">{p.sub}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}