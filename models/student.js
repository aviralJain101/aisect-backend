const Sequelize = require('sequelize');

const sequelize = require('../database');

const Student = sequelize.define('student', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: Sequelize.STRING,
    fatherName: Sequelize.STRING,
    address: Sequelize.STRING,
    mobileNo: Sequelize.STRING,
    totalFees: Sequelize.STRING,
    firstInstall: Sequelize.STRING,
    secondInstall: Sequelize.STRING,
    thirdInstall: Sequelize.STRING,
    fourthInstall: Sequelize.STRING,
    fifthInstall: Sequelize.STRING,
    sixthInstall: Sequelize.STRING,
    seventhInstall: Sequelize.STRING,
    eighthInstall: Sequelize.STRING,
    ninthInstall: Sequelize.STRING,
    tenthInstall: Sequelize.STRING,
    remFees: Sequelize.STRING,
    courseName: Sequelize.STRING,
    admissionDate: Sequelize.STRING,
    couseDuration: Sequelize.STRING,
    univName: Sequelize.STRING,
})

module.exports = Student