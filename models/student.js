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
        defaultValue: 'NA'
    },
    fatherName: {
        type: Sequelize.STRING,
        defaultValue: 'NA'
    },
    address: {
        type: Sequelize.STRING,
        defaultValue: 'NA'
    },
    mobileNo: {
        type: Sequelize.STRING,
        defaultValue: 'NA'
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
    },
    courseName: {
        type: Sequelize.STRING,
        defaultValue: 'NA'
    },
    admissionDate: {
        type: Sequelize.STRING,
        defaultValue: 'NA'
    },
    couseDuration: {
        type: Sequelize.STRING,
        defaultValue: 'NA'
    },
    univName: {
        type: Sequelize.STRING,
        defaultValue: 'NA'
    },
},{
    hooks: {
        beforeCreate: (student) => {
            const total = (parseInt(student.firstInstall) || 0) + (parseInt(student.secondInstall) || 0) + (parseInt(student.thirdInstall) || 0) + (parseInt(student.fourthInstall) || 0) + (parseInt(student.fifthInstall) || 0) + (parseInt(student.sixthInstall) || 0) + (parseInt(student.seventhInstall) || 0) + (parseInt(student.eighthInstall) || 0) + (parseInt(student.ninthInstall) || 0) + (parseInt(student.tenthInstall) || 0);
            student.remFees = (parseInt(student.totalFees) - total).toString();
        },
        beforeUpdate: (student) => {
            const total = (parseInt(student.firstInstall) || 0) + (parseInt(student.secondInstall) || 0) + (parseInt(student.thirdInstall) || 0) + (parseInt(student.fourthInstall) || 0) + (parseInt(student.fifthInstall) || 0) + (parseInt(student.sixthInstall) || 0) + (parseInt(student.seventhInstall) || 0) + (parseInt(student.eighthInstall) || 0) + (parseInt(student.ninthInstall) || 0) + (parseInt(student.tenthInstall) || 0);
            student.remFees = (parseInt(student.totalFees) - total).toString();
        }
    }
})

module.exports = Student