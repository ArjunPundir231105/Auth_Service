const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/user-controller');
const {AuthRequestValidators} = require('../../middlewares/index');


router.post('/signup', AuthRequestValidators.validateUserAuth, UserController.create);
router.post('/signin', AuthRequestValidators.validateUserAuth, UserController.signIn);
router.get('/isAuthenticated', UserController.isAuthenticated);

router.get('/dummy', (req, res) => {
    return res.status(200).json({
        message: "Dummy route working fine",
        success: true,
        err: {},
        data: {}
    });
});

router.get('/isAdmin',AuthRequestValidators.validateIsAdminRequest, UserController.isAdmin);

module.exports = router;   
