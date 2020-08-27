import { DB } from "../db.js";

export function get(req, res, next) {
  let getLatestPostsStmt = DB.prepare(
    `SELECT * FROM posts ORDER BY posted_date DESC LIMIT 10;`,
  );
  let latestPosts = getLatestPostsStmt.all();
  if (latestPosts.length > 0) {
    return res.status(200).json({
      message: "Here are blogs",
      posts: latestPosts,
    });
  } else {
    return res.status(200).json({ message: "No posts yet" });
  }
}
