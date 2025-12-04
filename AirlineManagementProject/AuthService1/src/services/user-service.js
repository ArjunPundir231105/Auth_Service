const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const {JWT_KEY} =  require('../config/serverConfig');
class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async create(data) {
        try {
            // sourcery skip: inline-immediately-returned-variable
        const user = await this.userRepository.createUser(data);
            return user;
        }
        catch (error) {
            console.log("Something went wrong in the service layer");
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


}
module.exports = UserService;