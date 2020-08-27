import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";

import { DB } from "./db.js";

const app = express();
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

app.use(express.json());
app.use(express.urlencoded({ limit: "2mb", extended: true }));

app // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware(),
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
