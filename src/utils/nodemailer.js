const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fantasia.pura.restaurant@gmail.com',
        pass: process.env.GOOGLE_APP_PASSWORD,
    },
});

const sendEmail = async () => {
    const mailOptions = {
        from: 'fantasia.pura.restaurant@gmail.com',
        to: 'axel.angelini@gmail.com',
        subject: 'Correo de prueba',
        text: 'Este es un mensaje enviado desde Nodemailer con Gmail.',
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado: ' + info.response);
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
};

module.exports = { sendEmail };
