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
  const [searchQuery, setSearchQuery] = useState("");

  // Compound Filter Logic (Search + Category)
  const filteredMentors = MENTORS.filter((mentor) => {
    const matchesCategory = activeCategory === "All Mentors" || mentor.title.includes(activeCategory);
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = mentor.name.toLowerCase().includes(searchLower) ||
      mentor.title.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  return (
    // Premium Touch: Stark off-white background instead of purple tint
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

        {/* --- Header --- */}
        <View className="flex-row justify-between items-center px-6 pt-4 pb-2">
          <View>
            <Text className="text-[#9CA3AF] text-sm font-medium">Good Morning,</Text>
            <Text className="text-[#1F2937] text-3xl font-bold tracking-tight">Nandakishore</Text>
          </View>

          <TouchableOpacity
            className="bg-white p-3 rounded-full shadow-sm shadow-gray-200/50 relative"
            onPress={() => router.push('/notifications' as any)}
          >
            <Ionicons name="notifications-outline" size={22} color="#1F2937" />
            <View className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
          </TouchableOpacity>
        </View>

        {/* --- Minimalist Search Bar --- */}
        <View className="px-6 mt-4 mb-2">
          {/* Premium Touch: No border, soft gray background, invisible until needed */}
          <View className="flex-row items-center bg-[#F3F4F6] rounded-2xl px-5 py-4">
            <Ionicons name="search" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Search mentors or skills..."
              className="flex-1 ml-3 text-base text-[#1F2937]"
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <Ionicons name="close-circle" size={20} color="#9CA3AF" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* --- Categories Horizontal Scroll --- */}
        <View className="mt-8">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24 }}>
            {CATEGORIES.map((category, index) => {
              const isActive = activeCategory === category;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveCategory(category)}
                  // Premium Touch: High-contrast dark active state instead of purple
                  className={`mr-3 px-6 py-3 rounded-full ${isActive ? 'bg-[#1F2937]' : 'bg-transparent border border-gray-200'}`}
                >
                  <Text className={`font-semibold ${isActive ? 'text-white' : 'text-gray-500'}`}>
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* --- Top Mentors Carousel --- */}
        <View className="mt-10">
          <Text className="px-6 text-xl font-bold text-[#1F2937] tracking-tight mb-4">Top Mentors</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>

            {filteredMentors.length > 0 ? (
              filteredMentors.map((mentor) => (
                <TouchableOpacity
                  key={mentor.id}
                  // Premium Touch: Removed border, letting the soft shadow define the card
                  className="bg-white w-64 rounded-3xl p-6 mx-2 shadow-sm shadow-gray-200/50"
                  onPress={() => router.push({
                    pathname: '/mentor/[id]' as any,
                    params: { id: mentor.id, name: mentor.name, title: mentor.title, price: mentor.price, avatar: mentor.avatar }
                  })}
                >
                  <View className="items-end mb-2">
                    <View className={`px-3 py-1 rounded-full ${mentor.badge === 'TOP' ? 'bg-[#FBBF24]' : 'bg-[#1F2937]'}`}>
                      <Text className={`text-xs font-bold ${mentor.badge === 'TOP' ? 'text-yellow-900' : 'text-white'}`}>{mentor.badge}</Text>
                    </View>
                  </View>

                  <View className="items-center">
                    <Image source={{ uri: mentor.avatar }} className="w-20 h-20 rounded-full mb-4 bg-gray-50" />
                    <Text className="text-lg font-bold text-[#1F2937] tracking-tight">{mentor.name}</Text>
                    <Text className="text-xs text-gray-500 font-medium text-center mt-1 px-2">{mentor.title}</Text>
                  </View>

                  <View className="flex-row justify-center mt-5 space-x-3">
                    <View className="bg-gray-50 px-3 py-1.5 rounded-lg flex-row items-center">
                      <Ionicons name="star" size={12} color="#FBBF24" />
                      <Text className="text-xs font-bold text-[#1F2937] ml-1.5">{mentor.rating}</Text>
                    </View>
                    <View className="bg-gray-50 px-3 py-1.5 rounded-lg flex-row items-center">
                      <Ionicons name="briefcase" size={12} color="#6B7280" />
                      <Text className="text-xs font-bold text-[#1F2937] ml-1.5">{mentor.exp}</Text>
                    </View>
                  </View>

                  <View className="mt-6 items-center">
                    <View className="flex-row items-center mb-4">
                      <View className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                      <Text className="text-emerald-600 text-xs font-bold uppercase tracking-wider">Available</Text>
                    </View>

                    {/* Keep the purple here to guide the eye to the primary action */}
                    <View className="w-full py-3.5 rounded-2xl items-center bg-[#6B46C1]">
                      <Text className="font-bold text-white">
                        {mentor.isFree ? mentor.price : `Book for ${mentor.price}`}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <View className="w-64 py-12 items-center justify-center mx-2 bg-white rounded-3xl border border-dashed border-gray-200">
                <Ionicons name="search-outline" size={32} color="#D1D5DB" />
                <Text className="text-gray-400 mt-4 font-medium px-6 text-center leading-relaxed">
                  No mentors found matching "{searchQuery}"
                </Text>
              </View>
            )}
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}