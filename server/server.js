const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors()); // Use this after the variable declaration
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: 'Data received' });
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: 'Data received' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});