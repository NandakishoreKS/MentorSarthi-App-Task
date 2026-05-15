import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#1F2937', // Stark dark gray/black
        tabBarInactiveTintColor: '#D1D5DB', // Faint muted gray
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0, // Removes the harsh top line
          elevation: 15,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -10 },
          shadowOpacity: 0.03, // Ultra-soft shadow
          shadowRadius: 20,
          height: 85,
          paddingTop: 10,
        },
      }}>

      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center">
              <Ionicons name={focused ? 'compass' : 'compass-outline'} size={26} color={color} />
              {/* Premium Touch: Tiny dot indicator instead of a bulky label */}
              {focused && <View className="w-1 h-1 bg-[#1F2937] rounded-full mt-1.5" />}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center">
              <Ionicons name={focused ? 'grid' : 'grid-outline'} size={26} color={color} />
              {focused && <View className="w-1 h-1 bg-[#1F2937] rounded-full mt-1.5" />}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center">
              <Ionicons name={focused ? 'person' : 'person-outline'} size={26} color={color} />
              {focused && <View className="w-1 h-1 bg-[#1F2937] rounded-full mt-1.5" />}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}