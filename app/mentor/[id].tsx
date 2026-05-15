import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MentorDetailsScreen() {
    // This grabs the data passed from the home screen!
    const { name, title, price, avatar } = useLocalSearchParams();

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>

            {/* Header */}
            <View className="flex-row items-center justify-between px-6 py-4">
                <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 bg-gray-50 rounded-full">
                    <Ionicons name="arrow-back" size={24} color="#1F2937" />
                </TouchableOpacity>
                <TouchableOpacity className="p-2 -mr-2 bg-gray-50 rounded-full">
                    <Ionicons name="share-outline" size={24} color="#1F2937" />
                </TouchableOpacity>
            </View>

            <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
                {/* Profile Info */}
                <View className="items-center mt-4 mb-6">
                    <Image source={{ uri: avatar as string }} className="w-28 h-28 rounded-full border-4 border-purple-50 mb-4" />
                    <Text className="text-2xl font-bold text-[#1F2937]">{name}</Text>
                    <Text className="text-[#6B46C1] font-medium mt-1">{title}</Text>
                </View>

                {/* About Section */}
                <Text className="text-lg font-bold text-[#1F2937] mb-2">About</Text>
                <Text className="text-gray-600 leading-relaxed mb-6">
                    Hi, I'm {name}. I specialize in helping professionals navigate their career paths and master {title}. Book a session with me to level up your skills!
                </Text>

                {/* Quick Stats */}
                <View className="flex-row justify-between bg-gray-50 p-4 rounded-2xl mb-8 border border-gray-100">
                    <View className="items-center flex-1">
                        <Ionicons name="star" size={20} color="#FBBF24" />
                        <Text className="font-bold text-[#1F2937] mt-1">4.9</Text>
                        <Text className="text-xs text-gray-500">Rating</Text>
                    </View>
                    <View className="w-[1px] bg-gray-200" />
                    <View className="items-center flex-1">
                        <Ionicons name="time" size={20} color="#6B46C1" />
                        <Text className="font-bold text-[#1F2937] mt-1">1 hr</Text>
                        <Text className="text-xs text-gray-500">Duration</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Sticky Bottom Booking Bar */}
            <View className="bg-white px-6 py-5 border-t border-gray-100">
                <View className="flex-row items-center justify-between mb-3">
                    <Text className="text-gray-500">Session Price</Text>
                    <Text className="text-xl font-bold text-[#1F2937]">{price}</Text>
                </View>
                <TouchableOpacity
                    className="bg-[#6B46C1] w-full py-4 rounded-2xl flex-row justify-center items-center"
                    onPress={() => router.push('/checkout')} // Connects directly to our checkout!
                >
                    <Text className="text-white font-bold text-lg">Book Session</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}