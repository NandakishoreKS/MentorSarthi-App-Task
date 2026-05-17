import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
    return (
        <SafeAreaView className="flex-1 bg-[#F9F5FF]" edges={['top']}>

            {/* --- Header --- */}
            <View className="px-6 pt-4 pb-4 bg-white shadow-sm shadow-gray-200 z-10 rounded-b-3xl flex-row justify-between items-center">
                <Text className="text-2xl font-bold text-[#1F2937]">Profile</Text>
                <TouchableOpacity>
                    <Ionicons name="settings-outline" size={24} color="#1F2937" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 24, paddingBottom: 60 }}>

                {/* --- Profile Card --- */}
                <View className="bg-white rounded-3xl p-6 shadow-sm shadow-gray-200 border border-gray-100 items-center mb-6">
                    <View className="relative">
                        <Image
                            source={{ uri: "https://i.pravatar.cc/150?u=nanda" }}
                            className="w-24 h-24 rounded-full bg-gray-100 mb-4 border-2 border-[#F9F5FF]"
                        />
                        <TouchableOpacity className="absolute bottom-4 right-0 bg-[#6B46C1] p-2 rounded-full border-2 border-white shadow-sm">
                            <Ionicons name="camera" size={14} color="white" />
                        </TouchableOpacity>
                    </View>

                    <Text className="text-xl font-bold text-[#1F2937]">Nandakishore</Text>
                    <Text className="text-sm text-[#6B46C1] font-medium mt-1">AI/ML Engineer & Developer</Text>

                    {/* --- Wired up Edit Profile Button --- */}
                    <TouchableOpacity
                        className="mt-5 bg-purple-50 px-8 py-3 rounded-xl border border-purple-100"
                        onPress={() => router.push('/edit-profile')}
                    >
                        <Text className="text-[#6B46C1] font-bold">Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* --- Account Settings Group --- */}
                <Text className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 ml-2">Account</Text>
                <View className="bg-white rounded-3xl shadow-sm shadow-gray-200 border border-gray-100 overflow-hidden mb-6">
                    <SettingsRow icon="person-outline" title="Personal Information" />
                    <SettingsRow icon="card-outline" title="Payment Methods" />
                    <SettingsRow icon="notifications-outline" title="Notifications" noBorder={true} />
                </View>

                {/* --- Support & Legal Group --- */}
                <Text className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 ml-2">Support & About</Text>
                <View className="bg-white rounded-3xl shadow-sm shadow-gray-200 border border-gray-100 overflow-hidden mb-8">
                    <SettingsRow icon="help-buoy-outline" title="Help Center" />
                    <SettingsRow icon="shield-checkmark-outline" title="Privacy Policy" />
                    <SettingsRow icon="document-text-outline" title="Terms of Service" noBorder={true} />
                </View>

                {/* --- Logout Button --- */}
                <TouchableOpacity
                    className="bg-red-50 py-4 rounded-2xl flex-row justify-center items-center border border-red-100"
                    onPress={() => router.replace('/login')} // Routes back to the initial auth screen
                >
                    <Ionicons name="log-out-outline" size={20} color="#EF4444" className="mr-2" />
                    <Text className="text-red-500 font-bold text-lg ml-2">Log Out</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

// --- Reusable Component for List Rows ---
function SettingsRow({ icon, title, noBorder = false }: { icon: any, title: string, noBorder?: boolean }) {
    return (
        <TouchableOpacity className={`flex-row items-center justify-between p-4 ${noBorder ? '' : 'border-b border-gray-100'}`}>
            <View className="flex-row items-center">
                <View className="bg-[#F9F5FF] p-2 rounded-xl mr-4">
                    <Ionicons name={icon} size={20} color="#6B46C1" />
                </View>
                <Text className="text-[#1F2937] font-semibold text-base">{title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>
    );
}