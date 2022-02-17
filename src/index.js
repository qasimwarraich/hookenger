import express from 'express';
import dotenv from 'dotenv';
import { sendNotice } from './sendnotice.js';

dotenv.config({ path: '../.env' });

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`<p> Hey 🤠, You shouldn't be here. <p>`);
});

app.post('/hook', (req, res) => {
    if (req.body.message) {
        res.status(200).send();
    } else {
        res.status(420);
    }
    sendNotice(req.body.message);
});

app.listen(process.env.PORT, () =>
    console.log(`App is live on http://localhost:${process.env.PORT}`)
);
