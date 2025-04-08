import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "../../../styles/profile.styles";
import Timetable from "@/components/timetable";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.username}>Profile</Text>
        </View>
      </View>

      <View style={styles.profileInfo}>
        <View style={styles.avatarAndStats}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: "https://example.com/avatar.jpg" }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.statsContainer}>
            <Text>Followers: 100</Text>
            <Text>Following: 50</Text>
          </View>
        </View>
         <View>
        <TouchableOpacity onPress={() => navigation.navigate("Timetable")}>
          <Text>Timetable</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
