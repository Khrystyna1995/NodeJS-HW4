const dataBaseCars = require('../database').getInstance();

module.exports = {
    getCars: () => {
        const CarModel = dataBaseCars.getModel('car');

        return CarModel.findAll();
    },

    createCar: (car) => {
        const CarModel = dataBaseCars.getModel('car');

        return CarModel.create(car);
    },

    getCarById: (id) => {
        const CarModel = dataBaseCars.getModel('car');

        return CarModel.findOne({
            where: { users_id: id}
        });
    },

    getCarByModel: (model) => {
        const CarModel = dataBaseCars.getModel('car');

        return CarModel.findOne({
            where: {model}
        });
    },


    deleteCar: (id) => {
        const CarModel = dataBaseCars.getModel('user');

        return CarModel.destroy({
            where: { id }
        });
    },

};
