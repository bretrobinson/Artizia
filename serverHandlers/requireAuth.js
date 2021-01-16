const handleAuth = (req, res,  database, jwt, next)=>{
    const {authorization} = req.headers
    
    if(!authorization) {
        return res.status(401).send({error: 'You must be logged in'})
    }
    const token = authorization.replace('Bearer ', '' )
    jwt.verify(token, 'MY_SECRETE_KEY', async (err, payload)=>{
        if(err){
            return res.status(401).send({error: 'You must be logged in'})
        }
        const {userId} = payload
        
        const user = await database.login.find(user => user.id=== userId)
        req.user = user

        next()
    })

}

module.exports = {handleAuth}

