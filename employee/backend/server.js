import express, { text } from 'express'
import mongoose from 'mongoose'
import ItemsRoutes from './routes/ItemRoutes.js'
import cors from 'cors'
import {config} from 'dotenv'


config()

const app = express()
app.use(express.json())
app.use(cors())

try {
    await mongoose.connect(process.env.MONGO_URI)
} catch (error) {
    console.console.log("connection to mongoose failed error: "+ error);
    
}

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.use('/api', ItemsRoutes)

app.listen(process.env.PORT, ()=>{
    console.log("server is runnin");
    
})