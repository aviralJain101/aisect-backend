const express = require('express');

const Student = require('../models/student');

const router = new express.Router();

const totalPaid = (student) => {
    return (parseInt(student.firstInstall) || 0) + (parseInt(student.secondInstall) || 0) + (parseInt(student.thirdInstall) || 0) + (parseInt(student.fourthInstall) || 0) + (parseInt(student.fifthInstall) || 0) + (parseInt(student.sixthInstall) || 0) + (parseInt(student.seventhInstall) || 0) + (parseInt(student.eighthInstall) || 0) + (parseInt(student.ninthInstall) || 0) + (parseInt(student.tenthInstall) || 0);
}

router.post('/student/details', async(req,res)=>{
    try{
        const student = await Student.create(req.body);
        const total = totalPaid(student);
        student.remFess = student.totalFess - total;
        await student.save();
        res.send(student);
    }catch(e){
        res.status(440).send(e)
    }
})

router.patch('/student/details/:id', async(req,res)=>{
    const id = req.params.id;
    try{
        const student = await Student.findByPk(id);
        if(!student){
            res.status(404).send('Student not found')
        }
        const detail = await Student.update(req.body,{
            where: {id: id}
        });
        const total = totalPaid(student);
        student.remFess = student.totalFess - total;
        await student.save();
        res.send(detail);
    }catch(e){
        res.status(440).send(e);
    }
})

router.get('/student/details/:id', async(req,res)=>{
    const id = req.params.id;
    try{
        const student = await Student.findByPk(id);
        if(!student){
            res.status(404).send('Student Not found');
        }
        res.send(student);
    }catch(e){
        res.status(440).send(e);
    }
})

router.get('/student/list', async(req,res)=>{
    try{
        const students = await Student.findAll();
        res.send(students);
    }catch(e){
        res.status(440).send(e);
    }
})

router.delete('/student/details/:id', async(req,res)=>{
    const _id = req.params.id;
    try{
        await Student.destroy({
            where: {
                id: _id
            }
        });
        res.send('deleted');
    }catch(e){
        res.status(440).send(e);
    }
})

module.exports = router;