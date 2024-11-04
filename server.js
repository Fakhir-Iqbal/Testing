import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import router from "./src/routes/page.js";
import dotenv from "dotenv"

dotenv.config()
const app = express();

mongoose.connect('mongodb+srv://fakhiriqbal52:FAK456hir@db.lccax.mongodb.net/User')

.then(() => {
    console.log('Database Connected');
})
.catch((err) => {
    console.log(err);
})

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
   return res.send('API is Working , This API Develop By Fakhir...');
})

app.use("/user" , router )

let port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})