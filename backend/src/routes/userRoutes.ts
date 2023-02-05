import { Router } from "express";
import { getUser } from "../controllers/userController"

const router = Router()

router.get("/getuser/:id", getUser)

export default router