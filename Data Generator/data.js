
import mongoose, { Schema } from "mongoose"

await mongoose.connect("mongodb://localhost:27017/")

const rand  = Math.floor(Math.random()*(2-1+1))+1


const name = ["vivek", "Tushar", "Vikash"]

const clas = [13, 10 , 14]

const rollno = [10, 20, 30]

const schema = new mongoose.Schema({
    name: String,
    clas: Number,
    rollno: Number
})


const data = mongoose.model("data", schema)

const data1 = new data({name:`${name[rand]}`, clas: `${clas[rand]}`, rollno: `${rollno[rand]}` })
data1.save();
