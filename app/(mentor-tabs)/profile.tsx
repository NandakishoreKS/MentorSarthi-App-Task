import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MentorProfileScreen() {
    return (
        <SafeAreaView className="flex-1 bg-[#F8F9FA]" edges={['top']}>

            {/* Header */}
            <View className="px-5 pt-5 pb-4 flex-row items-center justify-between">
                <Text className="text-xl font-bold text-[#1F2937]">Profile</Text>
                <TouchableOpacity className="w-9 h-9 items-center justify-center">
                    <Ionicons name="notifications-outline" size={22} color="#1F2937" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

                {/* Profile Under Review banner */}
                <View className="mx-5 mb-4 bg-blue-50 border border-blue-100 rounded-2xl p-4 flex-row items-start">
                    <View className="w-8 h-8 bg-blue-100 rounded-full items-center justify-center mr-3 mt-0.5">
                        <Ionicons name="information-circle-outline" size={18} color="#3B82F6" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-sm font-bold text-[#1F2937]">Profile Under Review</Text>
                        <Text className="text-xs text-gray-500 mt-1 leading-relaxed">
                            Your mentor profile is currently under review by our team. We'll publish it shortly once approved.
                        </Text>
                        <View className="flex-row items-center mt-2">
                            <Ionicons name="time-outline" size={12} color="#9CA3AF" />
                            <Text className="text-xs text-gray-400 ml-1">We typically review profiles within 24–48 hours</Text>
                        </View>
                    </View>
                </View>

                {/* Complete Your Profile */}
                <View className="mx-5 mb-4 bg-orange-50 border border-orange-100 rounded-2xl p-4">
                    <View className="flex-row items-center mb-2">
                        <Ionicons name="alert-circle-outline" size={18} color="#F97316" />
                        <Text className="text-sm font-bold text-orange-700 ml-2">Complete Your Profile</Text>
                    </View>
                    <Text className="text-xs text-orange-600 mb-3">
                        Your profile is 33% complete. Focus on the essential fields first!
                    </Text>
                    <View className="h-2 bg-orange-100 rounded-full mb-3">
                        <View className="h-2 bg-orange-400 rounded-full" style={{ width: '33%' }} />
                    </View>
                    <TouchableOpacity className="bg-orange-500 py-2.5 rounded-xl items-center flex-row justify-center">
                        <Ionicons name="add" size={16} color="white" />
                        <Text className="text-white text-xs font-bold ml-1">Complete Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Mentor Profile Card */}
                <View className="mx-5 mb-4 bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <View className="bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] px-5 py-4 flex-row items-center justify-between bg-[#6B46C1]">
                        <View className="flex-row items-center">
                            <Ionicons name="checkmark-circle-outline" size={18} color="white" />
                            <Text className="text-white font-bold ml-2">Mentor Profile</Text>
                        </View>
                        <TouchableOpacity className="flex-row items-center bg-white/20 px-3 py-1.5 rounded-xl">
                            <Ionicons name="create-outline" size={14} color="white" />
                            <Text className="text-white text-xs font-semibold ml-1">Edit Profile</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="p-5">
                        {/* Avatar + name */}
                        <View className="flex-row items-start mb-4">
                            <View className="relative mr-4">
                                <View className="w-20 h-20 bg-[#6B46C1] rounded-2xl items-center justify-center">
                                    <Ionicons name="person" size={36} color="white" />
                                </View>
                                <View className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full items-center justify-center border-2 border-white">
                                    <Ionicons name="checkmark" size={10} color="white" />
                                </View>
                            </View>
                            <View className="flex-1">
                                <Text className="text-lg font-bold text-[#1F2937]">Nandakishore</Text>
                                <TouchableOpacity className="flex-row items-center bg-gray-100 px-3 py-1 rounded-full mt-1 self-start">
                                    <Ionicons name="add" size={12} color="#6B7280" />
                                    <Text className="text-xs text-gray-500 ml-1">Add your specialization</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Experience + Rate */}
                        <View className="flex-row gap-3 mb-4">
                            <View className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-100 flex-row items-center">
                                <Ionicons name="briefcase-outline" size={16} color="#6B7280" />
                                <View className="ml-2">
                                    <Text className="text-xs text-gray-400">Experience</Text>
                                    <Text className="text-sm font-bold text-[#1F2937]">0 years</Text>
                                </View>
                            </View>
                            <View className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-100 flex-row items-center">
                                <Ionicons name="time-outline" size={16} color="#6B7280" />
                                <View className="ml-2">
                                    <Text className="text-xs text-gray-400">Rate</Text>
                                    <Text className="text-sm font-bold text-[#1F2937]">Free</Text>
                                </View>
                            </View>
                        </View>

                        {/* Expertise placeholder */}
                        <TouchableOpacity className="border border-dashed border-gray-300 rounded-xl p-4 items-center mb-3">
                            <Ionicons name="add" size={20} color="#9CA3AF" />
                            <Text className="text-xs text-gray-400 mt-1">Add your areas of expertise</Text>
                        </TouchableOpacity>

                        {/* Bio placeholder */}
                        <TouchableOpacity className="border border-dashed border-gray-300 rounded-xl p-4 items-center">
                            <Ionicons name="person-outline" size={20} color="#9CA3AF" />
                            <Text className="text-xs text-gray-400 mt-1">Add a bio to tell mentees about yourself</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Contact Information */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-5 border border-gray-100">
                    <View className="flex-row items-center mb-4">
                        <Ionicons name="mail-outline" size={18} color="#6B46C1" />
                        <Text className="text-sm font-bold text-[#1F2937] ml-2">Contact Information</Text>
                    </View>
                    <View className="flex-row gap-3 mb-3">
                        <View className="flex-1 bg-blue-50 border border-blue-100 rounded-xl p-3 flex-row items-center">
                            <View className="w-8 h-8 bg-blue-100 rounded-lg items-center justify-center mr-2">
                                <Ionicons name="mail" size={16} color="#3B82F6" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-xs text-blue-500 font-semibold">Email Address</Text>
                                <Text className="text-xs text-[#1F2937] font-medium" numberOfLines={1}>nandakishoreks21@gmail.com</Text>
                            </View>
                        </View>
                        <TouchableOpacity className="flex-1 bg-gray-50 border border-dashed border-gray-300 rounded-xl p-3 flex-row items-center">
                            <View className="w-8 h-8 bg-gray-100 rounded-lg items-center justify-center mr-2">
                                <Ionicons name="call-outline" size={16} color="#9CA3AF" />
                            </View>
                            <View>
                                <Text className="text-xs text-gray-400">Phone Number</Text>
                                <Text className="text-xs text-gray-400">Add your phone number</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Social profiles */}
                    <TouchableOpacity className="border border-dashed border-gray-300 rounded-xl p-4 items-center">
                        <Ionicons name="globe-outline" size={22} color="#9CA3AF" />
                        <Text className="text-sm font-semibold text-[#1F2937] mt-2">Add Social Profiles</Text>
                        <Text className="text-xs text-gray-400 mt-0.5 text-center">Connect your social media profiles to build trust with mentees</Text>
                        <TouchableOpacity className="bg-[#6B46C1] px-4 py-2 rounded-xl mt-3 flex-row items-center">
                            <Ionicons name="add" size={14} color="white" />
                            <Text className="text-white text-xs font-bold ml-1">Add Social Links</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>

                {/* Education */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-5 border border-gray-100">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-row items-center">
                            <Ionicons name="school-outline" size={18} color="#6B46C1" />
                            <Text className="text-sm font-bold text-[#1F2937] ml-2">Education</Text>
                        </View>
                        <TouchableOpacity>
                            <Text className="text-xs text-[#6B46C1] font-semibold">Add Education</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity className="border border-dashed border-gray-300 rounded-xl p-6 items-center">
                        <Ionicons name="school-outline" size={28} color="#D1D5DB" />
                        <Text className="text-sm font-semibold text-[#1F2937] mt-2">Add Your Education</Text>
                        <Text className="text-xs text-gray-400 mt-0.5 text-center">Share your academic background to build credibility</Text>
                        <TouchableOpacity className="bg-[#6B46C1] px-4 py-2 rounded-xl mt-3 flex-row items-center">
                            <Ionicons name="add" size={14} color="white" />
                            <Text className="text-white text-xs font-bold ml-1">Add Education</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>

                {/* Work Experience */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-5 border border-gray-100">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-row items-center">
                            <Ionicons name="briefcase-outline" size={18} color="#6B46C1" />
                            <Text className="text-sm font-bold text-[#1F2937] ml-2">Work Experience</Text>
                        </View>
                        <TouchableOpacity>
                            <Text className="text-xs text-[#6B46C1] font-semibold">Add Experience</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity className="border border-dashed border-gray-300 rounded-xl p-6 items-center">
                        <Ionicons name="briefcase-outline" size={28} color="#D1D5DB" />
                        <Text className="text-sm font-semibold text-[#1F2937] mt-2">Add Your Work Experience</Text>
                        <Text className="text-xs text-gray-400 mt-0.5 text-center">Showcase your professional journey to help mentees</Text>
                        <TouchableOpacity className="bg-[#6B46C1] px-4 py-2 rounded-xl mt-3 flex-row items-center">
                            <Ionicons name="add" size={14} color="white" />
                            <Text className="text-white text-xs font-bold ml-1">Add Work Experience</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>

                {/* Services Offered */}
                <View className="mx-5 mb-4 bg-white rounded-2xl p-5 border border-gray-100">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-row items-center">
                            <Ionicons name="time-outline" size={18} color="#6B46C1" />
                            <Text className="text-sm font-bold text-[#1F2937] ml-2">Services Offered</Text>
                        </View>
                        <TouchableOpacity onPress={() => router.push('/(mentor-tabs)/services')}>
                            <Text className="text-xs text-[#6B46C1] font-semibold">Add Services</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => router.push('/(mentor-tabs)/services')}
                        className="border border-dashed border-gray-300 rounded-xl p-6 items-center"
                    >
                        <Ionicons name="time-outline" size={28} color="#D1D5DB" />
                        <Text className="text-sm font-semibold text-[#1F2937] mt-2">Add Your Services</Text>
                        <Text className="text-xs text-gray-400 mt-0.5 text-center">Define the mentoring services you offer</Text>
                        <View className="bg-[#6B46C1] px-4 py-2 rounded-xl mt-3 flex-row items-center">
                            <Ionicons name="add" size={14} color="white" />
                            <Text className="text-white text-xs font-bold ml-1">Add Services</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}