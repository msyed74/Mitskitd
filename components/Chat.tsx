import { View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import { api } from "../convex/_generated/api";
import { useQuery, useMutation } from 'convex/react';
import { useUser } from "@clerk/clerk-expo";
import { FlatList, TextInput, Button } from 'react-native';
import { styles } from "../styles/chat.styles";

interface ChatProps {
  senderId: string;
  receiverId: string;
}

export default function Chat({ senderId, receiverId }: ChatProps) {
  const user = useUser();
  const messages = useQuery(api.getMessages, {
    senderId,
    receiverId,
  });
  const sendMessage = useMutation(api.sendMessage);
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (text.trim() === "") return;
    try {
      await sendMessage({
        senderId,
        receiverId,
        text: text.trim(),
      });
      setText("");
    } catch (error) {
      Alert.alert("Error", "Failed to send message. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages || []}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBubble,
              item.senderId === senderId ? styles.mine : styles.theirs,
            ]}
          >
            <Text>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.chatBox}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={text}
          onChangeText={setText}
          accessibilityLabel="Message Input"
        />
        <Button title="Send" onPress={handleSend} accessibilityLabel="Send Message" />
      </View>
    </View>
  );
}
