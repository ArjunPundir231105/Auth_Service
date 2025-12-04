const UserRepository = require('../repository/user-repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_KEY} =  require('../config/serverConfig');
class UserService 
{
    constructor() {
        this.userRepository = new UserRepository();
    }
    async create(data) {
        try {
            // sourcery skip: inline-immediately-returned-variable
        const user = await this.userRepository.create(data);
            return user;
        }
        catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async signIn(email,plainPassword){
        try{
            console.log("i am here");
            const user = await this.userRepository.getByEmail(email);
            const passwordMatch = this.checkPassword(plainPassword,user.password);
            if(!passwordMatch){console.log("Password  doesn't match");
                throw {error: 'Incorrect password'};
            }
              // sourcery skip: inline-immediately-returned-variable
            const newJWT = this.createToken({email: user.email, id: user.id});
            return newJWT;
        }
        catch(error){
            console.log("Something went wrong in the signin process");
            throw error;
        }
    }
    async isAuthenticated(token){
        try{
            const response  = this.verifyToken(token);
            if(!response){
                throw {error: 'Invalid token'};
            }
            const user = await this.userRepository.getById(response.id);
            if(!user){
                throw {error: 'No user with the corresponding token exists'};
            }
            return user.id;
        }
        catch(error){
            console.log("Something went wrong in token validation",error);
            throw error;
        }
    }
    createToken(user) {
    try{
        // sourcery skip: inline-immediately-returned-variable
        const result = jwt.sign(user,JWT_KEY,{expiresIn: '1h'});
        return result;
    }
    catch(error){
        console.log("Something wrong in token");
        throw error;
    }
    }
    verifyToken(token){
        try{
// sourcery skip: inline-immediately-returned-variable
            const response  = jwt.verify(token, JWT_KEY);
            return response;
        }
        catch(error){
            console.log("Something went wrong in token validation",error);
            throw error;
        }
    }
    checkPassword(userInputPlainPassword,encryptedPassword){
try{
return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
}
catch(error){
    console.log("Something went wrong in password comparison");
}
    }
    isAdmin(userId){
        try{
            return this.userRepository.isAdmin(userId);
        }
        catch(error){
            console.log("Something went wrong in admin validation");
            throw error;
        }
    }
}
module.exports = UserService;