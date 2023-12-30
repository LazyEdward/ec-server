import app from "./app";
import dotenv from 'dotenv'; 
dotenv.config();

const port: number = parseInt(`${process.env.PORT}`) || 5555;
app.listen(port, () => console.log(`server start on port ${port}...`))