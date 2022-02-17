import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";

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
