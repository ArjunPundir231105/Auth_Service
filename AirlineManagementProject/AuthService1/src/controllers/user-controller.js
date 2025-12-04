const UserService = require('../services/user-service');
const userService = new UserService();  
const create = async (req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data: response,
            success: true,
            message: "User created successfully",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create user",
            err: error
        });
    }
}
const signIn =async (req,res) =>{
try {
        const response = await userService.signIn(
            req.body.email,
            req.body.password
        );
        return res.status(201).json({
            data: response,
            success: true,
            message: "User created successfully",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create user",
            err: error
        });
    }
}

const isAuthenticated = async (req,res) =>{
    try{
        const token = req.headers['x-access-token']; 
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            message: "User is authenticated",
            success: true,
            err: {},
            data: response
        });
    }
    catch(error){
        console.log("Something went wrong in authenticating the user");
        return res.status(500).json({
            message: "Internal server error",
            success: false,
            err: error
        });
    }
}

const isAdmin = async (req,res) =>{
    try{
        const respose = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            message: "Admin status fetched successfully",
            success: true,
            err: {},
            data: respose
        });
    }
    catch(error){
        console.log("Something went wrong in admin validation");
        return res.status(500).json({
            message: "Internal server error",
            success: false,
            err: error
        });
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin
};