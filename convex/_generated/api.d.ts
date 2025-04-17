/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as deleteNonMitsUsers from "../deleteNonMitsUsers.js";
import type * as http from "../http.js";
import type * as posts from "../posts.js";
import type * as timetable from "../timetable.js";
import type * as users from "../users.js";
import type * as _messages_get from "../_messages/get.js";
import type * as _messages_send from "../_messages/send.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  deleteNonMitsUsers: typeof deleteNonMitsUsers;
  http: typeof http;
  posts: typeof posts;
  timetable: typeof timetable;
  users: typeof users;
  "_messages/get": typeof _messages_get;
  "_messages/send": typeof _messages_send;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
