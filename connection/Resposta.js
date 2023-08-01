const sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("resposta", {
    resposta: {
        type: sequelize.Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({ force: false });

module.exports = Resposta;