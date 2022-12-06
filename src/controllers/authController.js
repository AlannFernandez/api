import { pool } from "../db.js";

export const getUsers = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM users");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "fail in get users" });
    }
}


export const login = async (req, res)=>{
  res.json("endpoint iniciar sesion");
}
export const register = async (req, res)=>{
  res.json("endpoint registro");
}