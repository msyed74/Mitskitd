import React, { useEffect, useRef, useState } from "react";
import { COLORS } from "@/constants/theme";
import { View, Text, ScrollView, Animated, Easing, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Calendar } from "react-native-calendars";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/drawer.styles";
import { useQuery } from "convex/react";
import { useUser } from "@clerk/clerk-expo";
import { api } from "@/convex/_generated/api";
import { format } from "date-fns";

import { DrawerContentComponentProps } from "@react-navigation/drawer";

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const scrollx = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView>(null);

  const CalendarScreen = () => {};
  const { userId } = useAuth();
  const currentUser = useQuery(
    api.users.getUserByClerkId,
    userId ? { clerkId: userId } : "skip"
  );
  const { user } = useUser();
  const [selectedDate, setSelectedDate] = useState("");
  const { signOut } = useAuth();
  useEffect(() => {
    const interval = 20; // scroll speed
    let scrollValue = 0;
    const itemWidth = 160; // approximate width of one alert item
    const totalItems = alertItems.length * 2;
    const totalScrollWidth = itemWidth * totalItems;

    const scroller = setInterval(() => {
      scrollValue += 1;

      if (scrollRef.current) {
        scrollRef.current.scrollTo({ x: scrollValue, animated: false });

        // Reset scroll when we reach halfway (original array duplicated)
        if (scrollValue >= totalScrollWidth / 2) {
          scrollValue = 0;
          scrollRef.current.scrollTo({ x: 0, animated: false });
        }
      }
    }, interval);

    return () => clearInterval(scroller);
  }, []);

  const alertItems = [
    "📢 Events",
    "📝 Announcements",
    "🎉 Clubs",
    "💼 Recruitment",
    "🎓 Alumni",
    "📅 Timetable",
    "📘 Academics",
    "💬 Chat",
  ];

  const timetable = useQuery(api.timetable.getTimetable);

  const today = new Date();
  const formattedDate = format(today, "EE, MMMM dd ");
  return (
    <DrawerContentScrollView {...props}>
      {/* Default Drawer Items 
      <DrawerItemList {...props} />
*/}
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imagecontainer}>
            <Image
              source={{ uri: currentUser?.image }}
              style={styles.image}
            />
          </View>
          <Text style={styles.headertext}>Hello, {currentUser?.username}</Text>
          <Text style={styles.subheadertext}>Enhance Your MITS Journey</Text>
        </View>
        <View style={styles.divider} />
        <Text style={styles.text}> {formattedDate}</Text>
        <View style={styles.divider} />

        <Text style={styles.title}>MITS CALENDAR</Text>

        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: "red" },
          }}
          theme={{
            todayTextColor: "red",
            arrowColor: "red",
          }}
        />

        {selectedDate ? (
          <Text style={styles.selectedDate}>📅 {selectedDate}</Text>
        ) : null}

        <View style={styles.divider} />
        <View style={styles.alertWrapper}>
          <Animated.ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            scrollEnabled={false}
          >
            {alertItems.map((item, index) => (
              <View key={index} style={styles.alertItem}>
                <Text style={styles.alerttext}>{item}</Text>
              </View>
            ))}
          </Animated.ScrollView>
        </View>
        <View style={styles.divider} />
        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                padding: 10,
                borderRadius: 25,
                margin: 0,
              }}
              onPress={() => props.navigation.navigate("Notification")}
            >
              <Text style={styles.buttontext}>
                <View style={{ paddingRight: 15, alignItems: "center" }}>
                  <Ionicons
                    name="notifications-outline"
                    size={16}
                    color="Black"
                  />
                </View>
                Notifications
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                padding: 10,
                borderRadius: 25,
                margin: 0,
              }}
              onPress={() => props.navigation.navigate("Recruitment")}
            >
              <Text style={styles.buttontext}>
                <View style={{ paddingRight: 15, alignItems: "center" }}>
                  <Ionicons name="people-outline" size={16} color="Black" />
                </View>
                Recruitment
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                padding: 10,
                borderRadius: 25,
                margin: 0,
              }}
              onPress={() => props.navigation.navigate("Settings")}
            >
              <Text style={styles.buttontext}>
                <View style={{ paddingRight: 15, alignItems: "center" }}>
                  <Ionicons name="settings-outline" size={16} color="Black" />
                </View>
                Settings
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.buttonlogout}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              padding: 10,
              borderRadius: 25,
              margin: 0,
            }}
            onPress={() => signOut()}
          >
            <Text style={styles.logouttext}>
              <View style={{ paddingRight: 15, alignItems: "center" }}>
                <Ionicons name="log-out-outline" size={16} color="Black" />
              </View>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
