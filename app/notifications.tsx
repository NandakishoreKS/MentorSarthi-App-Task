import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // <-- Upgraded import!

// Mock Data
const NOTIFICATIONS = [
    {
        id: 1,
        type: "reminder",
        title: "Session Starting Soon!",
        message: "Your video call with Pradeep Yuvaraj starts in 15 minutes. Get ready!",
        time: "15 mins ago",
        icon: "time",
        color: "bg-blue-500",
        read: false
    },
    {
        id: 2,
        type: "payment",
        title: "Payment Successful",
        message: "Your payment of ₹1,770 for the upcoming session has been processed.",
        time: "2 hours ago",
        icon: "card",
        color: "bg-green-500",
        read: false
    },
    {
        id: 3,
        type: "response",
        title: "Request Accepted",
        message: "Shashank Tiwari has accepted your request for a Management review.",
        time: "Yesterday",
        icon: "checkmark-circle",
        color: "bg-purple-500",
        read: true
    },
    {
        id: 4,
        type: "confirmation",
        title: "Booking Confirmed",
        message: "Your session with Vivek Pawar is locked in for April 12th at 2:00 PM.",
        time: "2 days ago",
        icon: "calendar",
        color: "bg-yellow-500",
        read: true
    }
];

export default function NotificationsScreen() {
    return (
        // Added edges={['top', 'bottom']} so it perfectly hugs the device frame
        <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>

            {/* --- Header --- */}
            <View className="flex-row items-center px-6 py-4 border-b border-gray-100 z-10 bg-white">
                <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full bg-gray-50 mr-4">
                    <Ionicons name="arrow-back" size={24} color="#1F2937" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-[#1F2937]">Notifications</Text>
            </View>

            {/* --- Notifications List --- 
          Added className="flex-1" to constrain the scroll area to the visible screen
      */}
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
                {NOTIFICATIONS.map((notif) => (
                    <TouchableOpacity
                        key={notif.id}
                        className={`flex-row p-5 border-b border-gray-100 ${notif.read ? 'bg-white' : 'bg-purple-50/50'}`}
                    >
                        {/* Icon Bubble */}
                        <View className={`w-12 h-12 rounded-full items-center justify-center mr-4 ${notif.color} shadow-sm shadow-gray-200`}>
                            <Ionicons name={notif.icon as any} size={24} color="white" />
                        </View>

                        {/* Content */}
                        <View className="flex-1">
                            <View className="flex-row justify-between items-start mb-1">
                                <Text className={`font-bold text-base ${notif.read ? 'text-[#1F2937]' : 'text-[#6B46C1]'}`}>
                                    {notif.title}
                                </Text>
                                <Text className="text-xs text-gray-400 mt-1">{notif.time}</Text>
                            </View>
                            <Text className="text-gray-600 text-sm leading-snug">{notif.message}</Text>
                        </View>

                        {/* Unread Indicator */}
                        {!notif.read && (
                            <View className="w-2.5 h-2.5 bg-[#6B46C1] rounded-full absolute top-6 right-5" />
                        )}
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </SafeAreaView>
    );
}