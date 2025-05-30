import { View, TouchableOpacity } from "react-native";
import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/feed.styles";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import index from "@/app/(drawer)/(tabs)/_layout";
import CalendarScreen from "@/components/CalendarScreen";
import Alumni from "../../components/Alumni";
import Clubs from "../../components/Clubs";
import CustomDrawer from "../../components/CustomDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Search from "../../components/Search";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useAuth } from "@clerk/clerk-expo";
import Notification from "../../components/Notification";
import Chat from "../../components/Chat";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import Timetable from "@/components/Timetable";
import Announcements from "@/components/Announcements";
import Recruitment from "@/components/Recruitment";
import Settings from "@/components/Settings";
import Academic from "@/components/Academic";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerScreens() {
  const { signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#ffff" },
        headerTintColor: COLORS.black,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },

        headerRight: () => (
          <View style={styles.headerbutton}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Search" as never)}
            >
              <Ionicons name="search-outline" size={24} color={COLORS.black} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat" as never)}
            >
              <Ionicons
                name="chatbox-ellipses-outline"
                size={24}
                color={COLORS.black}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification" as never)}
            >
              <Ionicons
                name="notifications-outline"
                size={24}
                color={COLORS.black}
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Drawer.Screen
        name="Profile"
        component={index}
        options={{
          headerTitle: "MITSKIT",
        }}
      />
    </Drawer.Navigator>
  );
}

// Wrap Drawer inside Stack to include Notification but hide it from Drawer
export default function DrawerLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrawerScreens" component={DrawerScreens} />
      <Stack.Screen name="Notification" component={Notification} />

      <Stack.Screen name="Timetable" component={Timetable} />
      <Stack.Screen name="Announcements" component={Announcements} />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="Recruitment" component={Recruitment} />
      <Stack.Screen name="Alumni" component={Alumni} />
      <Stack.Screen name="Clubs" component={Clubs} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Academic" component={Academic} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
