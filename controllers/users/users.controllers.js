const { userService } = require('../../services')

module.exports = {
    createUser: async (req, res) => {
        try {
            const user = req.body;
            const createdUser = await userService.createUser(user);

            res.json(createdUser);
        } catch (e) {
            res.status(400).json(e.message);
        }

    },

    getUsers: async (req, res) => {
        try {
            const users = await userService.getUsers();

            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }

    },

    getUsersWithCars: async (req, res) =>{
        try {
            const usersWithCars = await  userService.getUsersWithCars();

            res.json(usersWithCars);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userService.getUserById(id);

            res.json(user);

        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserByEmail: async (req, res) => {
        try {
            const { email } = req.params;
            const user = await userService.getUserByEmail(email);

            res.json(user);

        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            await userService.deleteUser(id);

            res.json('deleted');

        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
