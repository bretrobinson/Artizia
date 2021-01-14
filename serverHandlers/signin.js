const handleSignup = (req, res, database, jwt)=>{
    const {password, email} = req.body
    
    if (!email || !password){
        return res.status(422).send('incorrect form submission')
    }
    let found = false 
    database.login.forEach((user,i)=>{
        
         if(user.email === email){
            if(user.password == password){
                
                found = true}
                if (found){
                    const token = jwt.sign({userId: database.login.id}, 'MY_SECRETE_KEY')
                    
                    res.status(200).send({token})
                }
            
        }
    })
    if(!found) {
        res.status(422).send('incorrect form submission')
    }

}

module.exports = {handleSignup}