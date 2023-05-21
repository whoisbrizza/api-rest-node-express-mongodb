import mongoose from "mongoose";

mongoose.connect("mongodb+srv://brizzaadv:123@node-express-alura.9ykltmo.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;