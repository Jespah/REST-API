"use strict";
const http    = require ("http");
const url     = require ("url");
const path    = require ("path");
const express = require ("express");
const port    = 3000;
const host    = "localhost";

const app    = express();

const server = http.createServer(app); 

const mysql      = require("mysql");
const connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database : "saastopossu"
});

app.use(express.json());

connection.connect(function(err){
    if (err) throw err;
    console.log("connected to database");
});

app.get("/transactions", (req,res) =>{
    connection.query ("SELECT * FROM tapahtuma",
        function (err, result){
            if (err) {res.sendStatus(400);throw err;}
            else {
                res.json(result);
            }
        }
    );
});

app.post("/transactions", (req,res) =>{ 
    let data = req.body;
    if (!data) {
        res.sendStatus(400);}
    connection.query ("INSERT INTO tapahtuma (SP_ID, Rahanarvo) VALUES (?, ?)", [data.SP_ID, data.Rahanarvo],
        function (err, result) {
            if (err) {res.sendStatus(400);throw err;}
            else {
                res.json(
                    {
                        "messsage":"success",
                        "status": "200"

                    }
                );
            }
        }
    );
});

app.get("/transactions/:id", (req,res)=>{
    connection.query ("SELECT * FROM tapahtuma WHERE ID = ?", [req.params.id],
        function (err, result) {
            if (err) {res.sendStatus(400);throw err;}
            else {
                res.json(result);
            }
        }
    );
});

server.listen(port, host, ()=>
    console.log("Connected to server")
);
