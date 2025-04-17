import { query } from "../_generated/server";
import { v } from "convex/values";


export const getMessages = query({
  args: {
    senderId: v.id("users"),
    receiverId: v.id("users"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("messages")
      .filter((q) =>
        q.or(
          q.and(
            q.eq(q.field("senderId"), args.senderId),
            q.eq(q.field("receiverId"), args.receiverId)
          ),
          q.and(
            q.eq(q.field("senderId"), args.receiverId),
            q.eq(q.field("receiverId"), args.senderId)
          )
        )
      )
      .order("asc") // ordering happens after filtering
      .collect();
  },
});
