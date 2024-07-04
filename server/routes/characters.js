import express from "express";
import {
  getAllCharacters,
  getCharacterById,
  addCharacter,
  updateCharacter,
  deleteCharacter,
} from "../controllers/characters.js";

const router = express.Router();

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);
router.post("/", addCharacter);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);

export default router;
