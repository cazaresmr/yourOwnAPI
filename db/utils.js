import pool from "./index.js";

const query = async (sql, params) => {
  const [results] = await pool.execute(sql, params);
  return results;
};

export { query };
