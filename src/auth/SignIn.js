import userModal from "../schema/userSchema.js"
import jwt from "jsonwebtoken"

export default async function SignIn(req, res) {
    
    const {email, password } = req.body
    if (!email || !password) {
        return res.status(200).json({ error: true , massage: 'Req All Field' })
    }
    
    let users = await userModal.findOne({ email })
    
    if (!users) {
        return res.status(400).json({massage: "User Doesn't Exist"})
    }
   
    var token = jwt.sign({ id: users._id }, process.env.JWT_KEY);

    return res.status(200).json({ massage: 'Successfully LogIn', users, token })

}