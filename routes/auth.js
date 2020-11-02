const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation');
const { countDocuments } = require('../models/User');


/*START REGISTER ROUTER**************************************** */
router.post('/register', async (req, res) => {
    //validating user
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details/*[0].message*/);

    //checking user existes
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //Create new user
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
        grille: req.body.grille,
        rem: req.body.rem
    });
    try{
        const savedUser = await user.save();
        res.send({ user: user._id, username: user.username, email: user.email, grille: user.grille, rem: user.rem});
    }catch(err){
        res.status(400).send(err);
    }
});
/*END REGISTER ROUTER**************************************** */
/*START LOGIN ROUTER**************************************** */
router.post('/login', async (req, res) => {
    //validating user
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0]);
    
    //checking user existes
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email is wrong');

    //Checking password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password');

    //Create & Assingn Token
    const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET);
    res.header('authToken', token).send({user:{ username: user.username, email: user.email, token: token}});

});

/*END LOGIN ROUTER**************************************** */

module.exports = router;