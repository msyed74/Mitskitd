import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "@/styles/feed.styles";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useState } from "react";
import { toggleLike } from "@/convex/posts";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {Id } from "@/convex/_generated/dataModel";


  type PostProps = {
     post: {
        _id: Id<"posts">;
        imageUrl: string;
        caption?: string;
        likes: number;
        comments: number;
        _creationTime: number;
        isLiked: boolean;
        isBookmarked: boolean;
        author:{
            _id:string,
            username:string,
            image:string
        }

    }
};


export default function Post({ post }: PostProps) {
    const [isLiked, setIsLiked] = useState(post.isLiked);
    const [likesCount, setLikesCount] = useState(post.likes);
    
    const toggleLike = useMutation(api.posts.toggleLike)

    const handleLike = async () => {
        try {
        const newIsLiked = await toggleLike({postId: post._id});
            setIsLiked(newIsLiked);
            setLikesCount((prev) => (newIsLiked ? prev + 1 : prev - 1)); 
        } catch (error) {
            console.error( "Error toggling like :",error);
    }
    };

  return (
    <View style={styles.post}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <Link href={"/(tabs)/Profile"}>
          <TouchableOpacity style={styles.postHeaderLeft}>
            <Image
              source={post.author.image}
              style={styles.postAvatar}
              contentFit="cover"
              transition={200}
              cachePolicy="memory-disk"
            />
            <Text style={styles.postUsername}>{post.author.username}</Text>
          </TouchableOpacity>
        </Link>
        {/* todo fix it later  */}

        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={14} color={COLORS.black} />
        </TouchableOpacity>
        {/* todo fix it later  
        <TouchableOpacity>
          <Ionicons name="trash-outline" size={14} color={COLORS.white} />
        </TouchableOpacity>
*/}
      </View>
      {/* Image */}
      <Image
        source={post.imageUrl}
        style={styles.postImage}
        contentFit="cover"
        transition={200}
        cachePolicy="memory-disk"
      />

      {/* Post Actions */}
      <View style={styles.postActions}>
        <View style={styles.postActionsLeft}>
          <TouchableOpacity onPress={handleLike}>
            <Ionicons name={isLiked ? "heart" : "heart-outline" } 
            size={24} 
            color={isLiked ? COLORS.accent : COLORS.black} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      {/* Post Info */}
      <View style={styles.postInfo}>
        <Text style={styles.likesText}>
            {likesCount > 0 ? `${likesCount.toLocaleString()} likes` : " Be the first to likes" }
            </Text>
        {post.caption && (
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{post.caption}</Text>
          </View>
        )}

        <TouchableOpacity>
          <Text style={styles.commentsText}>View all comments</Text>
        </TouchableOpacity>

        <Text style={styles.timeAgo}>2 hours ago</Text>
      </View>
    </View>
  );
}
