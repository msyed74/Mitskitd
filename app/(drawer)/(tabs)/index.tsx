import { View, Text, TouchableOpacity, VirtualizedList } from "react-native";
import React from "react";
import { styles } from "@/styles/home.styles";
import { format } from "date-fns"; // Only import the 'format' function
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useNavigation } from "@react-navigation/native";


const today = new Date();
const formattedDate = format(today, "EEEE dd yyyy"); // Format it as YYYY-MM-DD

export default function index() {
  const navigation = useNavigation();
  const timetable = useQuery(api.timetable.getTimetable);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        
        >
      <View style={styles.sectionone}>
        <Text
        > Today's Schedule </Text>
        <Text style={styles.text}> {formattedDate}</Text>
        <ScrollView horizontal>
          {timetable?.map((item, index) => (
            <View style={styles.subjects}>
              <Text
               style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}
              >{item.subject}  

              </Text>
              <View style={styles.line}></View>
              <Text 
                style={{
                  fontSize: 16,
                  color: "#333",
                  marginBottom: 10,
                  marginTop: 20,
                  flexDirection:"row"
                }}
              >Time : {item.time}</Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#333",
                  marginBottom: 10,
                 
                  flexDirection:"row"
                }}
              >Place : {item.place}</Text>
              <Text
               style={{
                fontSize: 16,
                color: "#333",
                marginBottom: 10,
                flexDirection:"row"
              }}
              >Faculty : {item.lecturer}</Text>
            </View>
            
          ))}

         
        </ScrollView>
      </View>
      <ScrollView 
        horizontal
       >
        <View style={styles.divider}>
        <View style={styles.sectiontwo}>
          <View style={styles.section}>
            <TouchableOpacity 
            onPress={() => {navigation.navigate("Announcements" as never)}}

            style={styles.button}>
              <Ionicons name="megaphone" size={40} color="black" />{" "}
              {/* Announcement Icon */}
              <Text style={styles.text}>Announcements</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <TouchableOpacity 
            onPress={() => navigation.navigate("Clubs" as never)}
            style={styles.button}>
              <Ionicons name="business" size={40} color="black" />{" "}
              {/* Clubs Icon */}
              <Text style={styles.text}>Clubs</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <TouchableOpacity
            onPress={( ) => navigation.navigate("Alumni" as never)}
            style={styles.button}>
              <Ionicons name="people" size={40} color="black" />{" "}
              {/* Alumni Icon */}
              <Text style={styles.text}>Alumni</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <TouchableOpacity
            onPress={( ) => navigation.navigate("Recruitment" as never)} 
            style={styles.button}>
              <Ionicons name="people-circle" size={40} color="black" />{" "}
              {/* Recruitment Teams Icon */}
              <Text style={styles.text}>Recruitment</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sectiontwo}>
          <View style={styles.section}>
            <TouchableOpacity 
            onPress={() => navigation.navigate("Academic" as never)}
            style={styles.button}>
              <Ionicons name="calendar" size={40} color="black" />{" "}
              {/* Announcement Icon */}
              <Text style={styles.text}>Academic</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="business" size={40} color="black" />{" "}
              {/* Clubs Icon */}
              <Text style={styles.text}>Clubs</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="people" size={40} color="black" />{" "}
              {/* Alumni Icon */}
              <Text style={styles.text}>Alumni</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="people-circle" size={40} color="black" />{" "}
              {/* Recruitment Teams Icon */}
              <Text style={styles.text}>Recruitment Teams</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
        
      </ScrollView>
     </ScrollView>
    </View>
  );
}
