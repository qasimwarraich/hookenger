import express from "express";
import dotenv from "dotenv"


dotenv.config({path: "../.env"})


const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<p> 🤠 lol <p>');
    console.log(res);
})
console.log(process.cwd());


app.listen(process.env.PORT, () => console.log(`App is live on http://localhost:6969`));
