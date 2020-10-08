const Sequelize = require('sequelize');

// const sequelize = new Sequelize('aisect','root', 'aviral', {
//     dialect: 'mysql',
//     host: 'localhost'
// })

const sequelize = new Sequelize('lwT9DCPZZ6','lwT9DCPZZ6', 'B9Bvphg0bJ', {
    dialect: 'mysql',
    host: 'remotemysql.com'
})

module.exports = sequelize;
