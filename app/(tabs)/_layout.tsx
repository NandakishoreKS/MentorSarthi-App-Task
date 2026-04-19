import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Applying the MentorSarthi Color Palette
        tabBarActiveTintColor: '#6B46C1', // Primary Brand Purple
        tabBarInactiveTintColor: '#6B7280', // Secondary Text Gray
        tabBarStyle: {
          backgroundColor: '#FFFFFF', // Clean white background
          borderTopWidth: 1,
          borderTopColor: '#F3F4F6', // Subtle top border for clean separation
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
        },
        headerStyle: {
          backgroundColor: '#F9F5FF', // Soft purple background for headers
          elevation: 0, // Removes shadow on Android for a premium, flat look
          shadowOpacity: 0, // Removes shadow on iOS
        },
        headerTitleStyle: {
          color: '#1F2937', // Primary Text color for headers
          fontWeight: '600',
        },
      }}>

      {/* 1. Discover / Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />

      {/* 2. Mentor Catalog Tab */}
      <Tabs.Screen
        name="mentors"
        options={{
          title: 'Mentors',
          tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color={color} />,
        }}
      />

      {/* 3. Dashboard Tab */}
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <Ionicons name="grid" size={24} color={color} />,
        }}
      />

      {/* 4. Settings & Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}