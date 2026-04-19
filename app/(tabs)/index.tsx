import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// --- Mock Data ---
const CATEGORIES = ["All Mentors", "Technology", "Business", "Leadership", "Management", "Marketing"];

const MENTORS = [
  { id: 1, name: "Pradeep Yuvaraj", title: "Business Storytelling • Pitch", rating: 4.7, exp: "20+ yrs", price: "Free Session", isFree: true, badge: "TOP", avatar: "https://i.pravatar.cc/150?u=pradeep" },
  { id: 2, name: "Vivek Pawar", title: "Leadership • Technology", rating: 4.6, exp: "40+ yrs", price: "₹1", isFree: false, badge: "TOP", avatar: "https://i.pravatar.cc/150?u=vivek" },
  { id: 3, name: "Shashank Tiwari", title: "Management • Business", rating: 4.0, exp: "16+ yrs", price: "₹200", isFree: false, badge: "PRO", avatar: "https://i.pravatar.cc/150?u=shashank" },
];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("All Mentors");

  return (
    <SafeAreaView className="flex-1 bg-[#F9F5FF]" edges={['top']}>

      {/* LAYOUT FIX APPLIED HERE:
        Added className="flex-1" to constrain the scroll area.
        Increased paddingBottom to 120 so the last card clears the bottom tab bar!
      */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

        {/* --- Header --- */}
        <View className="flex-row justify-between items-center px-6 pt-4 pb-2">
          <View>
            <Text className="text-[#6B7280] text-sm font-medium">Good Morning,</Text>
            <Text className="text-[#1F2937] text-2xl font-bold">Nandakishore</Text>
          </View>

          <TouchableOpacity
            className="bg-white p-2 rounded-full shadow-sm shadow-gray-200 border border-gray-100 relative"
            onPress={() => router.push('/notifications')}
          >
            <Ionicons name="notifications-outline" size={24} color="#1F2937" />
            <View className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white" />
          </TouchableOpacity>
        </View>

        {/* --- Search Bar --- */}
        <View className="px-6 mt-4 mb-2">
          <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 border border-gray-200 shadow-sm shadow-gray-100">
            <Ionicons name="search" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Search mentors, skills, or topics..."
              className="flex-1 ml-3 text-base text-[#1F2937]"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        {/* --- Hero Section --- */}
        <View className="mx-6 mt-6 bg-[#1e1b4b] rounded-3xl p-6 shadow-lg shadow-indigo-200">
          <Text className="text-white text-3xl font-bold leading-tight mb-2">Accelerate Your Career</Text>
          <Text className="text-[#FBBF24] text-2xl font-extrabold mb-4">Expert Mentorship</Text>
          <Text className="text-gray-300 text-sm mb-6 leading-relaxed">
            Get 1:1 guidance from industry leaders and founders to build skills and move faster.
          </Text>
          <TouchableOpacity className="bg-[#FBBF24] py-3 rounded-xl flex-row justify-center items-center">
            <Ionicons name="rocket" size={18} color="#1F2937" className="mr-2" />
            <Text className="text-[#1F2937] font-bold text-base ml-2">Find Your Mentor</Text>
          </TouchableOpacity>
        </View>

        {/* --- Categories Horizontal Scroll --- */}
        <View className="mt-8">
          <Text className="px-6 text-xl font-bold text-[#1F2937] mb-4">
            Explore <Text className="text-[#6B46C1]">Categories</Text>
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24 }}>
            {CATEGORIES.map((category, index) => {
              const isActive = activeCategory === category;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveCategory(category)}
                  className="mr-3 px-5 py-2.5 rounded-full border"
                  style={{
                    backgroundColor: isActive ? '#6B46C1' : '#ffffff',
                    borderColor: isActive ? '#6B46C1' : '#E5E7EB'
                  }}
                >
                  <Text
                    className="font-semibold"
                    style={{ color: isActive ? '#ffffff' : '#6B7280' }}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* --- Top Mentors Carousel --- */}
        <View className="mt-10">
          <Text className="px-6 text-xl font-bold text-[#1F2937] mb-4">Top Mentors</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            {MENTORS.map((mentor) => (
              <View key={mentor.id} className="bg-white w-64 rounded-3xl p-5 mx-2 border border-gray-100 shadow-sm shadow-gray-200">

                <View className="items-end mb-2">
                  <View className={`px-3 py-1 rounded-full ${mentor.badge === 'TOP' ? 'bg-[#FBBF24]' : 'bg-[#9333EA]'}`}>
                    <Text className="text-white text-xs font-bold">{mentor.badge}</Text>
                  </View>
                </View>

                <View className="items-center">
                  <Image source={{ uri: mentor.avatar }} className="w-20 h-20 rounded-full mb-3 border-2 border-purple-100" />
                  <Text className="text-lg font-bold text-[#1F2937]">{mentor.name}</Text>
                  <Text className="text-xs text-[#9333EA] font-medium text-center mt-1 px-2">{mentor.title}</Text>
                </View>

                <View className="flex-row justify-center mt-4 space-x-3">
                  <View className="bg-yellow-50 px-2 py-1 rounded-lg flex-row items-center">
                    <Ionicons name="star" size={12} color="#F59E0B" />
                    <Text className="text-xs font-bold text-yellow-700 ml-1">{mentor.rating}</Text>
                  </View>
                  <View className="bg-purple-50 px-2 py-1 rounded-lg flex-row items-center">
                    <Ionicons name="briefcase" size={12} color="#9333EA" />
                    <Text className="text-xs font-bold text-purple-700 ml-1">{mentor.exp}</Text>
                  </View>
                </View>

                <View className="mt-5 items-center">
                  <View className="flex-row items-center mb-3">
                    <View className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                    <Text className="text-green-600 text-xs font-bold">Available</Text>
                  </View>

                  <TouchableOpacity className={`w-full py-3 rounded-xl items-center ${mentor.isFree ? 'bg-green-50 border border-green-200' : 'bg-purple-50 border border-purple-200'}`}>
                    <Text className={`font-bold ${mentor.isFree ? 'text-green-700' : 'text-purple-700'}`}>
                      {mentor.isFree ? mentor.price : `Book for ${mentor.price}`}
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
            ))}
          </ScrollView>
        </View>

        {/* --- Upcoming Workshops (Vertical Card) --- */}
        <View className="mt-10 px-6">
          <Text className="text-xl font-bold text-[#1F2937] mb-4">Upcoming Workshops</Text>
          <View className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm shadow-gray-200 mb-6">
            <View className="bg-[#1e1b4b] p-6 items-center">
              <Text className="text-white text-lg font-bold text-center">Career Compass 2026</Text>
              <Text className="text-[#FBBF24] text-sm mt-1">Free Guidance Camp</Text>
            </View>
            <View className="p-5">
              <View className="flex-row justify-between mb-4">
                <View>
                  <Text className="text-xs text-gray-500 font-medium">DATE</Text>
                  <Text className="text-[#1F2937] font-bold mt-1">19 Apr 2026</Text>
                </View>
                <View>
                  <Text className="text-xs text-gray-500 font-medium">TIME</Text>
                  <Text className="text-[#1F2937] font-bold mt-1">11:00 AM IST</Text>
                </View>
              </View>
              <TouchableOpacity className="bg-[#6B46C1] w-full py-3 rounded-xl items-center shadow-md shadow-purple-200">
                <Text className="text-white font-bold text-base">View Workshop →</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}