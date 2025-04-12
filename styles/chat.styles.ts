import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    chatBox: {
      flexGrow: 1,
      justifyContent: "flex-end",
    },
    messageBubble: {
      marginVertical: 5,
      padding: 10,
      borderRadius: 10,
      maxWidth: "70%",
    },
    mine: {
      backgroundColor: "#dcf8c6",
      alignSelf: "flex-end",
    },
    theirs: {
      backgroundColor: "#eee",
      alignSelf: "flex-start",
    },
    inputRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10,
    },
    input: {
      flex: 1,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      marginRight: 10,
    },
  });
  