import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },

  divider:{
    flexDirection:"column"
  },
  sectionone: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    marginBottom: 15,
    textAlign:"left",
    
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subjects: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    height:200,
    marginHorizontal: 10,
    borderRadius: 10,
    minWidth: 200,
  },
  line:{
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    marginVertical: 5,
  },

  sectiontwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  section: {
    backgroundColor: "#fff",
    padding: 15,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    height:160,
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 8,
    minWidth: 150,
    height:130,
    justifyContent: "center",
  },
});

