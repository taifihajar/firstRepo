let connection = require("../../../config/db");
var md5 = require('md5');
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

    let { token } = req.body;

    await connection.query("SELECT * FROM user WHERE token = ?", [token], async (err, result) => {
        if (err) res.send({
            isRegistred: false,
            message: err.sqlMessage
        });
        else if (result.length == 0) res.send({
            isRegistred: false,
            message: 'You should sign-in again'
        });
        else if (result.length == 1) {
            res.send({
                isRegistred: true,
            });
        } else res.send({
            isRegistred: false,
            message: 'Problem with the server!, Try Later, thanks!',
        });
    })
}