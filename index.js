import express from "express";
import dotenv from "dotenv";


dotenv.config('./.env')

const app = express();
const port = process.env.PORT

app.listen(port || 8000, () => {
    console.log(`server started at port ${port}`);
})
