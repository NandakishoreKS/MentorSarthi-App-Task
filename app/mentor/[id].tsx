import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
    Image, Modal, ScrollView, Text,
    TextInput,
    TouchableOpacity, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock work/education data keyed by mentor id
const MENTOR_DETAILS: Record<string, {
    workJourney: { role: string; company: string; period: string; desc: string }[];
    education: { degree: string; institution: string; period: string }[];
}> = {
    '1': {
        workJourney: [
            { role: 'Principal Storyteller & CEO', company: 'Prezantim Presentation Strategy', period: '2015–Present', desc: 'Leading a presentation strategy and design agency focused on business storytelling and pitch decks for startups, leaders, and enterprises.' },
            { role: 'Founder', company: 'Prezantim Presentation Strategy', period: '2010–Present', desc: 'Founded and scaled a pure-play presentation strategy firm delivering high-impact business stories across formats.' },
        ],
        education: [
            { degree: 'MBA', institution: 'Symbiosis Institute of Management Studies', period: '2002–2004' },
            { degree: 'BE', institution: 'University of Pune', period: '1995–1999' },
        ],
    },
    '2': {
        workJourney: [
            { role: 'Global CTO', company: 'TechVentures Group', period: '2010–Present', desc: 'Leading technology strategy and digital transformation for a portfolio of enterprise clients across 12 countries.' },
        ],
        education: [
            { degree: 'MS Computer Science', institution: 'IIT Bombay', period: '1985–1987' },
        ],
    },
    '3': {
        workJourney: [
            { role: 'VP Operations', company: 'ScaleOps Consulting', period: '2012–Present', desc: 'Building operational excellence frameworks for mid-size companies scaling from 50 to 500 employees.' },
        ],
        education: [
            { degree: 'MBA Operations', institution: 'IIM Ahmedabad', period: '2007–2009' },
        ],
    },
    '4': {
        workJourney: [
            { role: 'Clinical Psychologist & Coach', company: 'MindBridge Consulting', period: '2008–Present', desc: 'Providing executive coaching and clinical psychology services to C-suite leaders and high-performance teams.' },
        ],
        education: [
            { degree: 'PhD Psychology', institution: 'NIMHANS Bangalore', period: '1995–2000' },
        ],
    },
};

const DURATIONS = ['30 minutes', '1 hour', '1.5 hours', '2 hours'];

export default function MentorDetailsScreen() {
    const params = useLocalSearchParams();
    const { id, name, title, rating, reviews, exp, price, avatar, available, bio } = params;

    // Parse skills from JSON string
    const skills: string[] = params.skills ? JSON.parse(params.skills as string) : [];
    const details = MENTOR_DETAILS[id as string] ?? MENTOR_DETAILS['1'];
    const isAvailable = available === 'true';

    // Booking modal state
    const [showBookModal, setShowBookModal] = useState(false);
    const [bookStep, setBookStep] = useState<1 | 2>(1);
    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');
    const [showDurationPicker, setShowDurationPicker] = useState(false);

    const handleSubmitRequest = () => {
        // In real app: API call here
        setShowBookModal(false);
        setBookStep(1);
        setTopic('');
        setDescription('');
        setSelectedDuration('');
        router.push('/dashboard'); // go to sessions after booking
    };

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>

            {/* Header */}
            <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-100">
                <TouchableOpacity onPress={() => router.back()} className="p-2 bg-gray-50 rounded-full">
                    <Ionicons name="arrow-back" size={22} color="#1F2937" />
                </TouchableOpacity>
                <Text className="text-base font-semibold text-[#1F2937]">Mentor Profile</Text>
                <TouchableOpacity className="p-2 bg-gray-50 rounded-full">
                    <Ionicons name="share-outline" size={22} color="#1F2937" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

                {/* Hero: photo + name + availability */}
                <View className="items-center px-6 pt-6 pb-4">
                    <View className="relative mb-4">
                        <Image
                            source={{ uri: avatar as string }}
                            className="w-28 h-28 rounded-full border-4 border-purple-100"
                        />
                        <View className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-white ${isAvailable ? 'bg-green-400' : 'bg-gray-300'}`} />
                    </View>
                    <Text className="text-2xl font-bold text-[#1F2937]">{name}</Text>
                    <Text className="text-[#6B46C1] font-medium mt-1 text-center">{title}</Text>
                    <View className={`mt-2 px-3 py-1 rounded-full ${isAvailable ? 'bg-green-50' : 'bg-gray-100'}`}>
                        <Text className={`text-xs font-semibold ${isAvailable ? 'text-green-600' : 'text-gray-400'}`}>
                            {isAvailable ? '● Available for sessions' : '● Currently unavailable'}
                        </Text>
                    </View>
                </View>

                {/* Stats row */}
                <View className="flex-row mx-6 bg-gray-50 rounded-2xl p-1 mb-5 border border-gray-100">
                    <View className="flex-1 items-center py-3">
                        <Text className="text-base font-bold text-[#1F2937]">{rating}</Text>
                        <View className="flex-row items-center mt-0.5">
                            <Ionicons name="star" size={11} color="#FBBF24" />
                            <Text className="text-xs text-gray-400 ml-1">({reviews} reviews)</Text>
                        </View>
                    </View>
                    <View className="w-px bg-gray-200" />
                    <View className="flex-1 items-center py-3">
                        <Text className="text-base font-bold text-[#1F2937]">{exp}</Text>
                        <Text className="text-xs text-gray-400 mt-0.5">Experience</Text>
                    </View>
                    <View className="w-px bg-gray-200" />
                    <View className="flex-1 items-center py-3">
                        <Text className="text-base font-bold text-[#1F2937]">{price}</Text>
                        <Text className="text-xs text-gray-400 mt-0.5">Per session</Text>
                    </View>
                </View>

                {/* Bio */}
                <View className="mx-6 mb-5 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <Text className="text-gray-700 leading-relaxed text-sm">{bio}</Text>
                </View>

                {/* Areas of Expertise */}
                <View className="mx-6 mb-6">
                    <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Areas of Expertise</Text>
                    <View className="flex-row flex-wrap">
                        {skills.map((skill, i) => (
                            <View key={i} className="bg-purple-50 border border-purple-100 px-3 py-1.5 rounded-full mr-2 mb-2">
                                <Text className="text-purple-700 text-xs font-semibold">{skill}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Work Journey */}
                <View className="mx-6 mb-6">
                    <Text className="text-lg font-bold text-[#1F2937] mb-4">Work Journey</Text>
                    {details.workJourney.map((job, i) => (
                        <View key={i} className="flex-row mb-4">
                            {/* Timeline dot + line */}
                            <View className="items-center mr-4">
                                <View className="w-3 h-3 rounded-full bg-[#6B46C1] mt-1" />
                                {i < details.workJourney.length - 1 && (
                                    <View className="w-0.5 flex-1 bg-purple-200 mt-1" />
                                )}
                            </View>
                            <View className="flex-1 pb-2">
                                <Text className="text-sm font-bold text-[#1F2937]">{job.role}</Text>
                                <View className="flex-row items-center mt-1 mb-2">
                                    <View className="bg-purple-100 px-2 py-0.5 rounded-full mr-2">
                                        <Text className="text-purple-700 text-xs font-medium">{job.company}</Text>
                                    </View>
                                    <Text className="text-xs text-gray-400">{job.period}</Text>
                                </View>
                                <Text className="text-gray-500 text-xs leading-relaxed">{job.desc}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Education */}
                <View className="mx-6 mb-8">
                    <Text className="text-lg font-bold text-[#1F2937] mb-4">Education</Text>
                    {details.education.map((edu, i) => (
                        <View key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-3 flex-row items-start">
                            <View className="w-10 h-10 bg-purple-100 rounded-full items-center justify-center mr-3">
                                <Ionicons name="school-outline" size={18} color="#6B46C1" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-sm font-bold text-[#1F2937]">{edu.degree}</Text>
                                <Text className="text-purple-600 text-xs font-medium mt-0.5">{edu.institution}</Text>
                                <View className="flex-row items-center mt-1">
                                    <Ionicons name="time-outline" size={11} color="#9CA3AF" />
                                    <Text className="text-xs text-gray-400 ml-1">{edu.period}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Sticky Bottom Bar */}
            <View className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 border-t border-gray-100">
                <View className="flex-row items-center justify-between mb-3">
                    <View>
                        <Text className="text-xs text-gray-400">Session Price</Text>
                        <Text className="text-xl font-bold text-[#1F2937]">{price}</Text>
                    </View>
                    <View className="flex-row gap-3">
                        <TouchableOpacity className="w-11 h-11 bg-gray-50 rounded-full items-center justify-center border border-gray-200">
                            <Ionicons name="chatbubble-outline" size={20} color="#1F2937" />
                        </TouchableOpacity>
                        <TouchableOpacity className="w-11 h-11 bg-gray-50 rounded-full items-center justify-center border border-gray-200">
                            <Ionicons name="share-outline" size={20} color="#1F2937" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    className="bg-[#6B46C1] w-full py-4 rounded-2xl flex-row justify-center items-center"
                    onPress={() => { setShowBookModal(true); setBookStep(1); }}
                >
                    <Ionicons name="book-outline" size={18} color="white" />
                    <Text className="text-white font-bold text-base ml-2">Book Session</Text>
                </TouchableOpacity>
            </View>

            {/* ---- Booking Modal ---- */}
            <Modal visible={showBookModal} animationType="slide" transparent>
                <View className="flex-1 justify-end bg-black/40">
                    <View className="bg-white rounded-t-3xl px-6 pt-6 pb-10">

                        {/* Step 1: Plan selection */}
                        {bookStep === 1 && (
                            <>
                                <View className="flex-row items-center justify-between mb-1">
                                    <Text className="text-xl font-bold text-[#1F2937]">Book Your Mentor</Text>
                                    <TouchableOpacity onPress={() => setShowBookModal(false)}>
                                        <Ionicons name="close" size={24} color="#6B7280" />
                                    </TouchableOpacity>
                                </View>
                                <Text className="text-gray-400 text-sm mb-5">Ready to accelerate your growth?</Text>

                                <View className="flex-row border-b border-gray-200 mb-5">
                                    <Text className="text-[#6B46C1] font-semibold pb-2 border-b-2 border-[#6B46C1] mr-6 text-sm">Sessions</Text>
                                    <Text className="text-gray-400 pb-2 text-sm">Mentorship plans</Text>
                                </View>

                                {/* Session plan card */}
                                <View className="border-2 border-[#6B46C1] rounded-2xl p-4 mb-4">
                                    <View className="flex-row items-center justify-between mb-2">
                                        <View className="flex-row items-center flex-1">
                                            <View className="w-10 h-10 bg-purple-100 rounded-xl items-center justify-center mr-3">
                                                <Ionicons name="book-outline" size={18} color="#6B46C1" />
                                            </View>
                                            <View className="flex-1">
                                                <Text className="text-sm font-bold text-[#1F2937]">1-on-1 Mentorship</Text>
                                                <Text className="text-xs text-gray-500">Personalized guidance to accelerate your career</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View className="bg-gray-50 rounded-xl p-3">
                                        <View className="flex-row items-center justify-between mb-2">
                                            <Text className="text-sm font-semibold text-[#1F2937]">1-on-1 Session</Text>
                                            <Text className="text-[#6B46C1] font-bold">{price}</Text>
                                        </View>
                                        <View className="flex-row items-center mb-3">
                                            <Ionicons name="time-outline" size={13} color="#9CA3AF" />
                                            <Text className="text-xs text-gray-500 ml-1">1 hr</Text>
                                        </View>
                                        <View className="flex-row flex-wrap gap-y-1">
                                            {['Instant booking', 'Flexible scheduling', 'Personalized guidance', 'Expert feedback'].map(f => (
                                                <View key={f} className="flex-row items-center w-1/2">
                                                    <Ionicons name="checkmark" size={12} color="#22C55E" />
                                                    <Text className="text-xs text-green-600 ml-1">{f}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>
                                </View>

                                <TouchableOpacity
                                    className="bg-[#6B46C1] w-full py-4 rounded-2xl flex-row justify-center items-center"
                                    onPress={() => setBookStep(2)}
                                >
                                    <Ionicons name="book-outline" size={18} color="white" />
                                    <Text className="text-white font-bold ml-2">Book Now</Text>
                                </TouchableOpacity>
                                <Text className="text-center text-xs text-gray-400 mt-3">Join 150+ mentees who've transformed their careers</Text>
                            </>
                        )}

                        {/* Step 2: Request form */}
                        {bookStep === 2 && (
                            <>
                                <View className="flex-row items-center justify-between mb-4">
                                    <View className="flex-row items-center">
                                        <TouchableOpacity onPress={() => setBookStep(1)} className="mr-3">
                                            <Ionicons name="arrow-back" size={20} color="#6B7280" />
                                        </TouchableOpacity>
                                        <View>
                                            <Text className="text-lg font-bold text-[#1F2937]">Request Session</Text>
                                            <Text className="text-xs text-[#6B46C1]">Custom scheduling with {name}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity onPress={() => setShowBookModal(false)}>
                                        <Ionicons name="close" size={24} color="#6B7280" />
                                    </TouchableOpacity>
                                </View>

                                {/* Mentor summary */}
                                <View className="flex-row items-center bg-purple-50 rounded-2xl p-3 mb-4">
                                    <View className="w-10 h-10 bg-[#6B46C1] rounded-xl items-center justify-center mr-3">
                                        <Ionicons name="person" size={18} color="white" />
                                    </View>
                                    <View>
                                        <Text className="text-sm font-bold text-[#1F2937]">{name}</Text>
                                        <Text className="text-xs text-[#6B46C1]">Expert Mentor</Text>
                                    </View>
                                    <View className="ml-auto bg-orange-400 px-2 py-0.5 rounded-full flex-row items-center">
                                        <Ionicons name="star" size={10} color="white" />
                                        <Text className="text-white text-xs font-bold ml-1">{rating}</Text>
                                    </View>
                                </View>

                                {/* Session Topic */}
                                <Text className="text-sm font-semibold text-[#1F2937] mb-2">Session Topic *</Text>
                                <TextInput
                                    value={topic}
                                    onChangeText={setTopic}
                                    placeholder="e.g., Career guidance, Technical interview prep"
                                    placeholderTextColor="#9CA3AF"
                                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1F2937] mb-4"
                                />

                                {/* Description */}
                                <Text className="text-sm font-semibold text-[#1F2937] mb-2">Description *</Text>
                                <TextInput
                                    value={description}
                                    onChangeText={setDescription}
                                    placeholder="Tell the mentor what you want to learn or discuss..."
                                    placeholderTextColor="#9CA3AF"
                                    multiline
                                    numberOfLines={3}
                                    textAlignVertical="top"
                                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1F2937] mb-4 h-20"
                                />

                                {/* Duration picker */}
                                <Text className="text-sm font-semibold text-[#1F2937] mb-2">Preferred Duration *</Text>
                                <TouchableOpacity
                                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-4 flex-row items-center justify-between"
                                    onPress={() => setShowDurationPicker(!showDurationPicker)}
                                >
                                    <Text className={`text-sm ${selectedDuration ? 'text-[#1F2937]' : 'text-gray-400'}`}>
                                        {selectedDuration || 'Select duration'}
                                    </Text>
                                    <Ionicons name={showDurationPicker ? 'chevron-up' : 'chevron-down'} size={16} color="#9CA3AF" />
                                </TouchableOpacity>

                                {showDurationPicker && (
                                    <View className="bg-white border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm">
                                        {DURATIONS.map((d) => (
                                            <TouchableOpacity
                                                key={d}
                                                className={`px-4 py-3 border-b border-gray-100 ${selectedDuration === d ? 'bg-purple-50' : ''}`}
                                                onPress={() => { setSelectedDuration(d); setShowDurationPicker(false); }}
                                            >
                                                <Text className={`text-sm ${selectedDuration === d ? 'text-[#6B46C1] font-semibold' : 'text-[#1F2937]'}`}>{d}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                )}

                                {/* How it works */}
                                <View className="bg-purple-50 rounded-xl p-3 mb-5">
                                    <View className="flex-row items-center mb-2">
                                        <View className="w-8 h-8 bg-[#6B46C1] rounded-lg items-center justify-center mr-2">
                                            <Ionicons name="time-outline" size={14} color="white" />
                                        </View>
                                        <Text className="text-sm font-bold text-[#1F2937]">How it works</Text>
                                    </View>
                                    {['Submit request with preferences', 'Mentor proposes times', 'Confirm & complete payment'].map((step, i) => (
                                        <View key={i} className="flex-row items-center mb-1">
                                            <View className="w-1.5 h-1.5 rounded-full bg-[#6B46C1] mr-2" />
                                            <Text className="text-xs text-[#6B46C1]">{step}</Text>
                                        </View>
                                    ))}
                                </View>

                                {/* Action buttons */}
                                <View className="flex-row gap-3">
                                    <TouchableOpacity
                                        className="flex-1 bg-white border border-gray-200 py-4 rounded-2xl items-center"
                                        onPress={() => setShowBookModal(false)}
                                    >
                                        <Text className="text-[#1F2937] font-bold">Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        className={`flex-1 py-4 rounded-2xl items-center flex-row justify-center ${topic && description && selectedDuration ? 'bg-[#6B46C1]' : 'bg-gray-300'}`}
                                        onPress={handleSubmitRequest}
                                        disabled={!topic || !description || !selectedDuration}
                                    >
                                        <Ionicons name="send" size={16} color="white" />
                                        <Text className="text-white font-bold ml-2">Submit Request</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
}