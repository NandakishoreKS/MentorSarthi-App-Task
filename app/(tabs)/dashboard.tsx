import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePushNotifications } from '../../hooks/usePushNotifications';

const UPCOMING_SESSIONS = [
    { id: 1, mentorName: "Vivek Pawar", mentorTitle: "Leadership & Tech", date: "Tomorrow, 20 Apr", time: "11:30 AM", avatar: "https://i.pravatar.cc/150?u=vivek" }
];

const PAST_SESSIONS = [
    { id: 2, mentorName: "Pradeep Yuvaraj", mentorTitle: "Business Storytelling & Pitch", date: "12 Apr 2026", time: "02:00 PM", avatar: "https://i.pravatar.cc/150?u=pradeep", reviewed: false }
];

export default function DashboardScreen() {
    const { expoPushToken } = usePushNotifications();
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

    // --- ANIMATION ENGINE ---
    const toastY = useSharedValue(-150);
    const toastX = useSharedValue(0);
    const toastScale = useSharedValue(1);
    const toastOpacity = useSharedValue(0);

    useEffect(() => {
        setTimeout(() => {
            toastY.value = withSpring(20, { damping: 12, stiffness: 90 });
            toastOpacity.value = withTiming(1, { duration: 300 });
        }, 1000);

        setTimeout(() => {
            // Tuned coordinates to suck into the bell icon
            toastY.value = withTiming(-80, { duration: 600 });
            toastX.value = withTiming(160, { duration: 600 });
            toastScale.value = withTiming(0.02, { duration: 600 });
            toastOpacity.value = withTiming(0, { duration: 500 });
        }, 4000);

        setTimeout(() => {
            toastY.value = -150;
            toastX.value = 0;
            toastScale.value = 1;
        }, 5000);
    }, []);

    const animatedToastStyle = useAnimatedStyle(() => ({
        transform: [
            { translateY: toastY.value },
            { translateX: toastX.value },
            { scale: toastScale.value }
        ],
        opacity: toastOpacity.value,
        position: 'absolute',
        top: 50,
        left: 24,
        right: 24,
        zIndex: 100,
    }));

    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>

            <Animated.View style={animatedToastStyle} className="bg-[#1F2937] p-4 rounded-3xl shadow-2xl flex-row items-center border border-gray-700">
                <View className="w-12 h-12 bg-[#6B46C1] rounded-full items-center justify-center mr-4">
                    <Ionicons name="checkmark-done" size={24} color="white" />
                </View>
                <View className="flex-1">
                    <Text className="text-white font-bold text-base">Booking Confirmed!</Text>
                    <Text className="text-gray-300 text-xs mt-0.5">Vivek Pawar accepted your session.</Text>
                </View>
            </Animated.View>

            <View className="px-6 pt-6 pb-4 bg-[#FAFAFA] z-10 flex-row justify-between items-end">
                <Text className="text-3xl font-extrabold text-[#1F2937] tracking-tight">Your Sessions</Text>

                <TouchableOpacity className="bg-white p-3 rounded-full shadow-sm shadow-gray-200/50 relative border border-gray-100">
                    <Ionicons name="notifications-outline" size={22} color="#1F2937" />
                    <View className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
                </TouchableOpacity>
            </View>

            <View className="px-6 mb-6">
                <View className="flex-row bg-[#F3F4F6] p-1 rounded-2xl">
                    <TouchableOpacity onPress={() => setActiveTab('upcoming')} className={`flex-1 py-3 rounded-xl items-center ${activeTab === 'upcoming' ? 'bg-white shadow-sm shadow-gray-200' : 'bg-transparent'}`}>
                        <Text className={`font-bold ${activeTab === 'upcoming' ? 'text-[#1F2937]' : 'text-gray-500'}`}>Upcoming</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveTab('past')} className={`flex-1 py-3 rounded-xl items-center ${activeTab === 'past' ? 'bg-white shadow-sm shadow-gray-200' : 'bg-transparent'}`}>
                        <Text className={`font-bold ${activeTab === 'past' ? 'text-[#1F2937]' : 'text-gray-500'}`}>Past</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

                {activeTab === 'upcoming' && (
                    <View>
                        {UPCOMING_SESSIONS.length > 0 ? (
                            UPCOMING_SESSIONS.map((session, index) => (
                                <Animated.View key={session.id} entering={FadeInDown.delay(index * 150).duration(500).springify()} className="bg-white p-6 rounded-3xl shadow-sm shadow-gray-200/50 mb-6 border border-gray-50">
                                    <View className="flex-row items-center justify-between mb-5">
                                        <View className="bg-purple-50 px-4 py-2 rounded-xl flex-row items-center border border-purple-100/50">
                                            <Ionicons name="calendar" size={16} color="#6B46C1" />
                                            <Text className="text-[#6B46C1] font-bold ml-2">{session.date} • {session.time}</Text>
                                        </View>
                                        <TouchableOpacity className="bg-gray-50 p-2 rounded-full">
                                            <Ionicons name="ellipsis-horizontal" size={20} color="#9CA3AF" />
                                        </TouchableOpacity>
                                    </View>

                                    <View className="flex-row items-center mb-6">
                                        <Image source={{ uri: session.avatar }} className="w-16 h-16 rounded-full bg-gray-100" />
                                        <View className="ml-4 flex-1">
                                            <Text className="text-xl font-bold text-[#1F2937] tracking-tight">{session.mentorName}</Text>
                                            <Text className="text-sm text-gray-500 font-medium mt-1">{session.mentorTitle}</Text>
                                        </View>
                                    </View>

                                    <View className="flex-row mt-2">
                                        <TouchableOpacity className="flex-1 bg-[#6B46C1] py-4 rounded-2xl items-center flex-row justify-center shadow-lg shadow-purple-200">
                                            <Ionicons name="videocam" size={20} color="#FFFFFF" className="mr-2" />
                                            <Text className="text-white font-bold ml-1 text-base tracking-wide">Join Call</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Animated.View>
                            ))
                        ) : (
                            <Animated.View entering={FadeInDown.duration(500)} className="py-16 items-center justify-center border border-dashed border-gray-200 rounded-3xl bg-white/50">
                                <View className="w-20 h-20 bg-gray-50 rounded-full items-center justify-center mb-4">
                                    <Ionicons name="calendar-outline" size={32} color="#D1D5DB" />
                                </View>
                                <Text className="text-[#1F2937] font-bold text-lg">No upcoming sessions</Text>
                            </Animated.View>
                        )}
                    </View>
                )}

                {activeTab === 'past' && (
                    <View>
                        {PAST_SESSIONS.map((session, index) => (
                            <Animated.View key={session.id} entering={FadeInDown.delay(index * 100).duration(400)} className="bg-white p-5 rounded-3xl shadow-sm shadow-gray-200/50 mb-4 flex-row items-center justify-between border border-gray-50">
                                <View className="flex-row items-center flex-1">
                                    <Image source={{ uri: session.avatar }} className="w-14 h-14 rounded-full bg-gray-100 opacity-80" />
                                    <View className="ml-4 flex-1 pr-2">
                                        <Text className="text-base font-bold text-[#1F2937]" numberOfLines={1}>{session.mentorName}</Text>
                                        <Text className="text-xs text-gray-400 mt-1">{session.date}</Text>
                                    </View>
                                </View>
                                {!session.reviewed ? (
                                    <TouchableOpacity className="bg-yellow-50 px-4 py-2.5 rounded-xl border border-yellow-100">
                                        <Text className="text-yellow-700 font-bold text-xs tracking-wide">Leave Review</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity className="bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100">
                                        <Text className="text-[#1F2937] font-bold text-xs tracking-wide">Book Again</Text>
                                    </TouchableOpacity>
                                )}
                            </Animated.View>
                        ))}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}