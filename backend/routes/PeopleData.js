const express = require('express')
const router = express.Router()

const logic = require('../logic')

router.get('/people_details',(req,res)=>{
    logic.allPeopleData().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

module.exports = router