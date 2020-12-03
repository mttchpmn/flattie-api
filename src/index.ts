import "dotenv/config";
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import flatRouter from "./routes/flat.route";
import userRouter from "./routes/user.route";

import config from "./config";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.status(200).json({ status: "online" }));

app.use("/flats", flatRouter);
app.use("/users", userRouter);

app.listen(config.port, () =>
  console.log(`Server listening at port: ${config.port}`)
);
