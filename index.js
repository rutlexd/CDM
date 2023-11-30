import express from 'express';
import sendDataToCpp from './connector.js';

const PORT = 8080;

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    sendDataToCpp(req.body);
    res.status(200).json('All working');
});

app.listen(PORT, () => console.log('SERVER WORKNG ON PORT: ' + PORT));