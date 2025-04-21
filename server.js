import express, { urlencoded } from 'express'
import router from './Routes/route.js'
import { fileURLToPath } from 'url';
import path from 'path'
import cors from 'cors'
import connectDB from './config/database.js';

const app = express()
app.use(cors())
const PORT = process.env.PORT || 8082

connectDB()

//body parser
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// routes 
app.use('/api/jobs' , router)


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'public')))


app.listen(PORT, ()=>{
    console.log(`Gbera on port ${PORT}`);
    
})