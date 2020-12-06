const { userService } = require('../../services')

module.exports = {
    checkUserEmailExist: async (req, res, next) => {
        try{
            const { email } = req.body;
            const users = await userService.getUsers(email);
            const foundEmail = users.find((user) => user.email === email);

            if(foundEmail) {
                throw new Error('This user exist');
            }

            next();
        } catch (e) {
           res.status(400).json(e.message);
        }
    },

    checkUserIdExist: async (req, res, next) => {
        try{
            const { id } = req.body;
            const users = await userService.getUsers(id);
            const foundId = users.find((user) => user.id === id);

            if(!foundId) {
                throw new Error('This user not exist');
            }

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    checkUserIdValid: (req, res, next) =>{
        try {
            const { id } = req.params;

            if (id <= 0 ) {
                throw new Error('User ID must be grater than 0');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    checkUserValid: (req, res, next) => {
        try {
            const user = req.body;

            if (!user.email) {
                throw new Error('User is not valid');
            }

            next();

        } catch (e) {
            res.status(400).json(e.message);
        }

    }
};
