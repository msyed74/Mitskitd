import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
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
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  selectedDate: { fontSize: 16, textAlign: "center", marginTop: 10, color: "blue" },
});

export default CalendarScreen;
