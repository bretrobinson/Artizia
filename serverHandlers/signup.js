const handleSignup = (req, res, database, jwt)=>{

    const {password, email,fName, lName, location} = req.body
    console.log(email, password,fName, lName, location)
    if (!email || !password){
        return res.status(422).send('incorrect form submission')
    }
    try {
        database.login.push({
            id: `${database.login.length + 130}`,
            email,
            password,
            
        })
        database.users.push({
            id: `${database.users.length + 130}`,
            email,
            password,
            joined: new Date(),
            fName,
            lName,
            location
            
        })
        const token = jwt.sign({userId: database.login[database.login.length-1].id}, 'MY_SECRETE_KEY')
        // res.send(database.login[database.login.length-1])
        res.send({token} )

    } catch (err){
        return res.status(422).send(err.message)
    }
}

module.exports = {handleSignup}

// app.post('/signup', (req, res)=>{

    
// })
