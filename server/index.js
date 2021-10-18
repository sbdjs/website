const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
require('dotenv').config()

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sbdjs'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/insert', (req, res) => {
    const uid = req.body.uid, 
    username = req.body.username,
    bot_name = req.body.bot_name,
    bot_desc = req.body.bot_desc,
    bot_avatar = req.body.bot_avatar,
    bot_invit = req.body.bot_invit;

    const sql = "INSERT INTO usertable (uid, username, bot_name, bot_desc, bot_avatar, bot_invit) VALUES (?, ?, ?, ?, ?, ?);"
    db.query(sql, [uid, username, bot_name, bot_desc, bot_avatar, bot_invit], (err, result) => {
        console.log(result)
    })
});

app.listen(process.env.PORT, () => {
    console.log(`running on port ${process.env.PORT}`);
});