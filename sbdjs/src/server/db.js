import express from 'express';
import mysql from 'mysql';

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sbdjs'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});