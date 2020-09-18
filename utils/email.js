const nodemailer = require('nodemailer');

module.exports = async function (messageObj) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: 'okrepaircenterny@gmail.com',
        to: "tailov47@gmail.com",
        subject: "Portfolio contact!",
        text: "Name: " + messageObj.name + "\n" + "Email: " + messageObj.email + "\n" + messageObj.message
    }

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
}