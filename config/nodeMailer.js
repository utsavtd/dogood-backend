const nodeMailer = require('nodemailer')
var transporter=nodeMailer.createTransport({
    service:'smtp',
    host:'smtp.elasticemail.com',
    port:465,
    secure: true,
    auth: {
        user: 'dev@unoapp.io',
        pass: '19c14920-cc13-4437-b3c7-95c3ee615a48'
    }
})
module.exports=transporter