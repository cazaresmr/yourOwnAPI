import express from "express";
import dotenv from "dotenv";
import characterRoutes from "./server/routes/characters.js";
import requestLogger from "./server/middlewares/requestLogger.js";
import errorHandler from "./server/middlewares/errorHandler.js";
import { getAllRequests } from "./server/controllers/requests.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(requestLogger);

app.use("/api/characters", characterRoutes);
app.get("/api/requests", getAllRequests);

app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
