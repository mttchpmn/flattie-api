import { NextFunction, Request, Response } from "express";

import * as FlatService from "../services/flat.service";

export const createFlat = (req: Request, res: Response, next: NextFunction) => {
  try {
    const flat = req.body;

    const id = FlatService.createFlat(flat);

    res.status(201).json({ id });
  } catch (error) {
    next(error);
  }
};

export const getFlat = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const flat = FlatService.getFlat(id);

    res.status(200).json(flat);
  } catch (error) {
    next(error);
  }
};
