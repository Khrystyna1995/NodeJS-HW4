const { Router } = require('express');
const { carController } = require('../controllers');
const { carMiddleware } = require('../middleware')

const carRouter = Router();

carRouter.post( '/',  carMiddleware.checkUserValid, carController.createCar);

carRouter.get( '/', carController.getCars );
carRouter.get('/:user_id', carMiddleware.checkCarExist, carMiddleware.checkCarIdValid, carController.getCarById);
carRouter.get( '/:model', carMiddleware.checkCarExist, carController.getCarByModel);

carRouter.delete('/:id', carMiddleware.checkCarExist, carController.deleteCar );

module.exports = carRouter;
