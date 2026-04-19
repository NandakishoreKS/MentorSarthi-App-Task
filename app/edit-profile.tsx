import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EditProfileScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>

            {/* --- Header --- */}
            <View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-100 z-10 bg-white">
                <TouchableOpacity onPress={() => router.back()} className="px-2 -ml-2">
                    <Text className="text-gray-500 text-base font-medium">Cancel</Text>
                </TouchableOpacity>
                <Text className="text-lg font-bold text-[#1F2937]">Edit Profile</Text>
                <TouchableOpacity onPress={() => router.back()} className="px-2 -mr-2">
                    <Text className="text-[#6B46C1] text-base font-bold">Save</Text>
                </TouchableOpacity>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 24, paddingBottom: 60 }}>

                    {/* --- Avatar Update Section --- */}
                    <View className="items-center mb-8 pt-4">
                        <View className="relative">
                            <Image
                                source={{ uri: "https://i.pravatar.cc/150?u=nanda" }}
                                className="w-28 h-28 rounded-full bg-gray-100 border-4 border-purple-50"
                            />
                            <TouchableOpacity className="absolute bottom-0 right-0 bg-[#6B46C1] w-10 h-10 rounded-full border-4 border-white items-center justify-center shadow-sm">
                                <Ionicons name="camera" size={18} color="white" />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity className="mt-4">
                            <Text className="text-[#6B46C1] font-bold">Change Profile Picture</Text>
                        </TouchableOpacity>
                    </View>

                    {/* --- Form Fields --- */}
                    <View className="space-y-5">
                        <View>
                            <Text className="text-sm font-bold text-gray-700 mb-2 ml-1">Full Name</Text>
                            <TextInput
                                className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-base text-[#1F2937]"
                                defaultValue="Nandakishore"
                            />
                        </View>

                        <View>
                            <Text className="text-sm font-bold text-gray-700 mb-2 ml-1">Professional Bio</Text>
                            <TextInput
                                className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-base text-[#1F2937]"
                                defaultValue="AI/ML Engineer & Full Stack Developer"
                                multiline
                                numberOfLines={3}
                                textAlignVertical="top"
                            />
                        </View>

                        <View>
                            <Text className="text-sm font-bold text-gray-700 mb-2 ml-1">Professional Email Address</Text>
                            <TextInput
                                className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-base text-[#1F2937]"
                                placeholder="Enter your professional email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <View>
                            <Text className="text-sm font-bold text-gray-700 mb-2 ml-1">Portfolio / LinkedIn URL</Text>
                            <TextInput
                                className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-base text-[#1F2937]"
                                placeholder="https://"
                                keyboardType="url"
                                autoCapitalize="none"
                            />
                        </View>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}