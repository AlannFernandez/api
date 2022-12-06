import { Router } from "express";
// import { auth } from "../controllers/authController";
import * as Auth from "../controllers/authController.js";
const router = Router();

router.get("/getUsers", Auth.getUsers);
router.post("/login", Auth.login);
router.post("/register", Auth.register);

export default router;
