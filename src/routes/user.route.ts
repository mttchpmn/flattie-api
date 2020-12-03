import { Router } from "express";

import * as UserController from "../controllers/user.controller";

const router = Router();

router.get("/", UserController.getUser);
router.post("/:id/meta", UserController.updateMetadata);

export default router;
