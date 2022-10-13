import express, { NextFunction, Request, Response } from "express";
import { GetUser, RegisterUser } from "./handler/user";

export function userApi() {
  const api = express.Router();

  api.post("/user", RegisterUser);

  api.get("/user/:id", GetUser);

  return api;
}
