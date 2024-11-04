const express=require('express')
const router=express.Router()
const Products=require('../models/ProductsModel')


router.get('/all',async(req,res)=>
{
    try{
        const products=await Products.omitUndefined()
        res.status(200).json({message:error})
    }
    catch(error)
        {
            res.status(500).json({message:error})

        }

    
})



module.export=router


