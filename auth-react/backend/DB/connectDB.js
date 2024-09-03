import mongoose from "mongoose";
import const connectDB = async() => {

    try{
        await mongoose.connect (process.env.MONGO_URI)
        console('mongoose connect: ${conn.connection.host}')
    } catch(error) {
        console.log ("error connecting to mongodb", error.message)
        process.exit(1)
    }
    
    
    
}


