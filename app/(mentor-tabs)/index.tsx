import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// --- Mock Data ---
const INCOMING_REQUESTS = [
    {
        id: 1,
        menteeName: "Nandakishore KS",
        menteeTitle: "Full Stack Dev & AI Engineer",
        topic: "React Native Architecture",
        date: "Tomorrow, 20 Apr",
        time: "11:30 AM",
        avatar: "https://i.pravatar.cc/150?u=nanda",
    }
];

export default function MentorDashboardScreen() {
    return (
        <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>

            {/* --- Header --- */}
            <View className="px-6 pt-6 pb-6 flex-row justify-between items-center">
                <View>
                    <Text className="text-[#9CA3AF] text-sm font-medium">Mentor Overview</Text>
                    <Text className="text-3xl font-extrabold text-[#1F2937] tracking-tight">Dashboard</Text>
                </View>
                <Image source={{ uri: "https://i.pravatar.cc/150?u=vivek" }} className="w-12 h-12 rounded-full border border-gray-200" />
            </View>

            <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>

                {/* --- Key Metrics --- */}
                <View className="flex-row justify-between mb-8">
                    <View className="bg-white p-5 rounded-3xl w-[48%] shadow-sm shadow-gray-200/50">
                        <View className="w-10 h-10 bg-purple-50 rounded-full items-center justify-center mb-3">
                            <Ionicons name="wallet-outline" size={20} color="#6B46C1" />
                        </View>
                        <Text className="text-gray-500 text-sm font-medium mb-1">This Month</Text>
                        <Text className="text-2xl font-bold text-[#1F2937]">₹4,500</Text>
                    </View>

                    <View className="bg-white p-5 rounded-3xl w-[48%] shadow-sm shadow-gray-200/50">
                        <View className="w-10 h-10 bg-yellow-50 rounded-full items-center justify-center mb-3">
                            <Ionicons name="star-outline" size={20} color="#F59E0B" />
                        </View>
                        <Text className="text-gray-500 text-sm font-medium mb-1">Profile Views</Text>
                        <Text className="text-2xl font-bold text-[#1F2937]">128</Text>
                    </View>
                </View>

                {/* --- Action Required Section --- */}
                <Text className="text-lg font-bold text-[#1F2937] mb-4 tracking-tight">Pending Requests (1)</Text>

                {INCOMING_REQUESTS.map((request) => (
                    <View key={request.id} className="bg-white p-5 rounded-3xl shadow-sm shadow-gray-200/50 mb-8 border-l-4 border-[#6B46C1]">
                        <View className="flex-row items-center mb-4 border-b border-gray-50 pb-4">
                            <Image source={{ uri: request.avatar }} className="w-14 h-14 rounded-full bg-gray-100" />
                            <View className="ml-4 flex-1">
                                <Text className="text-lg font-bold text-[#1F2937]">{request.menteeName}</Text>
                                <Text className="text-xs text-gray-500">{request.menteeTitle}</Text>
                            </View>
                        </View>

                        <View className="bg-[#F9F5FF] p-3 rounded-xl mb-4">
                            <Text className="text-[#6B46C1] font-bold text-xs mb-1 uppercase tracking-widest">Requested Topic</Text>
                            <Text className="text-[#1F2937] font-medium">{request.topic}</Text>
                        </View>

                        <View className="flex-row items-center justify-between mb-5 px-1">
                            <View className="flex-row items-center">
                                <Ionicons name="calendar-outline" size={16} color="#6B7280" />
                                <Text className="text-[#1F2937] font-medium ml-2">{request.date}</Text>
                            </View>
                            <View className="flex-row items-center">
                                <Ionicons name="time-outline" size={16} color="#6B7280" />
                                <Text className="text-[#1F2937] font-medium ml-2">{request.time}</Text>
                            </View>
                        </View>

                        <View className="flex-row space-x-3 mt-1">
                            <TouchableOpacity className="flex-1 bg-white border border-gray-200 py-3.5 rounded-xl items-center">
                                <Text className="text-[#1F2937] font-bold">Decline</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="flex-1 bg-[#1F2937] py-3.5 rounded-xl items-center shadow-md shadow-gray-300">
                                <Text className="text-white font-bold">Accept Booking</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

            </ScrollView>
        </SafeAreaView>
    );
}