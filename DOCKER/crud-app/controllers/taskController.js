const Task = require("../models/taskModel");

exports.createTask = async(req,res,next)=>{
    try{
        const task = await Task.create(req.body);
        res.status(200).json({
            status:"success",
            data:{
                task
            }
        });
    }
    catch(e){
        res.status(400).json({
            status:"Failed to create task"
        });
    }
}

exports.getAllTask = async(req,res,next)=>{
    try{
        const taskList = await Task.find();
        res.status(200).json({
            status:"success",
            count: taskList.length,
            data:{
                taskList
            }
        });
    }
    catch(e){
        res.status(400).json({
            status:"Failed to get all task"
        });
    }
}

exports.getOneTask = async(req,res,next)=>{
    try{
        const task = await Task.findById(req.params.id);
        res.status(200).json({
            status:"success",
            data:{
                task
            }
        });
    }
    catch(e){
        res.status(400).json({
            status:"Failed to get task"
        });
    }
}

exports.updateTask = async(req,res,next)=>{
    try{
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status:"success",
            data:{
                task: updatedTask
            }
        });
    }
    catch(e){
        res.status(400).json({
            status:"Failed to update task"
        });
    }
}

exports.deleteTask = async(req,res,next)=>{
    try{
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"success",
            data: {
                task: deletedTask
            }
        });
    }
    catch(e){
        res.status(400).json({
            status:"Failed to delete task"
        });
    }
}