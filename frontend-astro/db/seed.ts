import { db, Comment } from "astro:db";

export default async function () {
  await db.insert(Comment).values([
    { author: "Matti", body: "Hope you like Astro DB!" },
    { author: "Martti", body: "Enjoy!" },
  ]);
}
