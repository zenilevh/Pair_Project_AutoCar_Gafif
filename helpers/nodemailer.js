const nodemailer = require('nodemailer');

function sentEmail(email, cars, invoice) {
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
        subject: `you already buy ${cars.fullData}`, // Subject line
        html: `<p>Thank you for your Purchasing Our Cars</p>
        <p>With your Cars of choice ${cars.fullData} you already pick the best Cars</p>
        <p>And Thank you for pick BodyKit with ${cars.bodykit} and with Price Rp.${cars.harga}</p>
        <img src="${cars.imgURL}"/>
        `
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}


module.exports = sentEmail;