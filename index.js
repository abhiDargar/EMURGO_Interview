import express from "express";
import 'dotenv/config'

import bodyParser from "body-parser";

import getArticles from "./routes/mainRoutes.js";

const app = express();
const PORT = process.env.SERVER_LISTEN_PORT;

app.use(bodyParser.json());
app.use("/getArticles", getArticles);
app.get("/", (req, res) => res.send("Welcome to the News API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
