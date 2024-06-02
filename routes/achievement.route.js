import connection from '../database/sql.js';
import express from "express";

const achievementRouter = express.Router();

achievementRouter.route('')
    .get(async (req, res) => {
        connection.query('SELECT * FROM user', (err, result) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json(err);
                return
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        })
    })

export default achievementRouter;