import { NextFunction, Request, Response } from "express";
import { getUserByEmail } from "../modules/auth0/auth0-api";

import * as UserService from "../services/user.service";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, email } = req.query;

    let user;
    if (email) user = await UserService.getUserByEmail(email as string);

    // if (email) user = await getUserByEmail(email as string);

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateMetadata = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    const user = await UserService.updateMetadata(id, payload);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
