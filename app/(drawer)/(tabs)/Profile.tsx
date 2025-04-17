import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "../../../styles/profile.styles";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Doc } from "../../../convex/_generated/dataModel";
import { useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Loader } from "../../../components/Loader";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  const navigation = useNavigation();
  const { userId } = useAuth();
  const currentUser = useQuery(
    api.users.getUserByClerkId,
    userId ? { clerkId: userId } : "skip"
  );
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const { user } = useUser();

  const [editedProfile, setEditedProfile] = useState({
    fullname: currentUser?.fullname || "",
    bio: currentUser?.bio || "",
  });

  const [selectedPost, setSelectedPost] = useState<Doc<"posts"> | null>(null);
  const posts = useQuery(api.posts.getPostsByUser, {});

  const updateProfile = useMutation(api.users.updateProfile);
  const handleSaveProfile = () => {};

  if (!currentUser || posts === undefined) return <Loader />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.username}>{currentUser.username}</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileInfo}>
          {/*Avatar and Stats*/}
          <View style={styles.avatarAndStats}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: currentUser.image }}
                style={styles.avatar}
              />
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}> {currentUser.posts}</Text>
                <Text style={styles.statLabel}> Posts</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}> {currentUser.followers}</Text>
                <Text style={styles.statLabel}> Followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}> {currentUser.following}</Text>
                <Text style={styles.statLabel}> Following</Text>
              </View>
            </View>
          </View>
          <Text style={styles.name}> {currentUser.fullname}</Text>
          {currentUser.bio && <Text style={styles.bio}>{currentUser.bio}</Text>}

          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setEditModalVisible(true)}
            >
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name="share-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Timetable" as never)}>
            <Text>Timetable</Text>
          </TouchableOpacity>
        </View>

        {posts.length === 0 && <NoPostsFound navigation={navigation} />}
        <FlatList 
        data={posts}
        numColumns={3}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.gridItem} onPress={() => setSelectedPost(item)}>
            <Image
              source={{uri : item.imageUrl}}
              style={styles.gridImage}
            />     
          </TouchableOpacity>
        )}
        />
      </ScrollView>
    </View>
  );
}
function NoPostsFound({ navigation }: { navigation: any }) {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#121212",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name="images-outline" size={50} color="white" />
      <Text style={{ color: "black", fontSize: 18, marginTop: 10 }}>
        No posts found
      </Text>
      <Text style={{ color: "black", fontSize: 14 }}>
        Follow people to see their posts
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#007AFF",
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate("Explore" as never)}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
}
