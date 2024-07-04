import { query } from "../../db/utils.js";

const getAllRequests = async (req, res, next) => {
  try {
    const results = await query("SELECT * FROM requests");
    res.json(results);
  } catch (error) {
    next(error);
  }
};

export { getAllRequests };
