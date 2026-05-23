import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    KeyboardAvoidingView, Platform,
    ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingHeader from '../../components/OnboardingHeader';

const CATEGORIES = [
    'Technology', 'Business', 'Finance', 'Marketing',
    'Design', 'Leadership', 'Career', 'Psychology',
];

export default function MentorOnboard1() {
    const [bio, setBio] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');
    const [expertise, setExpertise] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState('');

    const addTag = () => {
        const trimmed = tagInput.trim();
        if (trimmed && !expertise.includes(trimmed)) {
            setExpertise([...expertise, trimmed]);
        }
        setTagInput('');
    };

    const removeTag = (tag: string) => {
        setExpertise(expertise.filter(t => t !== tag));
    };

    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
            <OnboardingHeader currentStep={1} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <ScrollView
                    className="flex-1 px-6"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingTop: 24, paddingBottom: 40 }}
                >
                    <Text className="text-2xl font-extrabold text-[#1F2937] mb-1">Profile Info</Text>
                    <Text className="text-sm text-gray-500 mb-6">
                        This is what mentees will see on your profile.
                    </Text>

                    {/* Profile photo */}
                    <View className="items-center mb-6">
                        <TouchableOpacity className="w-24 h-24 bg-purple-100 rounded-2xl items-center justify-center border-2 border-dashed border-purple-300 mb-2">
                            <Ionicons name="camera-outline" size={28} color="#6B46C1" />
                        </TouchableOpacity>
                        <Text className="text-xs text-gray-400">Tap to upload profile photo</Text>
                        <Text className="text-xs text-red-400 mt-0.5">Required</Text>
                    </View>

                    {/* Bio */}
                    <View className="mb-4">
                        <Text className="text-sm font-semibold text-[#1F2937] mb-2">
                            Bio <Text className="text-red-400">*</Text>
                        </Text>
                        <TextInput
                            value={bio}
                            onChangeText={setBio}
                            placeholder="Tell mentees about yourself, your experience, and what you help with... (min 50 characters)"
                            placeholderTextColor="#9CA3AF"
                            multiline
                            numberOfLines={4}
                            textAlignVertical="top"
                            className="bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-[#1F2937] h-28"
                        />
                        <Text className={`text-xs mt-1 text-right ${bio.length >= 50 ? 'text-green-500' : 'text-gray-400'}`}>
                            {bio.length}/50 min
                        </Text>
                    </View>

                    {/* Mentoring Category */}
                    <View className="mb-4">
                        <Text className="text-sm font-semibold text-[#1F2937] mb-2">
                            Mentoring Category <Text className="text-red-400">*</Text>
                        </Text>
                        <View className="flex-row flex-wrap gap-2">
                            {CATEGORIES.map(cat => (
                                <TouchableOpacity
                                    key={cat}
                                    onPress={() => setCategory(cat)}
                                    className={`px-4 py-2 rounded-full border ${category === cat
                                            ? 'bg-[#6B46C1] border-[#6B46C1]'
                                            : 'bg-white border-gray-200'
                                        }`}
                                >
                                    <Text className={`text-xs font-medium ${category === cat ? 'text-white' : 'text-gray-600'
                                        }`}>
                                        {cat}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Areas of Expertise */}
                    <View className="mb-4">
                        <Text className="text-sm font-semibold text-[#1F2937] mb-2">
                            Areas of Expertise <Text className="text-red-400">*</Text>
                        </Text>
                        <View className="flex-row flex-wrap gap-2 mb-2">
                            {expertise.map(tag => (
                                <View key={tag} className="flex-row items-center bg-purple-100 border border-purple-200 px-3 py-1.5 rounded-full">
                                    <Text className="text-xs text-purple-700 font-medium mr-1">{tag}</Text>
                                    <TouchableOpacity onPress={() => removeTag(tag)}>
                                        <Ionicons name="close" size={12} color="#6B46C1" />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                        <View className="flex-row gap-2">
                            <TextInput
                                value={tagInput}
                                onChangeText={setTagInput}
                                onSubmitEditing={addTag}
                                placeholder="e.g. React Native, Leadership..."
                                placeholderTextColor="#9CA3AF"
                                className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1F2937]"
                                returnKeyType="done"
                            />
                            <TouchableOpacity
                                onPress={addTag}
                                className="bg-purple-100 w-12 items-center justify-center rounded-xl"
                            >
                                <Ionicons name="add" size={22} color="#6B46C1" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Phone */}
                    <View className="mb-8">
                        <Text className="text-sm font-semibold text-[#1F2937] mb-2">
                            Phone Number <Text className="text-red-400">*</Text>
                        </Text>
                        <View className="flex-row items-center bg-white border border-gray-200 rounded-2xl px-4">
                            <Text className="text-sm text-gray-500 mr-2">+91</Text>
                            <View className="w-px h-5 bg-gray-200 mr-3" />
                            <TextInput
                                value={phone}
                                onChangeText={setPhone}
                                placeholder="10-digit mobile number"
                                placeholderTextColor="#9CA3AF"
                                keyboardType="phone-pad"
                                maxLength={10}
                                className="flex-1 py-3.5 text-sm text-[#1F2937]"
                            />
                        </View>
                    </View>

                    {/* Continue */}
                    <TouchableOpacity
                        className="bg-[#6B46C1] py-4 rounded-2xl items-center flex-row justify-center"
                        onPress={() => router.push('/(auth)/mentor-onboard-2')}
                    >
                        <Text className="text-white font-bold text-base">Continue</Text>
                        <Ionicons name="arrow-forward" size={18} color="white" style={{ marginLeft: 8 }} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="items-center mt-4"
                        onPress={() => router.push('/(auth)/mentor-onboard-2')}
                    >
                        <Text className="text-gray-400 text-sm">Skip for now</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}