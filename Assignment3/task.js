const route = require('express').Router()

let tasks=[
    {Task:"Task 1",Done:"Yes"},
    {Task:"Task 2",Done:"No"},
    {Task:"Task 3",Done:"No"}
]
route.post('/',function(req,res){
    tasks.push({
            Task: req.body.task,
            Done: req.body.done
    })
    res.send(tasks)
})
route.patch('/:id',function(req,res){
    tasks[req.params.id]={
        Task: req.body.task,
        Done: req.body.done
    }
    res.send(tasks)
})
route.delete("/:id",function(req,res){
    tasks=tasks.filter(function(value){
        return value!=tasks[req.params.id];
    })
    res.send(tasks)
})

route.get('/',function(req,res){
    res.send(tasks)
});

route.get('/:id',function(req,res){
    res.send(tasks[req.params.id])
});

module.exports=route