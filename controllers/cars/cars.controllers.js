const {carService}  = require('../../services');

module.exports = {
    createCar: async (req, res) => {
        try {
            const car = req.body;
            const createdCar = await carService.createCar(car);

            res.json(createdCar);
        } catch (e) {
            res.status(400).json(e.message);
        }

    },

    getCars: async (req, res) => {
        try {
            const cars = await carService.getCars();

            res.json(cars);
        } catch (e) {
            res.status(400).json(e.message);
        }

    },

    getCarById: async (req, res) => {
        try {
            const { id } = req.params;
            const car = await carService.getCarById(id);

            res.json(car);

        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getCarByModel: async (req, res) => {
        try {
            const { model } = req.params;
            const car = await carService.getCarByModel(model);

            res.json(car);

        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteCar: async (req, res) => {
        try {
            const {id} = req.params;
            await carService.deleteCar(id);

            res.json('deleted');

        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
