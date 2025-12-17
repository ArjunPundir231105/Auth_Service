const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const db = require('./models/index');
const { PORT } = require('./config/serverConfig');
const apiRoute = require('./routes/index')

const { User, Role } = require('./models');

const UserRepository = require('./repository/user-repository');
const UserService = require('./services/user-service');

const bcrypt = require('bcrypt');
const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',apiRoute);

    app.listen(PORT,async () => {
        console.log(PORT);

    // if(process.env.SYNC_DB){
    //     db.sequelize.sync({alter: true});
    // }

    // const u1 = await User.findByPk(1);
    // const r1 = await Role.findByPk(1);
    // u1.addRole(r1);


        //const incomingpassword = '123456';

        // const repo = new UserRepository();
        // const response = await repo.getById(1);
        // console.log(response);

        // const service = new UserService();
        // const newToken = service.createToken({email : 'arjun@gmail.com', id:1});
        // console.log("new token is",newToken);
    });
}
prepareAndStartServer();