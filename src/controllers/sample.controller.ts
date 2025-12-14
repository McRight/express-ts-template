import type { Request, Response } from "express";
import { BadRequestError } from "../errors/BadRequest.error";

export const sampleController = {
  getSample: (_req: Request, res: Response) => {
    res.send("Hello, TypeScript with Express!");
  },
  getSampleError: (_req: Request, _res: Response) => {
    throw new BadRequestError({
      code: 400,
      message: "Bad request",
    });
  },
  getSampleErrorAsync: async (_req: Request, _res: Response) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    throw new BadRequestError({
      code: 400,
      message: "Bad request async",
    });
  },
};
