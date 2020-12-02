const express = require('express');
const mongoose = require('mongoose');
const Model = require('./model');
const app = express();

mongoose.connect('mongodb://localhost:27017/mongodba', { useUnifiedTopology: true, useNewUrlParser: true});

app.get('/people', async (req, res) => {
    const list = await Model.find({});
    await Model.insertMany({
        name: "Teste"
    })
    return res.json({ list });
});

app.listen(3002, () => console.log('Person service has been started at: http://localhost:3002'))