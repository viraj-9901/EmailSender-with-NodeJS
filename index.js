import express from "express";
import dotenv from "dotenv";
// import {mailtrap} from 'mailtrap'
import emailRouter  from "./Routes/email.route.js";
import bodyParser from "body-parser";
 
dotenv.config('./.env')

const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
const port = process.env.PORT

app.post("/api/v1/mailtrap",emailRouter)

app.listen(port || 8000, () => {
    console.log(`server started at port ${port}`);
})
