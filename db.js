import mysql from "mysql"

export const db = mysql.createConnection({
    //Place here your database info
    host: "localhost",
    user: "root",
    password: "123456",
    database: "todo"
})