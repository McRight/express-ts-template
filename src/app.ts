import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middleware/error.middleware";
import { sampleRouter } from "./routes/sample.route";
import morgan from "morgan";

export const app = express();

const whitelist = ["http://localhost:3000", "http://localhost:5000"];

app.use(cors({ origin: whitelist }));
app.use(helmet());
app.disable("x-powered-by");
app.use(express.json());
app.use(morgan("dev"));

app.use("/", sampleRouter);

app.use(errorHandler);
