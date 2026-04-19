import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router'; // Routing import
import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

// --- Expanded Mock Data for Catalog ---
const FILTERS = ["All", "Top Rated", "Free Sessions", "Under ₹500", "Technology"];

const MENTORS_CATALOG = [
  { id: 1, name: "Pradeep Yuvaraj", title: "Business Storytelling", rating: 4.7, exp: "20+ yrs", price: "Free", isFree: true, avatar: "https://i.pravatar.cc/150?u=pradeep", sessions: "1.2k+" },
  { id: 2, name: "Vivek Pawar", title: "Leadership & Tech", rating: 4.6, exp: "40+ yrs", price: "₹1", isFree: false, avatar: "https://i.pravatar.cc/150?u=vivek", sessions: "850+" },
  { id: 3, name: "Shashank Tiwari", title: "Management Expert", rating: 4.0, exp: "16+ yrs", price: "₹200", isFree: false, avatar: "https://i.pravatar.cc/150?u=shashank", sessions: "430+" },
  { id: 4, name: "Dr. Regunath", title: "Psychology & Leadership", rating: 4.9, exp: "35+ yrs", price: "Free", isFree: true, avatar: "https://i.pravatar.cc/150?u=regunath", sessions: "2k+" },
];

export default function MentorsScreen() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <SafeAreaView className="flex-1 bg-[#F9F5FF]">

      {/* --- Sticky Header & Search --- */}
      <View className="px-6 pt-4 pb-4 bg-white shadow-sm shadow-gray-200 z-10 rounded-b-3xl">
        <Text className="text-2xl font-bold text-[#1F2937] mb-4">Find an Expert</Text>

        {/* Search Bar */}
        <View className="flex-row items-center bg-[#F9F5FF] rounded-2xl px-4 py-3 border border-gray-100">
          <Ionicons name="search" size={20} color="#6B7280" />
          <TextInput
            placeholder="Search by name, role, or skill..."
            className="flex-1 ml-3 text-base text-[#1F2937]"
            placeholderTextColor="#9CA3AF"
          />
          <TouchableOpacity>
            <Ionicons name="options-outline" size={20} color="#6B46C1" />
          </TouchableOpacity>
        </View>

        {/* Filter Chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
          {FILTERS.map((filter, index) => {
            const isActive = activeFilter === filter;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveFilter(filter)}
                className={`mr-3 px-4 py-2 rounded-full border ${isActive ? 'bg-[#1e1b4b] border-[#1e1b4b]' : 'bg-white border-gray-200'}`}
              >
                <Text className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{filter}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* --- Vertical Mentor List --- */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
        {MENTORS_CATALOG.map((mentor) => (
          <View key={mentor.id} className="bg-white rounded-3xl p-5 mb-5 shadow-sm shadow-gray-200 border border-gray-100">

            <View className="flex-row">
              {/* Avatar */}
              <Image source={{ uri: mentor.avatar }} className="w-20 h-20 rounded-2xl bg-gray-100" />

              {/* Details */}
              <View className="ml-4 flex-1 justify-center">
                <Text className="text-lg font-bold text-[#1F2937]">{mentor.name}</Text>
                <Text className="text-sm text-[#6B46C1] font-medium mt-1">{mentor.title}</Text>

                <View className="flex-row items-center mt-2 space-x-3">
                  <View className="flex-row items-center">
                    <Ionicons name="star" size={14} color="#F59E0B" />
                    <Text className="text-xs font-bold text-gray-700 ml-1">{mentor.rating}</Text>
                  </View>
                  <View className="w-1 h-1 rounded-full bg-gray-300" />
                  <Text className="text-xs text-gray-500 font-medium">{mentor.exp}</Text>
                </View>
              </View>
            </View>

            {/* Divider */}
            <View className="h-[1px] bg-gray-100 w-full my-4" />

            {/* Bottom Row: Price & Action */}
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-xs text-gray-500 mb-1">Session Price</Text>
                <Text className={`font-bold text-lg ${mentor.isFree ? 'text-green-600' : 'text-[#1F2937]'}`}>
                  {mentor.price}
                </Text>
              </View>

              {/* --- The Dynamic Routing Button --- */}
              <TouchableOpacity
                onPress={() => router.push({ pathname: '/mentor', params: { id: mentor.id } })}
                className="bg-[#6B46C1] px-6 py-3 rounded-xl flex-row items-center"
              >
                <Text className="text-white font-bold mr-2">View Profile</Text>
                <Ionicons name="arrow-forward" size={16} color="white" />
              </TouchableOpacity>
            </View>

          </View>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
}