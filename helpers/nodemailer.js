const nodemailer = require('nodemailer');

function sentEmail(email, cars) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'zenchiela@gmail.com',
            pass: 'Metalgear1'
        }
    });

    const mailOptions = {
        from: 'zenchiela@gmail.com', // sender address
        to: email, // list of receivers
        subject: `you already buy ${cars.fullData} with price ${cars.price}`, // Subject line
        // html: '<p>Your html here</p>' // plain text body
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}


module.exports = sentEmail;