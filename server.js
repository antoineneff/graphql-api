import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Api is working !');
});

app.listen(1337, () => {
    console.log('Server started, listening on http://localhost:1337');
});