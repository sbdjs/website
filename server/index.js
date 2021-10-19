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

app.get('/api/get', (req, res) => {
   const uid = req.body.uid, 
   username = req.body.username,
   bot_name = req.body.bot_name,
   bot_desc = req.body.bot_desc,
   bot_avatar = req.body.bot_avatar,
   bot_invit = req.body.bot_invit;

   const sql = "SELECT * FROM usertable"
   db.query(sql, (err, result) => {
      res.send(result)
   });
});

app.get('/api/get/verfification/:uid', (req, res) => {
    const uid = req.params.uid;
    const sql = "SELECT id FROM usertable WHERE uid = ?"
    db.query(sql, [uid], (err, result) => {
        res.send(result);
        console.log(result);
    });
})

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
   });
});

app.delete('/api/delete/:id', (req, res) => {
   const id = req.params.id;
   const sql = "DELETE FROM usertable WHERE id = ?"
   db.query(sql, id, (err, result) => {
      if(err)  console.log(err)
   })
});

app.put('/api/update/:id', (req, res) => {
   const id = req.params.id,
   bot_name = req.body.bot_name,
   bot_desc = req.body.bot_desc,
   bot_avatar = req.body.bot_avatar,
   bot_invit = req.body.bot_invit;

   const sql = "UPDATE usertable SET bot_name = ?, bot_desc = ?, bot_avatar = ?, bot_invit = ? WHERE id = ?"
   db.query(sql, [bot_name, bot_desc, bot_avatar, bot_invit, id], (err, result) => {
      if(err)  console.log(err)
   })
});

app.listen(process.env.PORT, () => {
   console.log(`running on port ${process.env.PORT}`);
});