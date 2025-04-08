import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import {styles } from "@/styles/profile.styles"

export default function Timetable() {
  const addSchedule = useMutation(api.timetable.addSchedule);
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [lecturer, setLecturer] = useState("");

  const handleAdd = async () => {
    try {
      await addSchedule({
        subject,
        time,
        place,
        lecturer,
      });
      alert("Schedule added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add schedule.");
    }
  };

  return (

   
    <View style= {styles.timetable}>
      <Text style={styles.timetableh}>Add Schedule according to  upcoming Classes</Text>
      <View style={styles.timetablec} >
      <TextInput 
      style={styles.TextInput}
      placeholder="Subject :" value={subject} onChangeText={setSubject} />
      <TextInput
       style={styles.TextInput}
      placeholder="Time :" value={time} onChangeText={setTime} />
      <TextInput 
      style={styles.TextInput}
      placeholder="Place :" value={place} onChangeText={setPlace} />
      <TextInput
      style={styles.TextInput}
      placeholder="Lecturer :" value={lecturer} onChangeText={setLecturer} />
      </View>
      <Button 
      color="#841584"
      title="Add Schedule" onPress={handleAdd} />
    </View>
  );
}
