const  dataBaseUsers  = require('../database').getInstance();

module.exports = {
    getUsers: () => {
        const UserModel = dataBaseUsers.getModel('user');

        return UserModel.findAll();
    },

    getUsersWithCars: () => {
        const UserModel = dataBaseUsers.getModel('user');
        const CarModel = dataBaseUsers.getModel('car');
        return CarModel.findAll({
            include: [{ model: UserModel, as: 'user' }]
        });
    },

    createUser: (user) => {
        const UserModel = dataBaseUsers.getModel('user');

        return UserModel.create(user);
    },

    getUserById: (id) => {
        const UserModel = dataBaseUsers.getModel('user');

        return UserModel.findOne({
            where: { id }
        });
    },

    getUserByEmail: (email) => {
        const UserModel = dataBaseUsers.getModel('user');

        return UserModel.findOne({
            where: { email }
        });
    },

    deleteUser: (id) => {
        const UserModel = dataBaseUsers.getModel('user');

        return UserModel.destroy({
            where: { id }
        });
    },

};
