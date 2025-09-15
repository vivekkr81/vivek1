import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    check: String,
})

const Items = mongoose.model("To-do", schema)

export default Items