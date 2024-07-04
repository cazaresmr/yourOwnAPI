import { query } from "../../db/utils.js";

const getAllCharacters = async (req, res, next) => {
  try {
    const results = await query("SELECT * FROM characters");
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const getCharacterById = async (req, res, next) => {
  try {
    const results = await query("SELECT * FROM characters WHERE id = ?", [
      req.params.id,
    ]);
    if (results.length === 0) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.json(results[0]);
  } catch (error) {
    next(error);
  }
};

const addCharacter = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const results = await query(
      "INSERT INTO characters (name, description) VALUES (?, ?)",
      [name, description]
    );
    res.status(201).json({ id: results.insertId, name, description });
  } catch (error) {
    next(error);
  }
};

const updateCharacter = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const results = await query(
      "UPDATE characters SET name = ?, description = ? WHERE id = ?",
      [name, description, req.params.id]
    );
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.json({ id: req.params.id, name, description });
  } catch (error) {
    next(error);
  }
};

const deleteCharacter = async (req, res, next) => {
  try {
    const results = await query("DELETE FROM characters WHERE id = ?", [
      req.params.id,
    ]);
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export {
  getAllCharacters,
  getCharacterById,
  addCharacter,
  updateCharacter,
  deleteCharacter,
};
