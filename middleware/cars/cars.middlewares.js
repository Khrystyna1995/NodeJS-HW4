const { carService } = require('../../services')

module.exports = {

    checkCarIdValid: async (req, res, next) => {
        try {
            const { id } = req.params;

            if (id <= 0 ) {
                throw new Error('Car ID must be grater than 0');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    checkCarExist: async (req, res, next) => {
        try{
            const car = await carService.getCars();

            if(!car) {
                throw new Error('This car already exist');
            }

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
