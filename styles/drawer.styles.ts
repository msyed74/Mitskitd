// styles/drawer.styles.ts
import { COLORS } from "@/constants/theme";
import { getTimetable } from "@/convex/timetable";
import { Button, Dimensions, StyleSheet } from "react-native";

export const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.surface,
  },
  button: {
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
  },
  buttonlogout: {
    justifyContent: "space-between",
    borderWidth: 0,
    borderRadius: 25,
  },
  buttoncontainer: {
    flexDirection: "column",
    justifyContent: "space-between",

    backgroundColor: "#F8F9FA",
    borderBottomColor: "#ddd",
  },

  roadmapContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#F8F9FA",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  title: {
    fontSize: 20,
    fontWeight: "semibold",
    textAlign: "center",
    marginBottom: 0,
    color: "red",
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

  selectedDate: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "red",
  },
  buttontext: {
    fontSize: 16,
    color: "black",
    fontWeight: "300",
    marginRight: 25,
  },
  logouttext: {
    fontSize: 16,
    color: "black",
    fontWeight: "300",
    marginRight: 25,
  },
  imagecontainer: {
    alignItems: "flex-start",
    marginVertical: 20,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#007BFF", // Optional: adds a nice blue border
  },

  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
    marginHorizontal: 10,
  },

  subheadertext: {
    fontSize: 16,
    textAlign: "left",
    color: "#333",
    
  },
  headertext: {
    fontSize: 21,
    paddingVertical: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  alertWrapper: {
    marginVertical: 1,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  
  alertItem: {
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  text :{
    fontSize: 26,
    color: "black",
    textAlign: "left",
    fontWeight: "500",
  },
  
  alerttext: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: "500",
  },
  
});
