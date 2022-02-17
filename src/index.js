import express from 'express';
import dotenv from 'dotenv';
import { sendNotice } from './sendnotice.js';

dotenv.config({path: "../.env"})

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('<p> 🤠 lol <p>');
})
console.log(process.cwd());

app.post('/hook', (req, res) => {
    console.log(req.body)
    res.status(200).send("spam")
})

app.listen(process.env.PORT, () => console.log(`App is live on http://localhost:6969`));

const client = matrix.createClient({
    baseUrl: process.env.MATRIX_URL,
    accessToken: process.env.USER_ACCESS_TOKEN,
    userID: process.env.USER_ID
})


sendNotice("🤠 Hello Spam 🤠");

function sendNotice(body) {
    var roomID = process.env.ROOM_ID;
    var content = {
        "body": body.substring(0),
        "msgtype": "m.notice"
    };
    client.sendEvent(roomID, "m.room.message", content, "", (err, res) => {
        console.log(err);
    });
}
