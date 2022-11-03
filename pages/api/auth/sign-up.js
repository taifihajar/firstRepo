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
    let {email,password,role} = req.body;
    password = md5(password);
    await connection.query("INSERT INTO user value(null,?,?,?,null)",[email,password,role],(err,result)=>{
        if(err) res.send({
            isRegistred : false,
            message: err.sqlMessage
        });
        else res.send({
            isRegistred : true,
        });
    })
}