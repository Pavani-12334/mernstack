const validteToken=(req,res,next)=>{
        const secretkey='1211455668458965680'
        const token=req.headers.authorization
        console.log (token)
        if(!token){
            return res.status(401).json({message:"Invalid Request"})
        }

    
    try {
        const validate=jwt.verify(token,secretkey)
        const exp=validate.exp
        if(exp<(date.now()/1000)){
            return res.status(500).json({message:"Token Explored"})
        }

    } catch (error) {
        returnres.status(500).json({message:"Invalid token"})
        
    }

}

    module.exports = validteToken;
