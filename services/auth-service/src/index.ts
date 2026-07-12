import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import helmet from "helmet";
import logger from "./Utils/logger";
import ConnectDb from "./Utils/db";

const app = express();
const PORT = process.env.PORT;

app.use(helmet());
app.use(express.json());
app.use(cors())

app.listen(PORT , () => {
    logger.info(`Server is running on the server : ${PORT}`);
    ConnectDb();
})
