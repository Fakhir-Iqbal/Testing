import { Router } from "express";
import SignUp from "../auth/signUp.js";
import SignIn from "../auth/SignIn.js";

const router = Router();


router.post("/signUp",SignUp ),
router.post("/signIn",SignIn )


export default router;