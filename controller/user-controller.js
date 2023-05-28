// user's API's
import User from "../model/user.js"; 
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Token from "../model/token.js";

dotenv.config();

export const signupUser = async (request, response) => {  // request: what we get from the client from frontend, response: what we send back to the client 
    try{ 
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        const user = { username: request.body.username,  name: request.body.name, password: hashedPassword}

        const newUser = new User(user);  // create a new database object
        await newUser.save();    // save the database object

        return response.status(200.).json({message: "User created successfully"});  // response: what we send back to the client
     } catch (error) { 
        return response.status(500).json({ msg: 'Error while signing up user' });   // 500: Internal Server Error backend error
    }
}

export const loginUser = async (request, response) => {
    let user = await User.findOne({username: request.body.username});  // findOne: find the first user with the username
    if(!user) { 
        return response.status(400).json({msg: "User not found"});
    }

    try { 
        let match = await bcrypt.compare(request.body.password, user.password);
        if (match){
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, {expiresIn: '15m'}); 
            const refreshToken = jwt.sign( user.toJSON() , process.env.REFRESH_SECRET_KEY);
  
            const newToken = await Token({ token: refreshToken });
            await newToken.save();

            return response.status(200).json({accessToken: accessToken, refreshToken: refreshToken, name: user.name, username: user.username});
        }

         else{
            return response.status(400).json({msg: "Invalid credentials"});
        }
 
    } catch (error) {
        return response.status(500).json({msg: "Error while  o authenticate user"});
    }
}

export const logoutUser = async (request, response) => {
    const token = request.body.token;
    await Token.deleteOne({ token: token });

    response.status(204).json({ msg: 'logout successfull' });
}
