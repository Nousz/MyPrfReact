const express = require('express');

//puxar o model de user para fazer as ações de cadastro e login do usuário
const User = require('../models/User');

//Buscar do Express um classe/função Router para definir rotas para usuário
const router = express.Router();

//definir uma rota de cadastro
router.post('/users', async (req, res) =>{
    try{
        const user = await User.create(req.body);

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