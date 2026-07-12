import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT;


app.use(helmet());
app.use(express.json());
app.use(cors())

app.listen(PORT , () => {
    console.log(`Server is running on the PORT : ${PORT}`);
})
