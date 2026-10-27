import { Router } from "express";
import { RegisteUser, LoginUser } from "../controller/Auth.controller.js";

const AuthRouter = Router()

AuthRouter.post('/signup', RegisteUser)
AuthRouter.post('/sign', LoginUser)

export default AuthRouter