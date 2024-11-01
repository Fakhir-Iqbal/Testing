import mongoose from "mongoose";

mongoose.connect('mongodb+srv://fakhiriqbal52:FAK456hir@db.lccax.mongodb.net/')

.then(() => {
    console.log('Database Connected');
})
.catch((err) => {
    console.log(err);
})