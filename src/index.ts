import { loadEnv } from "./config/env.config";
import { app } from "./app";

const PORT = process.env.PORT;

const startServer = () => {
  loadEnv();

  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
};
startServer();
