const sequelize = require("sequelize");
const connection = new sequelize("perguntas", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;