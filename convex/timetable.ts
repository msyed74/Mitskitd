import {query, mutation} from "./_generated/server"
import {v}from "convex/values";

import { getAuthtenticatedUser } from "./users";
export const getTimetable = query(async ({db}) => {
    return await db.query("timetable").collect();
}) ;
 // Import user authentication helper

export const addSchedule = mutation({
  args: {
    subject: v.string(),
    time: v.string(),
    place: v.string(),
    lecturer: v.string(),
  },
  handler: async (ctx, { subject, time, place, lecturer }) => {
    const currentUser = await getAuthtenticatedUser(ctx);
    if (!currentUser) throw new Error("User not authenticated");

    await ctx.db.insert("timetable", {
      userId: currentUser._id, // Automatically use logged-in user
      subject,
      time,
      place,
      lecturer,
    });
  },
});


export const updateSchedule = mutation({
    args: {
      id: v.id("timetable"),
      subject: v.string(),
      time: v.string(),
      place: v.string(),
      lecturer: v.string(),
    },
    handler: async ({ db }, { id, subject, time, place, lecturer }) => {
      const schedule = await db.get(id);
      if (!schedule) throw new Error("Schedule not found");
  
      await db.patch(id, { subject, time, place, lecturer });
    },
  });
  ;
