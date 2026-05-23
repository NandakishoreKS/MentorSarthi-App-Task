import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenteeOnboardingHeader from '../../components/MenteeOnboardingHeader';

const INTEREST_GROUPS = [
    {
        category: 'Technology',
        color: '#3B82F6',
        bg: '#EFF6FF',
        icon: 'code-slash-outline',
        items: ['Software Engineering', 'AI / Machine Learning', 'Data Science', 'Mobile Development', 'Cloud & DevOps', 'Cybersecurity'],
    },
    {
        category: 'Business',
        color: '#F97316',
        bg: '#FFF7ED',
        icon: 'briefcase-outline',
        items: ['Entrepreneurship', 'Product Management', 'Marketing', 'Sales', 'Operations', 'Finance'],
    },
    {
        category: 'Design & Creative',
        color: '#EC4899',
        bg: '#FDF2F8',
        icon: 'color-palette-outline',
        items: ['UI/UX Design', 'Graphic Design', 'Brand Strategy', 'Content Creation'],
    },
    {
        category: 'Leadership & Soft Skills',
        color: '#8B5CF6',
        bg: '#F5F3FF',
        icon: 'people-outline',
        items: ['Leadership', 'Communication', 'Public Speaking', 'Negotiation', 'Time Management'],
    },
    {
        category: 'Career & Growth',
        color: '#22C55E',
        bg: '#F0FDF4',
        icon: 'trending-up-outline',
        items: ['Resume Building', 'Interview Prep', 'Salary Negotiation', 'Personal Branding'],
    },
];

export default function MenteeOnboard2() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (item: string) => {
        setSelected(prev =>
            prev.includes(item)
                ? prev.filter(i => i !== item)
                : [...prev, item]
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
            <MenteeOnboardingHeader currentStep={2} />
            <ScrollView
                className="flex-1 px-6"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 24, paddingBottom: 40 }}
            >
                <Text className="text-2xl font-extrabold text-[#1F2937] mb-1">
                    What are you interested in?
                </Text>
                <Text className="text-sm text-gray-500 mb-1">
                    Pick the topics you want to learn or grow in.
                </Text>
                <Text className="text-xs text-[#6B46C1] font-semibold mb-6">
                    {selected.length} selected
                </Text>

                {INTEREST_GROUPS.map((group) => (
                    <View key={group.category} className="mb-6">
                        {/* Category header */}
                        <View className="flex-row items-center mb-3">
                            <View
                                className="w-7 h-7 rounded-lg items-center justify-center mr-2"
                                style={{ backgroundColor: group.bg }}
                            >
                                <Ionicons name={group.icon as any} size={14} color={group.color} />
                            </View>
                            <Text className="text-sm font-bold text-[#1F2937]">{group.category}</Text>
                        </View>

                        {/* Tags */}
                        <View className="flex-row flex-wrap gap-2">
                            {group.items.map((item) => {
                                const isSelected = selected.includes(item);
                                return (
                                    <TouchableOpacity
                                        key={item}
                                        onPress={() => toggle(item)}
                                        className={`px-4 py-2 rounded-full border ${isSelected
                                                ? 'bg-[#6B46C1] border-[#6B46C1]'
                                                : 'bg-white border-gray-200'
                                            }`}
                                    >
                                        <Text className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-gray-600'
                                            }`}>
                                            {isSelected && '✓  '}{item}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                ))}

                {/* Selected summary */}
                {selected.length > 0 && (
                    <View className="bg-purple-50 border border-purple-100 rounded-2xl p-4 mb-5">
                        <Text className="text-xs font-bold text-[#6B46C1] mb-2">
                            Your selected interests ({selected.length})
                        </Text>
                        <View className="flex-row flex-wrap gap-2">
                            {selected.map(item => (
                                <View key={item} className="bg-purple-100 px-3 py-1 rounded-full flex-row items-center">
                                    <Text className="text-xs text-purple-700 font-medium">{item}</Text>
                                    <TouchableOpacity
                                        onPress={() => toggle(item)}
                                        className="ml-1"
                                    >
                                        <Ionicons name="close" size={11} color="#6B46C1" />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </View>
                )}

                <TouchableOpacity
                    className={`py-4 rounded-2xl items-center flex-row justify-center mb-4 ${selected.length > 0 ? 'bg-[#6B46C1]' : 'bg-gray-200'
                        }`}
                    onPress={() => router.push('/(auth)/mentee-onboard-3')}
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
                    onPress={() => router.push('/(auth)/mentee-onboard-3')}
                >
                    <Text className="text-gray-400 text-sm">Skip for now</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}