import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    KeyboardAvoidingView, Platform,
    ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenteeOnboardingHeader from '../../components/MenteeOnboardingHeader';

const EXPERIENCE_LEVELS = [
    { label: 'Student', sub: 'Currently studying', icon: 'school-outline' },
    { label: 'Fresher', sub: '0–1 year experience', icon: 'leaf-outline' },
    { label: 'Early Career', sub: '1–3 years experience', icon: 'trending-up-outline' },
    { label: 'Mid Career', sub: '3–7 years experience', icon: 'briefcase-outline' },
    { label: 'Senior', sub: '7+ years experience', icon: 'star-outline' },
];

const SESSION_PREFS = [
    { label: 'Morning', sub: '8 AM – 12 PM', icon: 'sunny-outline' },
    { label: 'Afternoon', sub: '12 PM – 5 PM', icon: 'partly-sunny-outline' },
    { label: 'Evening', sub: '5 PM – 10 PM', icon: 'moon-outline' },
    { label: 'Weekends', sub: 'Sat & Sun only', icon: 'calendar-outline' },
];

export default function MenteeOnboard3() {
    const [currentRole, setCurrentRole] = useState('');
    const [company, setCompany] = useState('');
    const [expLevel, setExpLevel] = useState('');
    const [sessionPref, setSessionPref] = useState<string[]>([]);

    const togglePref = (label: string) => {
        setSessionPref(prev =>
            prev.includes(label)
                ? prev.filter(p => p !== label)
                : [...prev, label]
        );
    };

    const canContinue = currentRole.trim().length > 0 && expLevel !== '';

    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
            <MenteeOnboardingHeader currentStep={3} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <ScrollView
                    className="flex-1 px-6"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingTop: 24, paddingBottom: 40 }}
                >
                    <Text className="text-2xl font-extrabold text-[#1F2937] mb-1">
                        Tell us about yourself
                    </Text>
                    <Text className="text-sm text-gray-500 mb-6">
                        This helps mentors understand your background before your first session.
                    </Text>

                    {/* Profile photo */}
                    <View className="items-center mb-6">
                        <TouchableOpacity className="w-20 h-20 bg-purple-100 rounded-full items-center justify-center border-2 border-dashed border-purple-300 mb-2">
                            <Ionicons name="camera-outline" size={26} color="#6B46C1" />
                        </TouchableOpacity>
                        <Text className="text-xs text-gray-400">Add a profile photo (optional)</Text>
                    </View>

                    {/* Current role */}
                    <View className="mb-4">
                        <Text className="text-sm font-semibold text-[#1F2937] mb-2">
                            Current Role / Title <Text className="text-red-400">*</Text>
                        </Text>
                        <View className="flex-row items-center bg-white border border-gray-200 rounded-2xl px-4">
                            <Ionicons name="person-outline" size={18} color="#9CA3AF" />
                            <TextInput
                                value={currentRole}
                                onChangeText={setCurrentRole}
                                placeholder="e.g. Software Engineer, MBA Student"
                                placeholderTextColor="#9CA3AF"
                                className="flex-1 py-3.5 ml-3 text-sm text-[#1F2937]"
                            />
                        </View>
                    </View>

                    {/* Company / College */}
                    <View className="mb-5">
                        <Text className="text-sm font-semibold text-[#1F2937] mb-2">
                            Company / College
                        </Text>
                        <View className="flex-row items-center bg-white border border-gray-200 rounded-2xl px-4">
                            <Ionicons name="business-outline" size={18} color="#9CA3AF" />
                            <TextInput
                                value={company}
                                onChangeText={setCompany}
                                placeholder="e.g. Google, IIT Bombay, Freelancer"
                                placeholderTextColor="#9CA3AF"
                                className="flex-1 py-3.5 ml-3 text-sm text-[#1F2937]"
                            />
                        </View>
                    </View>

                    {/* Experience level */}
                    <View className="mb-5">
                        <Text className="text-sm font-semibold text-[#1F2937] mb-3">
                            Experience Level <Text className="text-red-400">*</Text>
                        </Text>
                        <View className="gap-2">
                            {EXPERIENCE_LEVELS.map((level) => {
                                const isSelected = expLevel === level.label;
                                return (
                                    <TouchableOpacity
                                        key={level.label}
                                        onPress={() => setExpLevel(level.label)}
                                        className={`flex-row items-center p-3.5 rounded-2xl border-2 ${isSelected
                                                ? 'border-[#6B46C1] bg-purple-50'
                                                : 'border-gray-100 bg-white'
                                            }`}
                                    >
                                        <View className={`w-9 h-9 rounded-xl items-center justify-center mr-3 ${isSelected ? 'bg-purple-100' : 'bg-gray-100'
                                            }`}>
                                            <Ionicons
                                                name={level.icon as any}
                                                size={18}
                                                color={isSelected ? '#6B46C1' : '#9CA3AF'}
                                            />
                                        </View>
                                        <View className="flex-1">
                                            <Text className={`text-sm font-bold ${isSelected ? 'text-[#6B46C1]' : 'text-[#1F2937]'
                                                }`}>
                                                {level.label}
                                            </Text>
                                            <Text className="text-xs text-gray-400">{level.sub}</Text>
                                        </View>
                                        <View className={`w-5 h-5 rounded-full border-2 items-center justify-center ${isSelected
                                                ? 'bg-[#6B46C1] border-[#6B46C1]'
                                                : 'border-gray-200'
                                            }`}>
                                            {isSelected && (
                                                <Ionicons name="checkmark" size={11} color="white" />
                                            )}
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Session time preferences */}
                    <View className="mb-8">
                        <Text className="text-sm font-semibold text-[#1F2937] mb-1">
                            Preferred Session Times
                        </Text>
                        <Text className="text-xs text-gray-400 mb-3">
                            We'll filter mentors who are available when you are
                        </Text>
                        <View className="flex-row flex-wrap gap-2">
                            {SESSION_PREFS.map((pref) => {
                                const isSelected = sessionPref.includes(pref.label);
                                return (
                                    <TouchableOpacity
                                        key={pref.label}
                                        onPress={() => togglePref(pref.label)}
                                        className={`flex-row items-center px-4 py-2.5 rounded-full border ${isSelected
                                                ? 'bg-[#6B46C1] border-[#6B46C1]'
                                                : 'bg-white border-gray-200'
                                            }`}
                                    >
                                        <Ionicons
                                            name={pref.icon as any}
                                            size={14}
                                            color={isSelected ? 'white' : '#9CA3AF'}
                                        />
                                        <View className="ml-2">
                                            <Text className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-[#1F2937]'
                                                }`}>
                                                {pref.label}
                                            </Text>
                                            <Text className={`text-xs ${isSelected ? 'text-purple-200' : 'text-gray-400'
                                                }`}>
                                                {pref.sub}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Final CTA */}
                    <TouchableOpacity
                        className={`py-4 rounded-2xl items-center flex-row justify-center mb-4 shadow-lg ${canContinue ? 'bg-[#6B46C1] shadow-purple-200' : 'bg-gray-200 shadow-transparent'
                            }`}
                        onPress={() => router.replace('/(tabs)')}
                        disabled={!canContinue}
                    >
                        <Ionicons
                            name="rocket-outline"
                            size={18}
                            color={canContinue ? 'white' : '#9CA3AF'}
                        />
                        <Text className={`font-bold text-base ml-2 ${canContinue ? 'text-white' : 'text-gray-400'
                            }`}>
                            Start Finding Mentors
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="items-center"
                        onPress={() => router.replace('/(tabs)')}
                    >
                        <Text className="text-gray-400 text-sm">Skip and explore first</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}