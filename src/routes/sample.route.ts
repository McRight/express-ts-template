import express from "express";
import { sampleController } from "../controllers/sample.controller";

export const sampleRouter = express.Router();

sampleRouter.get("/", sampleController.getSample);

sampleRouter.get("/error", sampleController.getSampleError);

sampleRouter.get("/error-async", sampleController.getSampleErrorAsync);
