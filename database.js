const Sequelize = require('sequelize');

// const sequelize = new Sequelize('aisect','root', 'aviral', {
//     dialect: 'mysql',
//     host: 'localhost'
// })

const sequelize = new Sequelize('AJiheW4U8r','AJiheW4U8r', 'kjazLY17Sg', {
    dialect: 'mysql',
    host: 'remotemysql.com'
})

// const sequelize = new Sequelize('sql12369704','sql12369704', 'mpUU1EWvhX', {
//     dialect: 'mysql',
//     host: 'sql12.freemysqlhosting.net'
// })

module.exports = sequelize;
