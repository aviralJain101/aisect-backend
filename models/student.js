const Sequelize = require('sequelize');

const sequelize = require('../database');

const Student = sequelize.define('student', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    fatherName: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    address: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    mobileNo: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    totalFees: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    firstInstall: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    secondInstall: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    thirdInstall: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    fourthInstall: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    fifthInstall: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    sixthInstall: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    seventhInstall: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    eighthInstall: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    ninthInstall: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    tenthInstall: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    remFees: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    courseName: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    admissionDate: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    couseDuration: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
    univName: {
        type: Sequelize.STRING,
        defaultValue: '0'
    },
})

module.exports = Student