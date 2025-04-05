import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "@/styles/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useSSO } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function Login() {
  const { startSSOFlow } = useSSO();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
      });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace("/(drawer)");
      }
    } catch (error) {
      console.error("OAuth error", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Brand section */}
    
      <View style={styles.brandContainer}>
      
        <View style={styles.brandSection}>
          <Text style={styles.appName}>MITSKIT</Text>
          <View style={styles.line} />
          <View style={styles.row}>
            <Text style={styles.tagline}>Academy of </Text>
            <Text style={styles.tagline}>Engineering</Text>
          </View>
        
        </View>

        <Text style={styles.bottomtagline}>Whole Mits community at one place</Text>
      </View>

     {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../assets/images/mits-logo.png")} // ✅ Correct way to use local images
          style={styles.illustration} // ✅ Ensure styles are applied
          resizeMode="cover" // ✅ Optional: Adjust how the image scales
        />

        {/* Login form */}
        <View style={styles.loginSection}>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleSignIn}
            activeOpacity={0.9}
          >
            <View style={styles.googleIconContainer}>
              <Ionicons name="logo-google" size={20} color={"#FFF"} />
            </View>
            <Text style={styles.googleButtonText}>Login with College ID</Text>
          </TouchableOpacity>
          


          <Text style={styles.termsText}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
}
