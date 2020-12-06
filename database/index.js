const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (() => {
    let instance;

    const initConnection = () => {
        const client = new Sequelize('auto_shop', 'root', '29031995k', {
            host: 'localhost',
            dialect: 'mysql'
        });

        const models = {};
        const modelsPath = path.join(process.cwd(), 'database', 'models');

        const getModels = () => {
            fs.readdir(modelsPath, (err, files) => {
                files.forEach((file) => {
                    const [model] = file.split('.');
                    models[model] = (require(path.join(modelsPath, model)))(client, DataTypes)
                });
            });
        };
        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        };
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    }
})();
