const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users.model');

const register = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    //body: name, email, password
    const result = await User.insert(req.body);
    //recupero los datos del nuevo usuario
    const user = await User.selectById(result.insertId);
    res.json(user);
};

const login = async (req, res) => {
    const user = await User.selectByEmail(req.body.email);
    if (!user) {
        return res.status(401).json({ message: 'Error en email1' });
    }
    const same = bcrypt.compareSync(req.body.password, user.password);
    if (!same) {
        return res.status(401).json({ message: 'Error en email2' });
    }
    const payload = {
        id: user.id,
        role: user.role,
    };
    res.json({
        message: 'Login correcto',
        token: jwt.sign(payload, 'Manizales del Alma'),
    });
};

module.exports = { login, register };
