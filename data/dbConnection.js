const knex = require("knex");
const knexfile = require("../knexfile");

const furitsenv = process.env.FURITS_ENV || "fruits"; //undefined|production
//if || it's iternery either or this.

const veggiesenv = process.env.VEGGIES_ENV || "veggies";

// const dbConfig = {
//   client: "sqlite3", // driver
//   connection: {
//     filename: "./data/produce.db3", //could be an obj or string.
//   },
//   useNullAsDefault: true, // for SQLite only
// };
// const dbConfig = knexfile[environment]; //

module.exports = {
  fruits: knex(knexfile[furitsenv]),
  veggies: knex(knexfile[veggiesenv]),
};
