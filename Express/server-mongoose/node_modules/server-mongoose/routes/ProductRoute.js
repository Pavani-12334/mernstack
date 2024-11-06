const express=require('express')
const router=express.Router()
const Products=require('../models/ProductsModel')


router.get('/all',async(req,res)=>
{
    try{
        const products=await Products.find()
        res.status(200).json({Products})
    }
    catch(error)
        {
            res.status(500).json({message:error.message})

        }

    
})
router.post('/add',async(req,res)=>{
    try {
        const ProductData=new Products(req.body)
        const {tittle,img,price}=ProductData
        if(!tittle||!img||!price)
        {
            res.status(401).json({message:"All fields required"})
        }
        const storedata = await ProductData.save()
        res.status(200).json(storedata)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})

router.put('/edit/id',async(req,res)=>{
    try{

         const id=req.params.id
         const existingproduct=await Products.findOne({_id:id})
         if(!existingproduct){
            res.status(404).json(updateproduct)

         }     
    } catch (error) 
    {
        res.status(500).json({message:error.message})
        
    }
})
router.delete('/delete/id:',async(req,res)=>{
    try {
        const id=req.params.id
         const existingproduct=await Products.findOne({_id:id})
         if(!existingproduct){
            res.status(404).json({message:"Product not found!"})
         }
         await Products.findByAndDelete(id)
         res.status(404).json({message:"Product Deleted"})

        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})



module.exports=router


