const process = require('node:process');
const dotenv = require('dotenv');
// import dotenv from "dotenv"
dotenv.config()
const { DB_HOST, PORT } = process.env
console.log(DB_HOST, PORT)