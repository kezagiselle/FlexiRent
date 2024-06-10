import express from "express";
const userRouter = express.Router();
import userControllers from "../controllers/user";
import allValidation from "../Utilis/validation.js"

userRouter.post('/SignUp',allValidation.signUpValidation,userControllers.SignUp);
userRouter.post('/SignIn',allValidation.SignInValidation,userControllers.SignIn);
userRouter.post('/validateOtp',allValidation.otpValidation,userControllers.validateOtp);
userRouter.post('/forgotPassword',allValidation.forgotPasswordValidation,userControllers.forgotPassword);
userRouter.post('/resetPassword',allValidation.resetPasswordValidation,userControllers.resetPassword);
userRouter.delete('/delete/:id',userControllers.deleteUser);

export default userRouter;