const {User} = require('../models/index');
class UserRepository {
async createUser(data) {
    try {
             // sourcery skip: inline-immediately-returned-variable
    const user = await User.create(data);
        return user;
    } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
    }
}
async destroy(userId){
try{
    await User.destroy({
    where:{
    id:userId
}
    });
    return true;
} catch (error){
    console.log("Something went wrong in the repository layer");
    throw error;
}
}

async getById(userId){
    try{
             // sourcery skip: inline-immediately-returned-variable
        const user = await User.findByPk(userId,{
            attributes: ['email','id']
        });
        return user;
    }catch(error){
        console.log("Something went wrong in repository")
        throw error;
    }
}

}
module.exports = UserRepository;    