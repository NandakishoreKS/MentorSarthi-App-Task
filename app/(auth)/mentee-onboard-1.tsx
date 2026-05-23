import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenteeOnboardingHeader from '../../components/MenteeOnboardingHeader';

const GOALS = [
    {
        icon: 'briefcase-outline',
        title: 'Career Transition',
        sub: 'Switch to a new industry or role',
        color: '#3B82F6',
        bg: '#EFF6FF',
    },
    {
        icon: 'trending-up-outline',
        title: 'Career Growth',
        sub: 'Get promoted or increase my salary',
        color: '#22C55E',
        bg: '#F0FDF4',
    },
    {
        icon: 'code-slash-outline',
        title: 'Learn New Skills',
        sub: 'Master a technical or business skill',
        color: '#6B46C1',
        bg: '#F5F3FF',
    },
    {
        icon: 'people-outline',
        title: 'Build a Network',
        sub: 'Connect with industry professionals',
        color: '#F97316',
        bg: '#FFF7ED',
    },
    {
        icon: 'rocket-outline',
        title: 'Start a Business',
        sub: 'Launch or grow my own venture',
        color: '#EF4444',
        bg: '#FEF2F2',
    },
    {
        icon: 'school-outline',
        title: 'Exam / Interview Prep',
        sub: 'Crack an exam, interview or placement',
        color: '#8B5CF6',
        bg: '#F5F3FF',
    },
    {
        icon: 'heart-outline',
        title: 'Personal Development',
        sub: 'Build confidence, habits and mindset',
        color: '#EC4899',
        bg: '#FDF2F8',
    },
    {
        icon: 'help-circle-outline',
        title: 'Not Sure Yet',
        sub: 'Just exploring what mentorship offers',
        color: '#6B7280',
        bg: '#F9FAFB',
    },
];

export default function MenteeOnboard1() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (title: string) => {
        setSelected(prev =>
            prev.includes(title)
                ? prev.filter(g => g !== title)
                : [...prev, title]
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
            <MenteeOnboardingHeader currentStep={1} />
            <ScrollView
                className="flex-1 px-6"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 24, paddingBottom: 40 }}
            >
                <Text className="text-2xl font-extrabold text-[#1F2937] mb-1">
                    What's your main goal?
                </Text>
                <Text className="text-sm text-gray-500 mb-6">
                    Select all that apply. We'll use this to recommend the right mentors for you.
                </Text>

                <View className="gap-3 mb-8">
                    {GOALS.map((goal) => {
                        const isSelected = selected.includes(goal.title);
                        return (
                            <TouchableOpacity
                                key={goal.title}
                                onPress={() => toggle(goal.title)}
                                className={`flex-row items-center p-4 rounded-2xl border-2 ${isSelected
                                        ? 'border-[#6B46C1] bg-purple-50'
                                        : 'border-gray-100 bg-white'
                                    }`}
                            >
                                {/* Icon */}
                                <View
                                    className="w-11 h-11 rounded-xl items-center justify-center mr-4"
                                    style={{ backgroundColor: isSelected ? '#EDE9FE' : goal.bg }}
                                >
                                    <Ionicons
                                        name={goal.icon as any}
                                        size={20}
                                        color={isSelected ? '#6B46C1' : goal.color}
                                    />
                                </View>

                                {/* Text */}
                                <View className="flex-1">
                                    <Text className={`text-sm font-bold mb-0.5 ${isSelected ? 'text-[#6B46C1]' : 'text-[#1F2937]'
                                        }`}>
                                        {goal.title}
                                    </Text>
                                    <Text className="text-xs text-gray-400">{goal.sub}</Text>
                                </View>

                                {/* Check */}
                                <View className={`w-6 h-6 rounded-full border-2 items-center justify-center ${isSelected
                                        ? 'bg-[#6B46C1] border-[#6B46C1]'
                                        : 'border-gray-200 bg-white'
                                    }`}>
                                    {isSelected && (
                                        <Ionicons name="checkmark" size={13} color="white" />
                                    )}
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <TouchableOpacity
                    className={`py-4 rounded-2xl items-center flex-row justify-center mb-4 ${selected.length > 0 ? 'bg-[#6B46C1]' : 'bg-gray-200'
                        }`}
                    onPress={() => router.push('/(auth)/mentee-onboard-2')}
                    disabled={selected.length === 0}
                >
                    <Text className={`font-bold text-base ${selected.length > 0 ? 'text-white' : 'text-gray-400'
                        }`}>
                        Continue
                    </Text>
                    {selected.length > 0 && (
                        <Ionicons name="arrow-forward" size={18} color="white" style={{ marginLeft: 8 }} />
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    className="items-center"
                    onPress={() => router.push('/(auth)/mentee-onboard-2')}
                >
                    <Text className="text-gray-400 text-sm">Skip for now</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}