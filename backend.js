import express  from "express";
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Router from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";


dotenv.config();  // initialize dotenv  

const app = express(); 

app.use(cors());
app.use(bodyParser.json({ extended: true }));  // replace character that are not URL safe with a hexadecimal escape sequence
app.use(bodyParser.urlencoded({ extended: true }));  // parse requests of content-type - application/x-www-form-urlencoded
app.use('/',Router);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
}

const PORT = precess.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`)); 

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI ||  `mongodb://${USERNAME}:${PASSWORD}@ac-ggm6dgs-shard-00-00.ragbfpz.mongodb.net:27017,ac-ggm6dgs-shard-00-01.ragbfpz.mongodb.net:27017,ac-ggm6dgs-shard-00-02.ragbfpz.mongodb.net:27017/?ssl=true&replicaSet=atlas-eq2or6-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);
