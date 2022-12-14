module.exports = (sequelize, Sequelize) => {
    const Music = sequelize.define("music", {
        name: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.INTEGER
        },
        filename: {
            type: Sequelize.STRING
        }
    });

    return Music;
};