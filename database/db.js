
// forms connection with the database

import mongoose from "mongoose"  // import mongoose facility for database connection

const Connection =  async (URL) => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true});  // use new url parser
        console.log(" Database Connected Successfully");
    }
    catch (error) {
        console.log('Error while connecting with database ',error);
    }
};

export default Connection;