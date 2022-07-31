const nodemailer = require("nodemailer");
var config = require('config');

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: config.get('mail-credentials.userid'),
        pass: config.get('mail-credentials.password')
    }
});

let sendmail = (toid,sub,text,html)=>{
    return transporter.sendMail({
        from: 'OUTR ADMIN <gyana@admin.com>',
        to: toid,
        subject: sub,
        text: text,
        html: html || null
    });
}

module.exports = {sendmail}