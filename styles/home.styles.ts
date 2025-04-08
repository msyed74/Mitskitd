import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },

  divider:{
    flexDirection:"row"
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
    flexDirection: "column",
    display: "flex",
    borderRadius: 10,
  },
  section: {
    padding: 0,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    height:160,
    width:190
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    padding: 1,
    marginTop:20,
    borderRadius: 8,
    minWidth: 160,
    height:130,
    justifyContent: "center",
  },
});

