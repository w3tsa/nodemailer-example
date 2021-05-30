const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.post('/subscribe', (req, res) => {
    // res.json(req.body.email)

async function main() {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'user',
            pass: 'password'
        }
    });

    let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: req.body.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html bod
    })
}
    main().catch(console.error)
  })

app.listen('5000', () => {
    console.log('server is running on port 5000')
})