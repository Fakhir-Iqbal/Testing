import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
},{timestamps: true}
)

let userModal = mongoose.models.Users || mongoose.model('Users', userSchema)

export default userModal