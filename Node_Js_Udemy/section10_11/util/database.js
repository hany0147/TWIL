// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'node-complete',
//   password: '패스워드'
// });

// module.exports = pool.promise();
const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "비밀번호", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
