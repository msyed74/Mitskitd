import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Calendar } from "react-native-calendars";

const CalendarScreen = () => {};
const [selectedDate, setSelectedDate] = useState("");

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Default Drawer Items */}
      <DrawerItemList {...props} />

      <View style={styles.container}>
        <Text style={styles.title}>MITS CALENDAR</Text>

        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: "blue" },
          }}
          theme={{
            todayTextColor: "red",
            arrowColor: "blue",
          }}
        />

        {selectedDate ? (
          <Text style={styles.selectedDate}>MITS Calendar {selectedDate}</Text>
        ) : null}
      </View>

      {/* Roadmap Section */}
      <View style={styles.roadmapContainer}>
        <Text style={styles.title}>Roadmap to Success 🚀</Text>

        <ScrollView contentContainerStyle={styles.roadmapContent}>
          <View style={styles.step}>
            <Text style={styles.stepTitle}>📌 Step 1: Learn the Basics</Text>
            <Text style={styles.stepText}>
              Understand JavaScript, React, and React Native fundamentals.
            </Text>
          </View>

          <View style={styles.step}>
            <Text style={styles.stepTitle}>📌 Step 2: Learn Navigation</Text>
            <Text style={styles.stepText}>
              Get familiar with React Navigation and different navigators.
            </Text>
          </View>

          <View style={styles.step}>
            <Text style={styles.stepTitle}>📌 Step 3: State Management</Text>
            <Text style={styles.stepText}>
              Explore Redux, Zustand, or React Context API.
            </Text>
          </View>

          <View style={styles.step}>
            <Text style={styles.stepTitle}>📌 Step 4: Backend & APIs</Text>
            <Text style={styles.stepText}>
              Integrate APIs and backend services using Axios or Fetch.
            </Text>
          </View>

          <View style={styles.step}>
            <Text style={styles.stepTitle}>📌 Step 5: Deployment</Text>
            <Text style={styles.stepText}>
              Learn how to build and publish your app on the App Store & Play
              Store.
            </Text>
          </View>
        </ScrollView>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  roadmapContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#F8F9FA",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  roadmapContent: {
    paddingBottom: 20,
  },
  step: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  stepText: {
    fontSize: 14,
    color: "#333",
  },

  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
 
  selectedDate: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "blue",
  },
});
