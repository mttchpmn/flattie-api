import { Router } from "express";

import * as FlatController from "../controllers/flat.controller";

const router = Router();

router.post("/", FlatController.createFlat);
router.get("/:id", FlatController.getFlat);

export default router;
