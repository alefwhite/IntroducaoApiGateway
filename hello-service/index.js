const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    return res.json({ msg: 'Hello From hello-service'});
})

app.listen(3001, () => console.log('Hello service has been started at: http://localhost:3001'))