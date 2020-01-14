const express = require('express');
const app = express('');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://lugarcia94:ilewml2kwyzm1@cluster0-svc74.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);