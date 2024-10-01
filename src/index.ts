import express from "express";
import { createServer } from "http";
import cors from "cors";
import pkg from "body-parser";

const { json } = pkg;
const app = express();
const httpServer = createServer(app);

app.use(json());
app.use(
  cors<cors.CorsRequest>({
    origin: "*",
    credentials: true,
  })
);

httpServer.listen(4000, () => {
  console.log("Server listening on port 4000");
});
