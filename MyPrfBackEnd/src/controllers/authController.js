const express = require('express');

//puxar o model de user para fazer as ações de cadastro e login do usuário
const User = require('../models/User');
const { default: parseStringAsArray } = require('../utils/paserStringAsArray');

const paserStringAsArray = require('../utils/paserStringAsArray');

//Buscar do Express um classe/função Router para definir rotas para usuário
const router = express.Router();


//definir uma rota de cadastro
router.post('/users', async (req, res) =>{
    const { name, email, password, bio, skills, contatos, socialMedia} = req.body;
    const skillsArray = parseStringAsArray(skills);
    const contatosArray = parseStringAsArray(contatos);
    const socialMediaArray = parseStringAsArray(socialMedia);
    try{

        const user = await User.create({ 
            name,
            email, 
            password, 
            bio, 
            skills: skillsArray, 
            contatos: contatosArray,
            socialMedia: socialMediaArray
         });

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.post('/users/login', async (req, res) =>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({ email, password });
        if(!user) {
            return res.status(400).send({ error: 'User not found'})
        }
        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Alguma coisa deu errado' });
    }
});

router.get('/users', async (req, res) =>{
    try{
        const user = await User.find();

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});


module.exports = app => app.use('/auth', router);