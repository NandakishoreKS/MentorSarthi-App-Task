import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// --- Mentor Database ---
const MENTORS_DB = [
    { id: 1, name: "Pradeep Yuvaraj", title: "Business Storytelling & Pitch Strategy", rating: 4.7, reviews: 128, exp: "20+ yrs", price: "Free", isFree: true, avatar: "https://i.pravatar.cc/150?u=pradeep", about: "I help founders and executives craft compelling narratives. With over two decades of experience, I've guided 50+ startups in refining their pitch decks and securing funding.", skills: ["Storytelling", "Pitch Decks", "Fundraising", "Leadership"] },
    { id: 2, name: "Vivek Pawar", title: "Leadership & Tech", rating: 4.6, reviews: 95, exp: "40+ yrs", price: "₹1", isFree: false, avatar: "https://i.pravatar.cc/150?u=vivek", about: "Former CEO with 40 years of experience building tech giants. I specialize in scaling teams, product strategy, and executive leadership.", skills: ["Leadership", "Scaling", "Tech Strategy", "Mentoring"] },
    { id: 3, name: "Shashank Tiwari", title: "Management Expert", rating: 4.0, reviews: 42, exp: "16+ yrs", price: "₹200", isFree: false, avatar: "https://i.pravatar.cc/150?u=shashank", about: "Operations and management consultant helping businesses streamline workflows and increase profitability. Let's optimize your business.", skills: ["Operations", "Management", "Workflow", "Strategy"] },
    { id: 4, name: "Dr. Regunath", title: "Psychology & Leadership", rating: 4.9, reviews: 210, exp: "35+ yrs", price: "Free", isFree: true, avatar: "https://i.pravatar.cc/150?u=regunath", about: "Academic and clinical psychologist specializing in workplace mental health, leadership resilience, and team dynamics.", skills: ["Psychology", "Resilience", "Team Dynamics", "Mental Health"] }
];

const DATES = ["Today, 19 Apr", "Tomorrow, 20 Apr", "Wed, 21 Apr"];
const TIMES = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

export default function MentorProfileScreen() {
    // Catch the dynamic ID passed from the catalog screen
    const { id } = useLocalSearchParams();

    // Find the exact mentor, fallback to ID 1 if none found
    const selectedMentor = MENTORS_DB.find(m => m.id === Number(id)) || MENTORS_DB[0];

    const [selectedDate, setSelectedDate] = useState(DATES[0]);
    const [selectedTime, setSelectedTime] = useState(TIMES[0]);

    return (
        <SafeAreaView className="flex-1 bg-[#F9F5FF]" edges={['top']}>

            {/* --- Navigation Header --- */}
            <View className="flex-row justify-between items-center px-6 py-4 bg-white z-10 shadow-sm shadow-gray-100 border-b border-gray-100">
                <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full bg-gray-50">
                    <Ionicons name="arrow-back" size={24} color="#1F2937" />
                </TouchableOpacity>
                <Text className="text-lg font-bold text-[#1F2937]">Profile</Text>
                <TouchableOpacity className="p-2 -mr-2">
                    <Ionicons name="bookmark-outline" size={24} color="#1F2937" />
                </TouchableOpacity>
            </View>

            {/* --- Main Scroll Content --- */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

                {/* Mentor Header Info */}
                <View className="bg-white px-6 pb-6 pt-4 rounded-b-3xl shadow-sm shadow-gray-100">
                    <View className="flex-row">
                        <Image source={{ uri: selectedMentor.avatar }} className="w-24 h-24 rounded-2xl bg-gray-100 border border-gray-100" />
                        <View className="ml-5 flex-1 justify-center">
                            <View className={`self-start px-2 py-1 rounded-md mb-2 ${selectedMentor.isFree ? 'bg-green-500' : 'bg-[#FBBF24]'}`}>
                                <Text className="text-white text-[10px] font-bold uppercase tracking-wider">
                                    {selectedMentor.isFree ? 'Free Sessions' : 'Top Mentor'}
                                </Text>
                            </View>
                            <Text className="text-2xl font-bold text-[#1F2937]">{selectedMentor.name}</Text>
                            <Text className="text-sm text-[#6B46C1] font-medium mt-1 leading-snug">{selectedMentor.title}</Text>
                        </View>
                    </View>

                    {/* Quick Stats */}
                    <View className="flex-row mt-6 pt-6 border-t border-gray-100 justify-between px-2">
                        <View className="items-center">
                            <View className="flex-row items-center">
                                <Ionicons name="star" size={16} color="#F59E0B" />
                                <Text className="text-lg font-bold text-[#1F2937] ml-1">{selectedMentor.rating}</Text>
                            </View>
                            <Text className="text-xs text-gray-500 mt-1">{selectedMentor.reviews} Reviews</Text>
                        </View>
                        <View className="w-[1px] h-full bg-gray-200" />
                        <View className="items-center">
                            <Text className="text-lg font-bold text-[#1F2937]">{selectedMentor.exp}</Text>
                            <Text className="text-xs text-gray-500 mt-1">Experience</Text>
                        </View>
                        <View className="w-[1px] h-full bg-gray-200" />
                        <View className="items-center">
                            <Ionicons name="chatbubbles" size={20} color="#6B46C1" />
                            <Text className="text-xs text-gray-500 mt-1">Chat Active</Text>
                        </View>
                    </View>
                </View>

                {/* About Section */}
                <View className="px-6 mt-8">
                    <Text className="text-lg font-bold text-[#1F2937] mb-3">About Mentor</Text>
                    <Text className="text-gray-600 leading-relaxed text-base">{selectedMentor.about}</Text>

                    {/* Skills Chips */}
                    <View className="flex-row flex-wrap mt-4">
                        {selectedMentor.skills.map((skill, index) => (
                            <View key={index} className="bg-purple-50 border border-purple-100 px-3 py-1.5 rounded-lg mr-2 mb-2">
                                <Text className="text-purple-700 text-sm font-medium">{skill}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Availability Calendar */}
                <View className="px-6 mt-8">
                    <Text className="text-lg font-bold text-[#1F2937] mb-4">Select Availability</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
                        {DATES.map((date, index) => {
                            const isActive = selectedDate === date;
                            return (
                                <TouchableOpacity
                                    key={index} onPress={() => setSelectedDate(date)}
                                    className={`mr-3 px-5 py-3 rounded-xl border ${isActive ? 'bg-[#1e1b4b] border-[#1e1b4b]' : 'bg-white border-gray-200'}`}
                                >
                                    <Text className={`font-semibold ${isActive ? 'text-white' : 'text-[#1F2937]'}`}>{date}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>

                    <View className="flex-row flex-wrap justify-between">
                        {TIMES.map((time, index) => {
                            const isActive = selectedTime === time;
                            return (
                                <TouchableOpacity
                                    key={index} onPress={() => setSelectedTime(time)}
                                    className={`w-[48%] py-3 rounded-xl border mb-3 items-center ${isActive ? 'bg-[#F9F5FF] border-[#6B46C1]' : 'bg-white border-gray-200'}`}
                                >
                                    <Text className={`font-bold ${isActive ? 'text-[#6B46C1]' : 'text-gray-600'}`}>{time}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

            </ScrollView>

            {/* --- Sticky Bottom Booking Bar --- */}
            <View className="absolute bottom-0 w-full bg-white px-6 py-5 border-t border-gray-200 shadow-[0_-10px_15px_rgba(0,0,0,0.05)] flex-row justify-between items-center">
                <View>
                    <Text className="text-xs text-gray-500 font-medium mb-1">Total Price</Text>
                    <Text className={`text-2xl font-bold ${selectedMentor.isFree ? 'text-green-600' : 'text-[#1F2937]'}`}>
                        {selectedMentor.price}
                    </Text>
                </View>
                <TouchableOpacity
                    className="bg-[#6B46C1] px-10 py-4 rounded-2xl shadow-lg shadow-purple-200"
                    onPress={() => router.push('/mentor/checkout')}
                >
                    <Text className="text-white font-bold text-lg">Book Session</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}