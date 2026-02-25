import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    domains: defineTable({ name: v.string(), provider: v.string(), verified: v.boolean() }).index("by_name", ["name"]),
    records: defineTable({ domainId: v.id("domains"), type: v.string(), name: v.string(), value: v.string(), ttl: v.number(), proxy: v.boolean() }).index("by_domain", ["domainId"]),
    logs: defineTable({ domainId: v.id("domains"), action: v.string(), user: v.string(), ts: v.string() }).index("by_domain", ["domainId"])
});
