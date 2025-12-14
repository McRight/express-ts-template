import { app } from "./app";
import { loadEnv } from "./config/env.config";

const PORT = process.env.PORT;

const startServer = () => {
  loadEnv();

  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
};
startServer();
