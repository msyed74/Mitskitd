import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function Profile() {
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
    <View>
      <TextInput placeholder="Subject" value={subject} onChangeText={setSubject} />
      <TextInput placeholder="Time" value={time} onChangeText={setTime} />
      <TextInput placeholder="Place" value={place} onChangeText={setPlace} />
      <TextInput placeholder="Lecturer" value={lecturer} onChangeText={setLecturer} />
      <Button title="Add Schedule" onPress={handleAdd} />
    </View>
  );
}
