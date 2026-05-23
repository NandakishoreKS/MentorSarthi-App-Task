import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CATEGORIES = ["All Mentors", "Technology", "Business", "Leadership", "Management", "Marketing"];

const MENTORS = [
  {
    id: 1,
    name: "Pradeep Yuvaraj",
    title: "Business Storytelling & Pitch Strategy",
    rating: 4.7,
    reviews: 128,
    exp: "20+ yrs",
    price: "Free",
    isFree: true,
    badge: "TOP",
    avatar: "https://i.pravatar.cc/150?u=pradeep",
    available: true,
    bio: "Helping leaders, teams, and entrepreneurs grow by mastering business storytelling, presentation strategy, and pitch communication.",
    skills: ["Storytelling", "Pitch Decks", "Fundraising"],
  },
  {
    id: 2,
    name: "Vivek Pawar",
    title: "Leadership & Tech Strategy",
    rating: 4.6,
    reviews: 95,
    exp: "40+ yrs",
    price: "₹1",
    isFree: false,
    badge: "TOP",
    avatar: "https://i.pravatar.cc/150?u=vivek",
    available: true,
    bio: "Seasoned technology leader with 40+ years of experience building and scaling high-performance teams across global enterprises.",
    skills: ["Leadership", "Scaling", "Tech Strategy"],
  },
  {
    id: 3,
    name: "Shashank Tiwari",
    title: "Management Expert",
    rating: 4.0,
    reviews: 42,
    exp: "16+ yrs",
    price: "₹200",
    isFree: false,
    badge: "PRO",
    avatar: "https://i.pravatar.cc/150?u=shashank",
    available: false,
    bio: "Expert in operational management, workflow optimization, and building scalable business processes for growing organizations.",
    skills: ["Operations", "Management", "Workflow"],
  },
  {
    id: 4,
    name: "Dr. Regunath",
    title: "Psychology & Leadership",
    rating: 4.9,
    reviews: 210,
    exp: "35+ yrs",
    price: "Free",
    isFree: true,
    badge: "TOP",
    avatar: "https://i.pravatar.cc/150?u=regunath",
    available: true,
    bio: "Clinical psychologist and leadership coach helping professionals build resilience, emotional intelligence, and high-performing teams.",
    skills: ["Psychology", "Resilience", "Team Dynamics"],
  },
];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("All Mentors");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMentors = MENTORS.filter((mentor) => {
    const matchesCategory = activeCategory === "All Mentors" || mentor.title.includes(activeCategory);
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchLower) ||
      mentor.title.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  const handleMentorPress = (mentor: typeof MENTORS[0]) => {
    router.push({
      pathname: '/mentor/[id]',
      params: {
        id: mentor.id,
        name: mentor.name,
        title: mentor.title,
        rating: mentor.rating,
        reviews: mentor.reviews,
        exp: mentor.exp,
        price: mentor.price,
        avatar: mentor.avatar,
        available: mentor.available ? 'true' : 'false',
        bio: mentor.bio,
        skills: JSON.stringify(mentor.skills),
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 pt-4 pb-2">
          <View>
            <Text className="text-[#9CA3AF] text-sm font-medium">Good Morning,</Text>
            <Text className="text-[#1F2937] text-3xl font-bold tracking-tight">Nandakishore</Text>
          </View>
          <TouchableOpacity className="bg-white p-3 rounded-full shadow-sm shadow-gray-200/50 relative">
            <Ionicons name="notifications-outline" size={22} color="#1F2937" />
            <View className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View className="px-6 mt-4 mb-2">
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

        {/* Stats row */}
        <View className="flex-row px-6 mt-5 gap-3">
          {[
            { label: 'Sessions', value: '2', icon: 'calendar-outline', color: '#6B46C1', bg: '#F5F3FF' },
            { label: 'Mentors', value: '4', icon: 'people-outline', color: '#3B82F6', bg: '#EFF6FF' },
            { label: 'Hours', value: '3', icon: 'time-outline', color: '#22C55E', bg: '#F0FDF4' },
          ].map((stat, i) => (
            <View key={i} className="flex-1 bg-white rounded-2xl p-3 items-center border border-gray-100">
              <View className="w-8 h-8 rounded-xl items-center justify-center mb-1" style={{ backgroundColor: stat.bg }}>
                <Ionicons name={stat.icon as any} size={16} color={stat.color} />
              </View>
              <Text className="text-base font-extrabold text-[#1F2937]">{stat.value}</Text>
              <Text className="text-xs text-gray-400">{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Categories */}
        <View className="mt-8">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            {CATEGORIES.map((category, index) => {
              const isActive = activeCategory === category;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveCategory(category)}
                  className={`mr-3 px-5 py-2.5 rounded-full ${isActive ? 'bg-[#1F2937]' : 'bg-transparent border border-gray-200'
                    }`}
                >
                  <Text className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-gray-500'}`}>
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Top Mentors carousel */}
        <View className="mt-8">
          <View className="flex-row items-center justify-between px-6 mb-4">
            <Text className="text-xl font-bold text-[#1F2937] tracking-tight">Top Mentors</Text>
            <TouchableOpacity onPress={() => router.push('/mentors')}>
              <Text className="text-sm text-[#6B46C1] font-semibold">See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {filteredMentors.length > 0 ? (
              filteredMentors.map((mentor) => (
                <TouchableOpacity
                  key={mentor.id}
                  className="bg-white w-60 rounded-3xl p-5 mx-2 shadow-sm shadow-gray-200/50 border border-gray-50"
                  onPress={() => handleMentorPress(mentor)}
                >
                  {/* Badge */}
                  <View className="items-end mb-2">
                    <View className={`px-3 py-1 rounded-full ${mentor.badge === 'TOP' ? 'bg-yellow-100' : 'bg-gray-800'}`}>
                      <Text className={`text-xs font-bold ${mentor.badge === 'TOP' ? 'text-yellow-700' : 'text-white'}`}>
                        {mentor.badge}
                      </Text>
                    </View>
                  </View>

                  {/* Avatar + name */}
                  <View className="items-center mb-3">
                    <View className="relative mb-3">
                      <Image
                        source={{ uri: mentor.avatar }}
                        className="w-20 h-20 rounded-full bg-gray-50"
                      />
                      <View className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${mentor.available ? 'bg-green-400' : 'bg-gray-300'}`} />
                    </View>
                    <Text className="text-base font-bold text-[#1F2937] tracking-tight text-center">
                      {mentor.name}
                    </Text>
                    <Text className="text-xs text-gray-500 text-center mt-0.5 px-2" numberOfLines={2}>
                      {mentor.title}
                    </Text>
                  </View>

                  {/* Stats */}
                  <View className="flex-row justify-center gap-2 mb-4">
                    <View className="bg-gray-50 px-3 py-1.5 rounded-lg flex-row items-center">
                      <Ionicons name="star" size={11} color="#FBBF24" />
                      <Text className="text-xs font-bold text-[#1F2937] ml-1">{mentor.rating}</Text>
                    </View>
                    <View className="bg-gray-50 px-3 py-1.5 rounded-lg flex-row items-center">
                      <Ionicons name="briefcase-outline" size={11} color="#6B7280" />
                      <Text className="text-xs font-bold text-[#1F2937] ml-1">{mentor.exp}</Text>
                    </View>
                  </View>

                  {/* Book button */}
                  <View className="bg-[#6B46C1] py-3 rounded-2xl items-center">
                    <Text className="font-bold text-white text-sm">
                      {mentor.isFree ? 'Free Session' : `Book for ${mentor.price}`}
                    </Text>
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

        {/* Quick actions */}
        <View className="px-6 mt-8">
          <Text className="text-xl font-bold text-[#1F2937] tracking-tight mb-4">Quick Actions</Text>
          <View className="flex-row gap-3">
            <TouchableOpacity
              onPress={() => router.push('/mentors')}
              className="flex-1 bg-[#6B46C1] rounded-2xl p-4 items-center"
            >
              <View className="w-10 h-10 bg-white/20 rounded-xl items-center justify-center mb-2">
                <Ionicons name="search" size={20} color="white" />
              </View>
              <Text className="text-white font-bold text-xs text-center">Find a Mentor</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/dashboard')}
              className="flex-1 bg-white border border-gray-100 rounded-2xl p-4 items-center"
            >
              <View className="w-10 h-10 bg-purple-50 rounded-xl items-center justify-center mb-2">
                <Ionicons name="calendar-outline" size={20} color="#6B46C1" />
              </View>
              <Text className="text-[#1F2937] font-bold text-xs text-center">My Sessions</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/profile')}
              className="flex-1 bg-white border border-gray-100 rounded-2xl p-4 items-center"
            >
              <View className="w-10 h-10 bg-purple-50 rounded-xl items-center justify-center mb-2">
                <Ionicons name="person-outline" size={20} color="#6B46C1" />
              </View>
              <Text className="text-[#1F2937] font-bold text-xs text-center">My Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recently viewed */}
        <View className="px-6 mt-8">
          <Text className="text-xl font-bold text-[#1F2937] tracking-tight mb-4">Recently Viewed</Text>
          {MENTORS.slice(0, 2).map((mentor) => (
            <TouchableOpacity
              key={mentor.id}
              onPress={() => handleMentorPress(mentor)}
              className="bg-white rounded-2xl p-4 mb-3 border border-gray-100 flex-row items-center"
            >
              <Image
                source={{ uri: mentor.avatar }}
                className="w-12 h-12 rounded-full bg-gray-100 mr-3"
              />
              <View className="flex-1">
                <Text className="text-sm font-bold text-[#1F2937]">{mentor.name}</Text>
                <Text className="text-xs text-gray-500 mt-0.5" numberOfLines={1}>{mentor.title}</Text>
                <View className="flex-row items-center mt-1">
                  <Ionicons name="star" size={11} color="#FBBF24" />
                  <Text className="text-xs text-gray-500 ml-1">{mentor.rating} · {mentor.exp} exp</Text>
                </View>
              </View>
              <View className={`px-3 py-1.5 rounded-full ${mentor.isFree ? 'bg-green-50' : 'bg-purple-50'}`}>
                <Text className={`text-xs font-bold ${mentor.isFree ? 'text-green-600' : 'text-purple-600'}`}>
                  {mentor.price}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}