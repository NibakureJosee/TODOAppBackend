const Todo = require('../models/todo');
const express = require ("express");
const todo = require('../models/todo');
const router = express.Router();

router.post("/todo/", async (req, res) => {
    try {
        const todo = await new Todo(req.body).save();
        res.send(todo);
    }catch (error) {
        res.send(error)
    }
})

router.get("/todos/", async(req, res) => {
    try {
        const tasks = await Todo.find();
        res.send(todo);
    } catch (error) {
        res.send(error)
    }
})

router.get("/todo/:id", async(req, res) => {
    try {
        const tasks = await Todo.find();
        res.send(todo);
    } catch (error) {
        res.send(error)
    }
})

router.post("/todo/:id/done", async (req, res) =>{
    try {
        const todo = await Todo.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        )
        res.send(todo)
    } catch(error) {
        res.send(error)
    }
})

router.delete("/todo/:id/delete", async (req,res) => {
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.send(todo);
    } catch(error) {
        res.send(error);
    }
})

module.exports = router;