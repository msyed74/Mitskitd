import {mutation } from '../_generated/server' ;
import { v } from 'convex/values';

export const sendMessage = mutation({
    args:{
        senderId :v.id("users"),
        receiverId :v.id("users"),
        text:v.string(),
    },
    handler:async (ctx,args) => {
        await ctx.db.insert('messages',{
            senderId:args.senderId,
            receiverId:args.receiverId,
            text:args.text,
            content: args.text, 
            timestamp:Date.now(),
        });
     
    
    },
})
