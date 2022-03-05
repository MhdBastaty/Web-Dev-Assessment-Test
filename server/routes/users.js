
const router = require('express').Router();
const UserController = require('../controllers/UserController');

 
router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.put('/:id',UserController.editProfile);



 router.get('/users',UserController.getAllUsers);



module.exports = router;