import { query } from "../../db/utils.js";

const requestLogger = async (req, res, next) => {
  try {
    await query("INSERT INTO requests (method, endpoint) VALUES (?, ?)", [
      req.method,
      req.originalUrl,
    ]);
  } catch (error) {
    console.error("Failed to log request", error);
  }
  next();
};

export default requestLogger;
