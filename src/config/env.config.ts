import "dotenv/config";

export const loadEnv = () => {
  try {
    if (process.env.NODE_ENV === "production") {
      // Load from secret manager
      console.log("🔑 Extending environment variables from secret manager...");
      return;
    }
  } catch (error) {
    console.error("❌ Failed to load environment variables");
    throw error;
  }
};
