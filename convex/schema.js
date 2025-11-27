import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    imageUrl: v.optional(v.string()),
    tokenIdentifier: v.string(),
    hascompletedonboarding: v.boolean(),
    location: v.optional(
      v.object({
        city: v.string(),
        state: v.string(),
        country: v.string(),
      })
    ),
    interests: v.optional(v.array(v.string())), // array of strings
    freeEventsCreated: v.number(), // number of free (e.g. trial)
    // time stamps
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]),
});
