const jwt = require('jsonwebtoken');
const User = require('../models/users.model');

const checkToken = async (req, res, next) => {
    // Comprobar si el token viene incluido en la cabecera Authorization
    if (!req.headers['authorization']) {
        return res.status(403).json({ message: 'Necesitas la cabecera' });
    }

    const token = req.headers['authorization'];

    // Comprobar si el token es correcto
    let payload;
    try {
        payload = jwt.verify(token, 'Manizales del Alma');
    } catch (error) {
        // Error en el token
        return res.status(403).json({ message: 'El token es incorrecto' });
    }

    // Comprobar si el usuario existe
    const user = await User.selectById(payload.id);

    if (!user) {
        return res.status(403).json({ message: 'El usuario es incorrecto' });
    }

    // incluir los datos del usuario logueado dentro de la req
    req.user = user;

    next();
};

const checkAdmin = (req, res, next) => {
    const { role } = req.user;
    if (role !== 'admin') {
        return res.status(403).json({ message: 'No eres admin' });
    }

    next();
};

// TODO: middleware que pueda recibir como parametro el role al que queremos permitir el

module.exports = { checkToken, checkAdmin };
