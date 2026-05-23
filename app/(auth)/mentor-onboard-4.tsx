import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingHeader from '../../components/OnboardingHeader';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const PRESETS = [
    { label: 'Evening Weekdays', sub: 'Mon–Fri, 6–9 PM', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    { label: 'Weekend Mornings', sub: 'Sat–Sun, 10 AM–1 PM', days: ['Saturday', 'Sunday'] },
    { label: 'Morning + Evening', sub: '8–10 AM & 6–9 PM', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
];

export default function MentorOnboard4() {
    const [mode, setMode] = useState<'timeslots' | 'requests'>('timeslots');
    const [dayEnabled, setDayEnabled] = useState<Record<string, boolean>>({});

    const applyPreset = (days: string[]) => {
        const updated: Record<string, boolean> = {};
        days.forEach(d => { updated[d] = true; });
        setDayEnabled(updated);
    };

    const activeDays = Object.values(dayEnabled).filter(Boolean).length;

    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
            <OnboardingHeader currentStep={4} />
            <ScrollView
                className="flex-1 px-6"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 24, paddingBottom: 40 }}
            >
                <Text className="text-2xl font-extrabold text-[#1F2937] mb-1">Set Availability</Text>
                <Text className="text-sm text-gray-500 mb-6">
                    Choose when mentees can book sessions with you.
                </Text>

                {/* Booking mode */}
                <View className="mb-5">
                    <Text className="text-sm font-bold text-[#1F2937] mb-3">How would you like to accept sessions?</Text>
                    <View className="flex-row gap-3">
                        <TouchableOpacity
                            onPress={() => setMode('timeslots')}
                            className={`flex-1 rounded-2xl p-4 border-2 ${mode === 'timeslots' ? 'border-[#6B46C1] bg-purple-50' : 'border-gray-200 bg-white'}`}
                        >
                            <View className="w-8 h-8 bg-purple-100 rounded-lg items-center justify-center mb-2">
                                <Ionicons name="time-outline" size={16} color="#6B46C1" />
                            </View>
                            <Text className="text-xs font-bold text-[#1F2937] mb-1">Time Slots</Text>
                            <Text className="text-xs text-gray-500">Mentees pick from your available slots and book instantly.</Text>
                            {mode === 'timeslots' && (
                                <View className="mt-2 flex-row items-center">
                                    <Ionicons name="checkmark-circle" size={14} color="#6B46C1" />
                                    <Text className="text-xs text-[#6B46C1] font-semibold ml-1">Selected</Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setMode('requests')}
                            className={`flex-1 rounded-2xl p-4 border-2 ${mode === 'requests' ? 'border-[#6B46C1] bg-purple-50' : 'border-gray-200 bg-white'}`}
                        >
                            <View className="w-8 h-8 bg-gray-100 rounded-lg items-center justify-center mb-2">
                                <Ionicons name="chatbubble-outline" size={16} color="#9CA3AF" />
                            </View>
                            <Text className="text-xs font-bold text-[#1F2937] mb-1">Session Requests</Text>
                            <Text className="text-xs text-gray-500">Mentees send requests. You review and approve each one.</Text>
                            {mode === 'requests' && (
                                <View className="mt-2 flex-row items-center">
                                    <Ionicons name="checkmark-circle" size={14} color="#6B46C1" />
                                    <Text className="text-xs text-[#6B46C1] font-semibold ml-1">Selected</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Quick presets */}
                <View className="mb-5">
                    <Text className="text-sm font-bold text-[#1F2937] mb-3">Quick presets</Text>
                    <View className="flex-row gap-2">
                        {PRESETS.map((p, i) => (
                            <TouchableOpacity
                                key={i}
                                onPress={() => applyPreset(p.days)}
                                className="flex-1 bg-white border border-gray-200 rounded-xl p-3 items-center"
                            >
                                <Text className="text-xs font-bold text-[#1F2937] text-center">{p.label}</Text>
                                <Text className="text-xs text-gray-400 text-center mt-0.5">{p.sub}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Weekly schedule */}
                <View className="bg-white border border-gray-100 rounded-2xl p-5 mb-5">
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-sm font-bold text-[#1F2937]">Weekly Schedule</Text>
                        <View className="bg-purple-100 px-2 py-1 rounded-full">
                            <Text className="text-xs text-[#6B46C1] font-semibold">{activeDays} days selected</Text>
                        </View>
                    </View>
                    {DAYS.map((day, i) => (
                        <View
                            key={day}
                            className={`flex-row items-center justify-between py-3 ${i < DAYS.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >
                            <View className="flex-row items-center">
                                <Switch
                                    value={!!dayEnabled[day]}
                                    onValueChange={v => setDayEnabled(prev => ({ ...prev, [day]: v }))}
                                    trackColor={{ true: '#6B46C1', false: '#E5E7EB' }}
                                    thumbColor="white"
                                />
                                <Text className="text-sm text-[#1F2937] ml-3 font-medium">{day}</Text>
                            </View>
                            {dayEnabled[day] && (
                                <Text className="text-xs text-[#6B46C1] font-medium">Set times in dashboard</Text>
                            )}
                        </View>
                    ))}
                </View>

                <TouchableOpacity
                    className="bg-[#6B46C1] py-4 rounded-2xl items-center flex-row justify-center mb-4"
                    onPress={() => router.push('/(auth)/mentor-onboard-5')}
                >
                    <Text className="text-white font-bold text-base">Continue</Text>
                    <Ionicons name="arrow-forward" size={18} color="white" style={{ marginLeft: 8 }} />
                </TouchableOpacity>

                <TouchableOpacity
                    className="items-center"
                    onPress={() => router.push('/(auth)/mentor-onboard-5')}
                >
                    <Text className="text-gray-400 text-sm">Skip for now</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}