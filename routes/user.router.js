const { Router } = require('express');
const { userController } = require('../controllers');
const { userMiddleware } = require('../middleware')

const userRouter = Router();

userRouter.post( '/',  userMiddleware.checkUserValid, userController.createUser);

userRouter.get( '/', userController.getUsers );
userRouter.get('/:id', userMiddleware.checkUserIdExist, userMiddleware.checkUserIdValid, userController.getUserById);
userRouter.get( '/:email', userMiddleware.checkUserEmailExist, userController.getUserByEmail);

userRouter.delete('/:id', userMiddleware.checkUserIdExist, userController.deleteUser );

module.exports = userRouter;
