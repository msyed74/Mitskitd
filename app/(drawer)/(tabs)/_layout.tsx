import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarActiveTintColor: "COLORS.accent",

        tabBarInactiveTintColor: "COLORS.accent",
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingTop: 8,
          height: 60,
          elevation: 10,
          borderRadius: 20,
          width: "98%",
          alignSelf: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
          tabBarLabel: () => (
            <Text style={{ color: "black", fontSize: 8 }}>Feed</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={30} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={30} />
          ),
        }}
      />
    </Tabs>
  );
}
