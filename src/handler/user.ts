import { NextFunction, Request, Response } from "express";

export async function RegisterUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res.status(200).send({ post: req.body });
  //return res.json({ post: "test" });
}

export async function GetUser(req: Request, res: Response, next: NextFunction) {
  return res.status(200).send({ post: req.params.id });
  //return res.json({ post: "test" });
}
