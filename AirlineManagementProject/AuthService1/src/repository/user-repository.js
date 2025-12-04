const {User} = require('../models/index');
class UserRepository {
async create(data) {
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
    async findOne(filter) {
        try {
            return await User.findOne(filter);
        } catch (error) {
            console.log("Something went wrong in findOne");
            throw error;
        }
    }
    // ⭐ REQUIRED BY YOUR SERVICE (your signIn depends on this)
    async getByEmail(email) {
        try {
            return await User.findOne({ where: { email } });
        } catch (error) {
            console.log("Something went wrong in getByEmail");
            throw error;
        }
    }
    async isAdmin(userId){
        try{
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({where:{name:'ADMIN'}});
            return user.hasRole(adminRole);
        }
        catch(error){
            console.log("Something went wrong in isAdmin repository");
            throw error;
        }
}
}
module.exports = UserRepository;    