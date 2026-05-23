// services.tsx
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ServicesScreen() {
    return (
        <SafeAreaView className="flex-1 bg-[#F8F9FA]" edges={['top']}>
            <View className="px-5 pt-5 pb-4 flex-row items-center">
                <TouchableOpacity onPress={() => router.back()} className="mr-3">
                    <Ionicons name="arrow-back" size={22} color="#1F2937" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-[#1F2937]">Services</Text>
                <TouchableOpacity className="ml-auto bg-[#6B46C1] px-4 py-2 rounded-xl flex-row items-center">
                    <Ionicons name="add" size={16} color="white" />
                    <Text className="text-white text-xs font-bold ml-1">Add New Service</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

                <View className="mx-5 mb-3 bg-blue-50 border border-blue-100 rounded-xl p-3 flex-row items-start">
                    <Ionicons name="information-circle-outline" size={16} color="#3B82F6" />
                    <Text className="text-xs text-blue-600 ml-2 flex-1 leading-relaxed">
                        <Text className="font-bold">1-on-1 Mentorship</Text> is your default service and is always visible to mentees. Add more services — such as resume reviews, mock interviews, or workshops — to offer variety and earn more.
                    </Text>
                </View>

                <View className="mx-5 flex-row gap-3">
                    {/* Default service card */}
                    <View className="flex-1 bg-white border-2 border-[#6B46C1] rounded-2xl p-4">
                        <View className="flex-row items-center justify-between mb-2">
                            <Text className="text-sm font-bold text-[#1F2937]">1-on-1 Mentorship Session</Text>
                            <TouchableOpacity>
                                <Ionicons name="create-outline" size={16} color="#6B7280" />
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row gap-2 mb-3">
                            <View className="bg-gray-100 px-2 py-1 rounded-full">
                                <Text className="text-xs text-gray-600">Mentorship</Text>
                            </View>
                            <View className="bg-gray-100 px-2 py-1 rounded-full flex-row items-center">
                                <Ionicons name="lock-closed" size={10} color="#6B7280" />
                                <Text className="text-xs text-gray-600 ml-1">Default</Text>
                            </View>
                        </View>
                        <Text className="text-xs text-gray-500 mb-3 leading-relaxed" numberOfLines={3}>
                            A personalized, one-on-one session tailored to your goals. Discuss challenges, get expert guidance, and build an action plan.
                        </Text>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center bg-gray-50 px-2 py-1 rounded-full">
                                <Ionicons name="time-outline" size={12} color="#6B7280" />
                                <Text className="text-xs text-gray-600 ml-1">1 hour</Text>
                            </View>
                            <Text className="text-base font-bold text-green-500">₹Free</Text>
                        </View>
                        <View className="mt-3 pt-3 border-t border-gray-100 flex-row items-center">
                            <Ionicons name="checkmark-circle" size={14} color="#22C55E" />
                            <Text className="text-xs text-green-600 ml-1">Always active & visible to mentees</Text>
                        </View>
                    </View>

                    {/* Add custom service */}
                    <TouchableOpacity className="flex-1 bg-white border border-dashed border-gray-300 rounded-2xl p-4 items-center justify-center min-h-48">
                        <View className="w-10 h-10 bg-purple-50 rounded-full items-center justify-center mb-2">
                            <Ionicons name="add" size={20} color="#6B46C1" />
                        </View>
                        <Text className="text-xs font-bold text-[#6B46C1] text-center mb-1">Add Your First Custom Service</Text>
                        <Text className="text-xs text-gray-400 text-center mb-3">Career review, mock interview, workshop...</Text>
                        <TouchableOpacity className="bg-[#6B46C1] px-4 py-2 rounded-xl flex-row items-center">
                            <Ionicons name="add" size={14} color="white" />
                            <Text className="text-white text-xs font-bold ml-1">Add Service</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}