import { Router } from "express";
import { createConsortium } from "../controllers/consortium";

const router = Router();

router.post('/create', createConsortium);
router.put('/', );
router.delete('/', );

export default router;