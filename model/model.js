import { request } from "express";
import mongoose from "mongoose";

const jobsSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    }
}, {
    timestamps : true
}
)

const Jobs = mongoose.model('Jobs' , jobsSchema)

export default Jobs;