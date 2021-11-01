const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.json())

const whatsapp = require('./whats-app');

app.post('/whatsapp/connect', whatsapp.conectApi);
app.post('/whatsapp/sendmessage', whatsapp.sendMessage);
// https://stackoverflow.com/questions/15126050/running-python-on-windows-for-node-js-dependencies
app.listen(3001, () => {
    console.log('conectado')
})