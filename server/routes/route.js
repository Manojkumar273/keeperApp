const express = require('express');
const Note = require('../models/model');

const router = express.Router();

router.get('/',(req,res)=>{
    Note.find((err,result)=>{
        if(err) console.log(err);
        res.json(result);
    })
})

router.get('/:id',(req,res)=>{
    Note.findById(req.params.id,(err,result)=>{
        if(err) console.log(err);
        res.json(result);
    })
})

router.get('/search/:topic',(req,res)=>{
    Note.find({title:req.params.topic},(err,result)=>{
        if(err) console.log(err);
        res.json(result);
    })
})

router.post('/',(req,res) => {
    console.log(req.body); 
    const note = new Note(req.body)
    note.save((err,result)=>{
        if(err) console.log(err);
        res.json(result);
    })
})

router.put('/:id',(req,res)=>{
    Note.findByIdAndUpdate({_id : req.params.id},req.body,{new:true},(err,result)=>{
        if(err) console.log(err);
        res.json(result);
    })
})

router.delete('/:id', (req,res)=>{
    Note.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err) console.log(err);
        res.json(result);
    })
})

module.exports = router;