import { Router } from "express";
import * as authController from "../controllers/auth.controller.js"

const authRouter = Router();

// Post /api/auth/register

authRouter.post("/register" , authController.register);

//  post  api/auth/login

authRouter.post("/login" , authController.login)


// get /api/auth/getme

authRouter.get("/get-me" , authController.getMe)


// Get  /api/auth/refresh-token (end point)

authRouter.get("/refresh-token", authController.refreshToken)


// get  api/auth/logout

authRouter.get("/logout", authController.logout)


// get  api/auth/logout-all

authRouter.get("/logout-all", authController.logoutAll)

// Get /api/auth./verify-email
authRouter.get("/verify-email", authController.verifyEmail)


export default authRouter;