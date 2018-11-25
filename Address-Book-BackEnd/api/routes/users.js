const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const userController = require('../controller/user');

router.get('/',checkAuth, userController.getAllUser);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/:userID', checkAuth, userController.getOneUser);
router.patch('/update/:userID', checkAuth, userController.updateUser);
router.delete('/delete/:userID', checkAuth, userController.deteleteUser);

module.exports = router;