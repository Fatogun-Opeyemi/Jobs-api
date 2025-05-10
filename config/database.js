import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () =>{
    try {
        await console.log(process.env.PORT, process.env.MONGO_URI);
        
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB;