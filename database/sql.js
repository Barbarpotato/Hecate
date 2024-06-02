import mysql from 'mysql2';


const config = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    connectTimeout: 10000 // 10 seconds
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) console.log(err);
});

export default connection;