import { Router } from "express";
import { createConsortium, getConsortium } from "../controllers/consortium";
import { addUserConsortium } from "../controllers/consortium/addUserConsortiumController";

const router = Router();

router.get('/get', getConsortium);
router.post('/create', createConsortium);
router.post('/add', addUserConsortium);
router.put('/', );
router.delete('/', );

export default router;
