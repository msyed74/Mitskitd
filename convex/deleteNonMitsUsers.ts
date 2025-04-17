import {mutation} from "./_generated/server";


export const deleteNonMitsUsers = mutation({
    handler:async (ctx ) =>{
        const allUsers = await ctx.db.query("users")
        .collect()

        const usersToDelete = allUsers.filter(
            (user) => !user.email.endsWith("mitsgwl.ac.in")
            
        )
        for (const user of usersToDelete){
            await ctx.db.delete(user._id);
            console.log("Deleted user:", user.username, user.email);
            alert("Deleting non-MITS users");
        } 
    }
})