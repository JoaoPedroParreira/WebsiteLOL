import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const riotApi = axios.create({
  baseURL: "https://br1.api.riotgames.com",
  headers: {
    "X-Riot-Token": process.env.RIOT_API_KEY
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/champions/rotation", async (req, res) => {
  try {
    const response = await riotApi.get("/lol/platform/v3/champion-rotations");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: "Falha ao buscar champion rotation.",
      details: error.response?.data || error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
