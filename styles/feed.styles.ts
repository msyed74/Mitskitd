// styles/feed.styles.ts
import { COLORS } from "@/constants/theme";
import { Dimensions, Platform, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 1,
    borderBottomWidth: 1,
    justifyContent: "space-between",
    borderBottomColor: COLORS.surface,
  },
  signout: {
    fontSize: 1,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  error: {
    fontSize: 1,
    color: "red",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 8,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "900",
    textTransform: "none",
    justifyContent:"flex-start",
    fontFamily: "JetBrainsMono-Medium",
    color: "black",
  },
  storiesContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.surface,
  },
  storyWrapper: {
    alignItems: "center",
    marginHorizontal: 8,
    width: 72,
  },
  headerbutton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: 100,
    marginRight:20,
  },
  storyRing: {
    width: 80,
    height: 80,
    borderRadius: 50,
    padding: 2,
    backgroundColor: COLORS.background,
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginBottom: 4,
  },
  noStory: {
    borderColor: COLORS.grey,
  },
  storyAvatar: {
    width: 78,
    height: 78,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.black,
  },
  storyUsername: {
    fontSize: 11,
    color: COLORS.black,
    textAlign: "center",
  },
  post: {
    marginBottom: 16,

  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  postHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  postAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  postUsername: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.black,

  },
  postImage: {
    width: width,
    height: width,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  postActionsLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  postInfo: {
    paddingHorizontal: 12,
  },
  likesText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.black,
    marginBottom: 6,
  },
  captionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 6,
  },
  drawer :{
    backgroundColor: COLORS.background,
    flex: 2,
  },
  captionUsername: {
    fontSize: 14,
    fontWeight: "600",
    color: "#dddd",
    marginRight: 6,
  },
  captionText: {
    fontSize: 14,
    color: COLORS.black,
    flex: 1,
  },
  commentsText: {
    fontSize: 14,
    color: COLORS.grey,
    marginBottom: 4,
  },
  timeAgo: {
    fontSize: 12,
    color: COLORS.grey,
    marginBottom: 8,
  },
  modalContainer: {
    backgroundColor: COLORS.background,
    marginBottom: Platform.OS === "ios" ? 44 : 0,
    flex: 1,
    marginTop: Platform.OS === "ios" ? 44 : 0,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 56,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.surface,
  },
  modalTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  commentsList: {
    flex: 1,
  },
  commentContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.surface,
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  commentUsername: {
    color: COLORS.white,
    fontWeight: "500",
    marginBottom: 4,
  },
  commentText: {
    color: COLORS.white,
    fontSize: 14,
    lineHeight: 20,
  },
  commentTime: {
    color: COLORS.grey,
    fontSize: 12,
    marginTop: 4,
  },
  commentInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.surface,
    backgroundColor: COLORS.background,
  },
  input: {
    flex: 1,
    color: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 12,
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    fontSize: 14,
  },
  postButton: {
    color: COLORS.primary,
    fontWeight: "600",
    fontSize: 14,
  },
  postButtonDisabled: {
    opacity: 0.5,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});
