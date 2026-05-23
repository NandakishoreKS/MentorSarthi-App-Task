import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MENTORS_DB = [
  {
    id: 1,
    name: "Pradeep Yuvaraj",
    title: "Business Storytelling & Pitch Strategy",
    rating: 4.7,
    reviews: 128,
    exp: "20+ yrs",
    price: "Free",
    isFree: true,
    avatar: "https://i.pravatar.cc/150?u=pradeep",
    skills: ["Storytelling", "Pitch Decks", "Fundraising"],
    available: true,
    bio: "Helping leaders, teams, and entrepreneurs grow by mastering business storytelling, presentation strategy, and pitch communication.",
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
    avatar: "https://i.pravatar.cc/150?u=vivek",
    skills: ["Leadership", "Scaling", "Tech Strategy"],
    available: true,
    bio: "Seasoned technology leader with 40+ years of experience building and scaling high-performance teams across global enterprises.",
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
    avatar: "https://i.pravatar.cc/150?u=shashank",
    skills: ["Operations", "Management", "Workflow"],
    available: false,
    bio: "Expert in operational management, workflow optimization, and building scalable business processes for growing organizations.",
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
    avatar: "https://i.pravatar.cc/150?u=regunath",
    skills: ["Psychology", "Resilience", "Team Dynamics"],
    available: true,
    bio: "Clinical psychologist and leadership coach helping professionals build resilience, emotional intelligence, and high-performing teams.",
  },
];

export default function MentorsScreen() {
  const router = useRouter();

  const handleMentorPress = (mentor: typeof MENTORS_DB[0]) => {
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
        skills: JSON.stringify(mentor.skills), // arrays must be stringified
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>

      {/* Header */}
      <View className="px-6 pt-6 pb-4">
        <Text className="text-3xl font-extrabold text-[#1F2937] tracking-tight">Find an Expert</Text>
        <Text className="text-gray-500 mt-1">Connect with industry leaders and accelerate your career.</Text>
      </View>

      {/* Search Bar */}
      <View className="px-6 mb-4">
        <View className="flex-row items-center bg-white rounded-2xl px-5 py-4 border border-gray-200 shadow-sm">
          <Ionicons name="search" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Search by name, role, or skill..."
            className="flex-1 ml-3 text-base text-[#1F2937]"
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      {/* Mentor List */}
      <ScrollView
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {MENTORS_DB.map((mentor) => (
          // ✅ KEY FIX: TouchableOpacity + router.push
          <TouchableOpacity
            key={mentor.id}
            onPress={() => handleMentorPress(mentor)}
            className="bg-white p-5 rounded-3xl shadow-sm mb-4 border border-gray-100 active:opacity-80"
          >
            {/* Top row: avatar + name + availability */}
            <View className="flex-row items-center mb-3">
              <Image
                source={{ uri: mentor.avatar }}
                className="w-14 h-14 rounded-full bg-gray-100"
              />
              <View className="ml-4 flex-1">
                <Text className="text-base font-bold text-[#1F2937]">{mentor.name}</Text>
                <Text className="text-sm text-[#6B46C1] font-medium mt-0.5" numberOfLines={1}>
                  {mentor.title}
                </Text>
                <View className="flex-row items-center mt-1">
                  <View
                    className={`w-2 h-2 rounded-full mr-1.5 ${mentor.available ? 'bg-green-400' : 'bg-gray-300'}`}
                  />
                  <Text className="text-xs text-gray-500">
                    {mentor.available ? 'Available' : 'Unavailable'}
                  </Text>
                </View>
              </View>
              {/* Price badge */}
              <View className={`px-3 py-1 rounded-full ${mentor.isFree ? 'bg-green-50' : 'bg-purple-50'}`}>
                <Text className={`text-xs font-bold ${mentor.isFree ? 'text-green-600' : 'text-purple-600'}`}>
                  {mentor.price}
                </Text>
              </View>
            </View>

            {/* Rating + Experience row */}
            <View className="flex-row items-center mb-3 gap-4">
              <View className="flex-row items-center">
                <Ionicons name="star" size={13} color="#FBBF24" />
                <Text className="text-sm font-semibold text-[#1F2937] ml-1">{mentor.rating}</Text>
                <Text className="text-xs text-gray-400 ml-1">({mentor.reviews})</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="briefcase-outline" size={13} color="#9CA3AF" />
                <Text className="text-xs text-gray-500 ml-1">{mentor.exp} exp</Text>
              </View>
            </View>

            {/* Skills tags */}
            <View className="flex-row flex-wrap">
              {mentor.skills.map((skill, index) => (
                <View
                  key={index}
                  className="bg-gray-50 px-3 py-1 rounded-lg mr-2 mb-1 border border-gray-100"
                >
                  <Text className="text-gray-600 text-xs font-medium">{skill}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}