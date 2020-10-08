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
        default: '0'
    },
    fatherName: {
        type: Sequelize.STRING,
        default: '0'
    },
    address: {
        type: Sequelize.STRING,
        default: '0'
    },
    mobileNo: {
        type: Sequelize.STRING,
        default: '0'
    },
    totalFees: {
        type: Sequelize.STRING,
        default: '0'
    },
    firstInstall: {
        type: Sequelize.STRING,
        default: '0'
    },
    secondInstall: {
        type: Sequelize.STRING,
        default: '0'
    },
    thirdInstall: {
        type: Sequelize.STRING,
        default: '0'
    },
    fourthInstall: {
        type: Sequelize.STRING,
        default: '0'
    },
    fifthInstall: {
        type: Sequelize.STRING,
        default: '0'
    },
    sixthInstall: {
        type: Sequelize.STRING,
        default: '0'
    },
    seventhInstall: {
        type: Sequelize.STRING,
        default: '0'
    },
    eighthInstall: {
        type: Sequelize.STRING,
        default: '0'
    },
    ninthInstall: {
        type: Sequelize.STRING,
        default: '0'
    },
    tenthInstall: {
        type: Sequelize.STRING,
        default: '0'
    },
    remFees: {
        type: Sequelize.STRING,
        default: '0'
    },
    courseName: {
        type: Sequelize.STRING,
        default: '0'
    },
    admissionDate: {
        type: Sequelize.STRING,
        default: '0'
    },
    couseDuration: {
        type: Sequelize.STRING,
        default: '0'
    },
    univName: {
        type: Sequelize.STRING,
        default: '0'
    },
})

module.exports = Student