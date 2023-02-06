import { Router } from "express";
import { getUser, register } from "../controllers";

const router = Router()

router.post("/register", register)
router.get("/getuser/:id", getUser)

export default router