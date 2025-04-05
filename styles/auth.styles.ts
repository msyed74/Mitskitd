// styles/auth.styles.ts
import { COLORS } from "@/constants/theme";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    
  },
  brandContainer:{
     flex: 1,
  marginTop: height * 0.05,
 
  },
  
  brandSection: {
    alignItems: "center",
    justifyContent:"center",
    marginTop: height * 0.12,
    flexDirection :"row",
  },
 
  appName: {
    fontSize: 42,
    fontWeight: "700",
    fontFamily: "JetBrainsMono-Medium",
    color: COLORS.darkaccent,
    letterSpacing: 0.5,
    marginBottom: 0,
  },
  line: {
    borderBottomColor: COLORS.darkaccent,
    borderBottomWidth: 32,
    marginBottom: 0,
    width: 2,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: "column",
  },
  tagline: {
    fontSize: 16,
    color: COLORS.darkaccent,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 0,
  },
  bottomtagline: {
    fontSize: 16,
    fontWeight:"100",
    color: COLORS.darkaccent,
    letterSpacing: 1,
    textAlign: "center",
    textTransform: "none",
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,

  },
  illustration: {
    width: width * 0.6,
    height: width * 0.6,
    maxHeight: 200,
  },
  loginSection: {
    width: "100%",
    paddingHorizontal: 24,
    paddingBottom: 260,
    alignItems: "center",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d35400",
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 160,
    borderRadius: 14,
    marginBottom: 20,
    width: "100%",
    maxWidth: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  googleIconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.surface,
  },
  termsText: {
    textAlign: "center",
    fontSize: 12,
    color: COLORS.darkaccent,
    maxWidth: 280,
  },
});
