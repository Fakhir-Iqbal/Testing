import userModal from "../schema/userSchema.js"
import jwt from "jsonwebtoken"

export default async function SignUp(req, res) {
    
    const { name, email, password } = req.body
    if (!email || !name || !password) {
        return res.status(200).json({ error: true , massage: 'Req All Field' })
    }
    
    let users = await userModal.findOne({ email })
    console.log(users);
    
    if (users) {
        return res.status(400).json({massage: "User Already Exist"})
    }
    let addUsers = await userModal({
        email,
        name,
        password
    })
    addUsers.save()
    var token = jwt.sign({ id: addUsers._id }, process.env.JWT_KEY);
    

    return res.status(200).json({ massage: 'Successfully Added', addUsers , token })

}