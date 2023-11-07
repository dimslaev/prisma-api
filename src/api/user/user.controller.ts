import { Request, Response, NextFunction } from "express";
import * as userService from "./user.service";

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await userService.getAll());
  } catch (err) {
    next(err);
  }
}

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await userService.get(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(201).json(await userService.create(req.body));
  } catch (err) {
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await userService.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await userService.remove(req.params.id));
  } catch (err) {
    next(err);
  }
}

export { getAll, get, create, update, remove };
