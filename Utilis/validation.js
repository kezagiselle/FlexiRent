import { validationResult } from "express-validator";
import { body} from "express-validator";

// const addUserValidation = [
//     body("FirstName", "FirstName is required"),
//     body("Address", "Address is required"),
// ];
const SignUpValidation = [
    body("firstName", "first name is required").not().isEmpty(),
    body("lastName", "last name is required").not().isEmpty(),
    body("address", "Address is required").not().isEmpty(),
    body("contact", "Contact is required").not().isEmpty(),
    body("email", "invalid email").isEmail(),
    body("password", "Password is required").not().isEmpty()
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
const addAssetValidation = [
     body("name","name must be provided").not().isEmpty(),
     body("price","Price must be provided").not().isEmpty()
];
const addTokenValidation = [
    body("Token","token must be provided").not().isEmpty(),
];
const addCarValidation = [
    body("asset_id","Id must be provided").not().isEmpty(),
    body("model","model must be provided").not().isEmpty(),
    body("year","year must be provided").not().isEmpty()
];
const addInfoValidation = [
    body("Names","names must be provided").not().isEmpty(),
    body("Email","email must be provided").not().isEmpty(),
];
const addHouseValidation = [
    body("asset_id","Id must be provided").not().isEmpty(),
];
const addImageValidation = [
    body("asset_id","Id must be provided").not().isEmpty(),
];
const addLandValidation = [
    body("asset_id","Id must be provided").not().isEmpty(),
];
const addUserValidation = [
    body("firstName","firstName must be provided").not().isEmpty(),
    body("lastName","lastName must be provided").not().isEmpty(),
    body("Email","email must be provided").not().isEmpty()
];
const allValidation = {
    SignUpValidation,
    SignInValidation,
    otpValidation,
    forgotPasswordValidation,
    resetPasswordValidation,
    addAssetValidation,
    addTokenValidation,
    addCarValidation,
    addInfoValidation,
    addHouseValidation,
    addImageValidation,
    addUserValidation,
    addLandValidation
};
export default allValidation;