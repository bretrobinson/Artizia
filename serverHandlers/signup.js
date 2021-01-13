const handleSignup = (req, res, database, jwt)=>{

    const {password, email} = req.body
    console.log(email, password)
    if (!email || !password){
        return res.status(422).send('incorrect form submission')
    }
    try {
        database.users.push({
            id: `${database.users.length + 130}`,
            email,
            password,
            joined: new Date()
        })
        const token = jwt.sign({userId: database.users[database.users.length-1].id}, 'MY_SECRETE_KEY')
        // res.send(database.users[database.users.length-1])
        res.send({id: database.users[database.users.length-1].id, token} )

    } catch (err){
        return res.status(422).send(err.message)
    }
}

module.exports = {handleSignup}

// app.post('/signup', (req, res)=>{

    
// })
