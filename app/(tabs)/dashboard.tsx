import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// --- Mock Data ---
const MENTEE_UPCOMING = { mentor: "Pradeep Yuvaraj", title: "Business Storytelling", date: "Tomorrow, 10:00 AM", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=pradeep" };
const MENTEE_PAST = [{ id: 1, mentor: "Vivek Pawar", title: "Leadership Scaling", date: "12 Apr 2026", avatar: "https://i.pravatar.cc/150?u=vivek" }];
const MENTOR_REQUESTS = [{ id: 1, mentee: "Rahul S.", topic: "Pitch Deck Review", time: "Wed, 2:00 PM", avatar: "https://i.pravatar.cc/150?u=rahul" }];

export default function DashboardScreen() {
    const [activeTab, setActiveTab] = useState<'Mentee' | 'Mentor'>('Mentee');

    return (
        <SafeAreaView className="flex-1 bg-[#F9F5FF]">

            {/* --- Header --- */}
            <View className="px-6 pt-4 pb-6 bg-white shadow-sm shadow-gray-200 z-10 rounded-b-3xl">
                <Text className="text-2xl font-bold text-[#1F2937] mb-5">My Dashboard</Text>

                {/* --- BULLETPROOF SEGMENTED CONTROL --- */}
                <View className="flex-row bg-gray-100 p-1 rounded-xl">
                    <TouchableOpacity
                        onPress={() => setActiveTab('Mentee')}
                        className="flex-1 py-2.5 items-center rounded-lg"
                        style={activeTab === 'Mentee' ? { backgroundColor: '#ffffff', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2 } : {}}
                    >
                        <Text className="font-bold" style={{ color: activeTab === 'Mentee' ? '#6B46C1' : '#6B7280' }}>
                            Mentee View
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setActiveTab('Mentor')}
                        className="flex-1 py-2.5 items-center rounded-lg"
                        style={activeTab === 'Mentor' ? { backgroundColor: '#ffffff', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2 } : {}}
                    >
                        <Text className="font-bold" style={{ color: activeTab === 'Mentor' ? '#6B46C1' : '#6B7280' }}>
                            Mentor View
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* --- Main Content Area --- */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>

                {/* ========================================== */}
                {/* MENTEE VIEW                  */}
                {/* ========================================== */}
                {activeTab === 'Mentee' && (
                    <View>
                        <Text className="text-lg font-bold text-[#1F2937] mb-4">Upcoming Session</Text>
                        <View className="bg-[#1e1b4b] rounded-3xl p-5 mb-8 shadow-md shadow-indigo-200">
                            <View className="flex-row justify-between items-start mb-4">
                                <View className="bg-[#6B46C1] px-3 py-1 rounded-full border border-purple-400">
                                    <Text className="text-white text-xs font-bold">{MENTEE_UPCOMING.status}</Text>
                                </View>
                                <TouchableOpacity className="bg-white/20 p-2 rounded-full">
                                    <Ionicons name="ellipsis-horizontal" size={16} color="white" />
                                </TouchableOpacity>
                            </View>

                            <View className="flex-row items-center mb-4">
                                <Image source={{ uri: MENTEE_UPCOMING.avatar }} className="w-14 h-14 rounded-xl mr-4 border border-white/20" />
                                <View>
                                    <Text className="text-white font-bold text-lg">{MENTEE_UPCOMING.mentor}</Text>
                                    <Text className="text-indigo-200 text-sm mt-1">{MENTEE_UPCOMING.title}</Text>
                                </View>
                            </View>

                            <View className="flex-row items-center mb-2">
                                <Ionicons name="calendar" size={16} color="#FBBF24" />
                                <Text className="text-white ml-2 font-medium">{MENTEE_UPCOMING.date}</Text>
                            </View>

                            {/* NEW: Action Buttons Row with Reschedule */}
                            <View className="flex-row justify-between items-center mt-4 border-t border-white/10 pt-4">
                                <TouchableOpacity className="bg-white/10 px-4 py-2.5 rounded-xl border border-white/20">
                                    <Text className="text-white font-medium text-sm">Reschedule</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className="bg-[#FBBF24] px-5 py-2.5 rounded-xl flex-row items-center shadow-sm shadow-yellow-900/20">
                                    <Ionicons name="videocam" size={16} color="#1F2937" className="mr-2" />
                                    <Text className="text-[#1F2937] font-bold text-sm">Join Call</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text className="text-lg font-bold text-[#1F2937] mb-4">Past Sessions</Text>
                        {MENTEE_PAST.map((session) => (
                            <View key={session.id} className="bg-white rounded-2xl p-4 mb-3 flex-row items-center border border-gray-100 shadow-sm shadow-gray-100">
                                <Image source={{ uri: session.avatar }} className="w-12 h-12 rounded-full mr-4 bg-gray-50" />
                                <View className="flex-1">
                                    <Text className="font-bold text-[#1F2937] text-base">{session.mentor}</Text>
                                    <Text className="text-gray-500 text-xs mt-1">{session.date} • {session.title}</Text>
                                </View>
                                <TouchableOpacity className="bg-purple-50 px-3 py-2 rounded-lg">
                                    <Text className="text-[#6B46C1] font-bold text-xs">Book Again</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                )}

                {/* ========================================== */}
                {/* MENTOR VIEW                  */}
                {/* ========================================== */}
                {activeTab === 'Mentor' && (
                    <View>
                        <Text className="text-lg font-bold text-[#1F2937] mb-4">Pending Requests</Text>
                        {MENTOR_REQUESTS.map((req) => (
                            <View key={req.id} className="bg-white rounded-3xl p-5 mb-5 border border-gray-100 shadow-sm shadow-gray-200">
                                <View className="flex-row items-center mb-4">
                                    <Image source={{ uri: req.avatar }} className="w-12 h-12 rounded-full mr-4 bg-gray-50" />
                                    <View className="flex-1">
                                        <Text className="font-bold text-[#1F2937] text-lg">{req.mentee}</Text>
                                        <Text className="text-[#6B46C1] text-sm font-medium mt-1">{req.topic}</Text>
                                    </View>
                                    <View className="bg-yellow-50 px-2 py-1 rounded-md">
                                        <Text className="text-yellow-700 text-xs font-bold">New</Text>
                                    </View>
                                </View>

                                <View className="flex-row items-center mb-5 bg-gray-50 p-3 rounded-xl">
                                    <Ionicons name="time-outline" size={18} color="#6B7280" />
                                    <Text className="text-[#1F2937] font-medium ml-2">Requested Time: {req.time}</Text>
                                </View>

                                <View className="flex-row justify-between space-x-3">
                                    <TouchableOpacity className="flex-1 py-3 items-center rounded-xl border border-gray-200 bg-white">
                                        <Text className="text-gray-600 font-bold">Decline</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="flex-1 py-3 items-center rounded-xl bg-[#6B46C1] shadow-md shadow-purple-200">
                                        <Text className="text-white font-bold">Accept Request</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}

                        <TouchableOpacity className="mt-4 border border-dashed border-gray-300 rounded-2xl py-6 items-center bg-gray-50">
                            <Ionicons name="calendar-outline" size={24} color="#9CA3AF" />
                            <Text className="text-gray-500 font-medium mt-2">Manage Availability Calendar</Text>
                        </TouchableOpacity>
                    </View>
                )}

            </ScrollView>
        </SafeAreaView>
    );
}