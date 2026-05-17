import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// --- Mentor Database ---
const MENTORS_DB = [
  { id: 1, name: "Pradeep Yuvaraj", title: "Business Storytelling & Pitch Strategy", rating: 4.7, reviews: 128, exp: "20+ yrs", price: "Free", isFree: true, avatar: "https://i.pravatar.cc/150?u=pradeep", skills: ["Storytelling", "Pitch Decks", "Fundraising"] },
  { id: 2, name: "Vivek Pawar", title: "Leadership & Tech", rating: 4.6, reviews: 95, exp: "40+ yrs", price: "₹1", isFree: false, avatar: "https://i.pravatar.cc/150?u=vivek", skills: ["Leadership", "Scaling", "Tech Strategy"] },
  { id: 3, name: "Shashank Tiwari", title: "Management Expert", rating: 4.0, reviews: 42, exp: "16+ yrs", price: "₹200", isFree: false, avatar: "https://i.pravatar.cc/150?u=shashank", skills: ["Operations", "Management", "Workflow"] },
  { id: 4, name: "Dr. Regunath", title: "Psychology & Leadership", rating: 4.9, reviews: 210, exp: "35+ yrs", price: "Free", isFree: true, avatar: "https://i.pravatar.cc/150?u=regunath", skills: ["Psychology", "Resilience", "Team Dynamics"] }
];

export default function MentorsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>

      {/* Header */}
      <View className="px-6 pt-6 pb-4 bg-[#FAFAFA] z-10">
        <Text className="text-3xl font-extrabold text-[#1F2937] tracking-tight">Find an Expert</Text>
        <Text className="text-gray-500 mt-2">Connect with industry leaders and accelerate your career.</Text>
      </View>

      {/* Search Bar */}
      <View className="px-6 mb-6">
        <View className="flex-row items-center bg-white rounded-2xl px-5 py-4 border border-gray-200 shadow-sm shadow-gray-100">
          <Ionicons name="search" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Search by name, role, or skill..."
            className="flex-1 ml-3 text-base text-[#1F2937]"
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      {/* Main Content Area */}
      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

        {MENTORS_DB.map((mentor) => (
          <View key={mentor.id} className="bg-white p-5 rounded-3xl shadow-sm shadow-gray-200/50 mb-4 border border-gray-50">
            <View className="flex-row items-center mb-3">
              <Image source={{ uri: mentor.avatar }} className="w-14 h-14 rounded-full bg-gray-100" />
              <View className="ml-4 flex-1">
                <Text className="text-lg font-bold text-[#1F2937]">{mentor.name}</Text>
                <Text className="text-sm text-[#6B46C1] font-medium mt-0.5">{mentor.title}</Text>
              </View>
            </View>

            <View className="flex-row flex-wrap mt-2">
              {mentor.skills.map((skill, index) => (
                <View key={index} className="bg-gray-50 px-3 py-1.5 rounded-lg mr-2 mb-2 border border-gray-100">
                  <Text className="text-gray-600 text-xs font-medium">{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

      </ScrollView>

    </SafeAreaView>
  );
}