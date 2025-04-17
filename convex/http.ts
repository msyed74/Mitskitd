import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { Webhook } from "svix";
import { api } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    console.log("Fetched webhook secret:", webhookSecret || "Not Found");

    if (!webhookSecret) {
      throw new Error("Missing CLERK_webhook_secret in env variable");
    }

    // Check headers
    const svix_id = request.headers.get("svix-id")!;
    const svix_signature = request.headers.get("svix-signature")!;
    const svix_timestamp = request.headers.get("svix-timestamp")!;
    
    if(!svix_id || !svix_signature || !svix_timestamp){
      return new Response("Missing Svix headers- svix headers", {
         status: 400 ,
        });
      }

  
    const payload = await request.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(webhookSecret);
    let evt:any;

    // Verify the webhook
    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-signature": svix_signature,
        "svix-timestamp": svix_timestamp,
      }) as any;
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return new Response("Error verifying webhook", { status: 400 });
    }
       
    const eventType = evt.type;
    if(eventType === "user.created"){
      const {id, email_addresses, first_name,last_name,image_url} = evt.data;

      const email = email_addresses[0].email_address;
      const name = '${first_name || ""} ${last_name || "" }'.trim();


      try{
        await ctx.runMutation(api.users.createUser, {
          clerkId: id,
          username: email.split("@")[0],
          email,
          fullname: name,
          image: image_url,
         
        });

      } catch (error){
         console.log("error creating user", error);
         return new Response("Error creating user", { status: 500 });
      }
  
    }
    return new Response("Webhook processed succesfully received", { status: 200 });
  }),
});

export default http;
