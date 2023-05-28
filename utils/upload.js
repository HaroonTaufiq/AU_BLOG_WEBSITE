// Middle ware for uploading images to the database
import { GridFsStorage } from 'multer-gridfs-storage';
import multer from 'multer';

import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD; 


const storage = new GridFsStorage({
    url:`mongodb://${username}:${password}@ac-ggm6dgs-shard-00-00.ragbfpz.mongodb.net:27017,ac-ggm6dgs-shard-00-01.ragbfpz.mongodb.net:27017,ac-ggm6dgs-shard-00-02.ragbfpz.mongodb.net:27017/?ssl=true&replicaSet=atlas-eq2or6-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file : (request, file) => {
        const match = ["image/png", "image/jpg", "image/jpeg"];

        if (match.indexOf(file.memeType) === -1){
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return { 
            bucketName: "photos", 
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    } 
}); 

export default multer({ storage });