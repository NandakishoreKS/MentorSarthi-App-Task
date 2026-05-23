import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingHeader from '../../components/OnboardingHeader';

const CHECKLIST = [
    { label: 'Profile Info', sub: 'Basic details, bio & links', done: false, icon: 'person-outline' },
    { label: 'Services', sub: 'Add at least one custom service', done: true, icon: 'briefcase-outline' },
    { label: 'Payment', sub: 'Add UPI or bank account', done: false, icon: 'wallet-outline' },
    { label: 'Availability', sub: 'Set your weekly schedule', done: false, icon: 'calendar-outline' },
];

export default function MentorOnboard5() {
    const completedCount = CHECKLIST.filter(c => c.done).length;

    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
            <OnboardingHeader currentStep={5} />
            <ScrollView
                className="flex-1 px-6"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 24, paddingBottom: 40 }}
            >
                {/* Hero */}
                <View className="items-center mb-8">
                    <View className="w-20 h-20 bg-purple-100 rounded-full items-center justify-center mb-4">
                        <Ionicons name="rocket-outline" size={36} color="#6B46C1" />
                    </View>
                    <Text className="text-2xl font-extrabold text-[#1F2937] text-center mb-2">
                        You're almost live!
                    </Text>
                    <Text className="text-sm text-gray-500 text-center leading-relaxed">
                        Submit your profile for review. Our team typically reviews within 24–48 hours. You can still edit your profile while it's under review.
                    </Text>
                </View>

                {/* Review notice */}
                <View className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-5 flex-row items-start">
                    <View className="w-8 h-8 bg-blue-100 rounded-full items-center justify-center mr-3">
                        <Ionicons name="information-circle-outline" size={18} color="#3B82F6" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-sm font-bold text-[#1F2937]">Profile Under Review</Text>
                        <Text className="text-xs text-gray-500 mt-1 leading-relaxed">
                            Once approved, your profile will be visible to mentees on the platform and you'll start receiving session requests.
                        </Text>
                    </View>
                </View>

                {/* Completion summary */}
                <View className="bg-white border border-gray-100 rounded-2xl p-5 mb-5">
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-sm font-bold text-[#1F2937]">Setup summary</Text>
                        <Text className="text-xs text-gray-400">{completedCount} of {CHECKLIST.length} completed</Text>
                    </View>

                    {/* Progress bar */}
                    <View className="h-2 bg-gray-100 rounded-full mb-4">
                        <View
                            className="h-2 bg-[#6B46C1] rounded-full"
                            style={{ width: `${(completedCount / CHECKLIST.length) * 100}%` }}
                        />
                    </View>

                    {CHECKLIST.map((item, i) => (
                        <View
                            key={i}
                            className={`flex-row items-center py-3 ${i < CHECKLIST.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >
                            <View className={`w-9 h-9 rounded-xl items-center justify-center mr-3 ${item.done ? 'bg-green-100' : 'bg-gray-100'}`}>
                                <Ionicons
                                    name={item.done ? 'checkmark-circle' : item.icon as any}
                                    size={18}
                                    color={item.done ? '#22C55E' : '#9CA3AF'}
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="text-sm font-medium text-[#1F2937]">{item.label}</Text>
                                <Text className="text-xs text-gray-400 mt-0.5">{item.sub}</Text>
                            </View>
                            {item.done ? (
                                <View className="bg-green-50 px-2 py-1 rounded-full">
                                    <Text className="text-xs text-green-600 font-semibold">Done</Text>
                                </View>
                            ) : (
                                <View className="bg-orange-50 px-2 py-1 rounded-full">
                                    <Text className="text-xs text-orange-500 font-semibold">Pending</Text>
                                </View>
                            )}
                        </View>
                    ))}
                </View>

                {/* What happens next */}
                <View className="bg-purple-50 border border-purple-100 rounded-2xl p-4 mb-6">
                    <Text className="text-sm font-bold text-[#1F2937] mb-3">What happens next?</Text>
                    {[
                        { icon: 'send-outline', text: 'We review your profile within 24–48 hours' },
                        { icon: 'notifications-outline', text: "You'll get notified once you're approved" },
                        { icon: 'people-outline', text: 'Mentees can start booking sessions with you' },
                        { icon: 'wallet-outline', text: 'Earnings are transferred after each session' },
                    ].map((step, i) => (
                        <View key={i} className="flex-row items-start mb-2 last:mb-0">
                            <View className="w-7 h-7 bg-purple-100 rounded-full items-center justify-center mr-3 mt-0.5">
                                <Ionicons name={step.icon as any} size={13} color="#6B46C1" />
                            </View>
                            <Text className="text-xs text-purple-700 flex-1 leading-relaxed">{step.text}</Text>
                        </View>
                    ))}
                </View>

                {/* Submit button */}
                <TouchableOpacity
                    className="bg-[#6B46C1] py-4 rounded-2xl items-center flex-row justify-center mb-4 shadow-lg shadow-purple-200"
                    onPress={() => router.replace('/(mentor-tabs)')}
                >
                    <Ionicons name="rocket-outline" size={18} color="white" />
                    <Text className="text-white font-bold text-base ml-2">Submit for Review & Go Live</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="items-center"
                    onPress={() => router.replace('/(mentor-tabs)')}
                >
                    <Text className="text-gray-400 text-sm">Go to dashboard first</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}