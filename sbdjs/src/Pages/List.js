import React from 'react';
import '../App.css';
import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();
const db = mysql.createConnection({
   user: process.env.DB_USER,
   host: process.env.DB_HOST,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE,
});

function List() {
  return (
     <div>
        <h1>List Page</h1>
    </div>
  );
}

export default List;
