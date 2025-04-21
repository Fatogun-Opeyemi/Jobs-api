import Jobs from "../model/model.js"

let jobs =[
    {
        id : 1,
        "title": "farmer"
    },
    {
        id : 2,
        "title": "manager"
    },
    {
        id : 4,
        "title": "accountant"
    }
]

    export const getAllRequests = async (req,res) =>{
            // res.send('<h1> Root file </h1>')
            // let limit = parseInt( req.query.limit)
            // if (!isNaN(limit) && limit > 0 ){
            //     let limitedJobs = jobs.slice(0,limit)
            //     res.json(limitedJobs)
            // }else{
            //     res.json(jobs).status(200)
            // }

            const mongooseJob = await Jobs.find()
            res.status(200).json(mongooseJob)
    }

    export const getSingleRequest = async (req,res) =>{
            // let reqId = parseInt(req.params.id)
        
            // const newJob = jobs.find((job)=> job.id === reqId)
            // if (newJob) {
            //     res.json(newJob).status(200)
            // }else{
            //     res.json({msg: 'Id not found'})
            // }

            const mongooseJob = await Jobs.findById(req.params.id)

            if (mongooseJob) {
                res.status(200).json(mongooseJob)
            }else{
                res.status(404).json({msg:'Job with Id not found'})
            }
    }

    export const postRequest = async (req,res) =>{
            // const newJob = {
            //     'id' : jobs.length+1,
            //     'title' : req.body.title
            // }
            // if(newJob.title && newJob.id){
            //     jobs.push(newJob)
            //     res.status(201).json(jobs)
            //     console.log(newJob);
                
            // }else{
            //     res.status(404).json({msg:'Job not created'})
            // }

            if(!req.body.title){
                res.status(404).json({msg:'Job not created'})
            }else{
                const mongooseJob = await Jobs.create(req.body)
                res.status(201).json(mongooseJob)
            }
    }

    export const deleteRequest = async (req,res) =>{
            // let reqId = req.params.id
            // reqId = parseInt(reqId)
        
            // const mongooseJob = jobs.find((job)=> job.id === reqId)
            // if (mongooseJob) {
            //     jobs = jobs.filter((job)=> job.id !== reqId)
            //     res.status(200).json(jobs)
            //     console.log(jobs);
        
            // }else{
            //     res.status(404).json({msg:'Id not found'})
            // }

            const mongooseJob = await Jobs.findByIdAndDelete(req.params.id)
            
            if (!mongooseJob) {
                res.status(404).json({msg: 'no job with such id found'})
            }else{
                res.status(200).json({msg:'done'})
            }
    }

    export const editRequest = async (req,res) =>{
            // let reqId = parseInt(req.params.id)

            // let editJob = jobs.find((job)=> job.id === reqId)
            // if (editJob.title) {
            //     editJob.title = req.body.title

            //     res.status(200).json({msg: 'done'})
            //     console.log(jobs);
            // }else{
            //     res.status(404).json({msg:'Id not found'})
            // }

            const mongooseJob = await Jobs.findByIdAndUpdate(req.params.id, req.body , {
                new : true,
                runValidators: true 
             })

            if (!mongooseJob) {
                res.status(404).json({msg: 'no job with such id found'})
            }else{
                res.status(200).json({msg:'done'})
            }
    }