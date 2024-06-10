import { validationResult } from "express-validator";
import { body} from "express-validator";

// const addUserValidation = [
//     body("FirstName", "FirstName is required"),
//     body("Address", "Address is required"),
// ];
const signUpValidation = [
    body("firstName", "First name is required").not().isEmpty(),
    body("lastName", "Last name is required").not().isEmpty(),
    body("email", "Email is required").not().isEmpty(),
    body("email", "invalid email").isEmail(),
    body("password", "password is required").not().isEmpty(),
];
const SignInValidation = [
    body("email", "Email is required").not().isEmpty(),
    body("email", "invalid email").isEmail(),
    body("password", "password is required").not().isEmpty(),
    body("password", "invalid password").isStrongPassword()
];
const otpValidation = [
     body("otp","otp must be provided").not().isEmpty()
];
const forgotPasswordValidation = [
    body("email", "Email must be provided").not().isEmpty(),
];
const resetPasswordValidation = [
    body("password", "password must be provided").not().isEmpty(),
    body("password", "Password should contain atleast 8 characters, uppercase and lower case letters, numbers, and symbols").isStrongPassword(),
];

const allValidation = {
    signUpValidation,
    SignInValidation,
    otpValidation,
    forgotPasswordValidation,
    resetPasswordValidation
};
export default allValidation;