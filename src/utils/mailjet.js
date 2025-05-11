require('dotenv').config();
const Mailjet = require('node-mailjet');

const mailjet = Mailjet.apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

const sendEmail = async (user, reservation) => {
    const templateId = 6973024;

    const fecha = new Date(reservation.reservation_date);

    const variables = {
        nombre: user.name,
        fecha: fecha.toLocaleDateString('es-AR'),
        hora: reservation.reservation_time,
        personas: reservation.num_guests,
    };

    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: 'fantasia.pura.restaurant@gmail.com',
                    Name: 'Fantasía Pura',
                },
                To: [
                    {
                        Email: user.email,
                        Name: user.name,
                    },
                ],
                TemplateID: templateId,
                TemplateLanguage: true,
                Variables: variables,
            },
        ],
    });

    try {
        const result = await request;
        console.log('Correo enviado:', result.body);
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
};

module.exports = { sendEmail };
