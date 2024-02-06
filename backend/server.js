const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection ({
    host: "localhost",
    user:"root",
    password:"",
    database:"crud"
})

app.get("/", (req, res) =>{
    const sql = "SELECT * FROM studenti"; //studenti este numele bazei de date din PHP My Admin
    db.query(sql, (err, data) => {
        if (err) return res.json ("Error");
        return res.json(data);
    });
});


app.post("/create", (req, res) => {
    const sql ="INSERT INTO studenti (`Nume`, `Email`, `Resedinta`, `An`) VALUES (?)"; //Cele din paranteza sunt campurile din tabelul "studenti"
    const values = [
        req.body.nume,
        req.body.email,
        req.body.resedinta,
        req.body.an 
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.put("/update/:id", (req, res) => {
    const sql ="update studenti set `Nume` = ?, `Email` = ?, `Resedinta` = ?, `An` = ? where ID = ?"; 
    const values = [
        req.body.nume,
        req.body.email,
        req.body.resedinta,
        req.body.an 
    ]
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.delete("/student/:id", (req, res) => {
    const sql ="DELETE FROM studenti WHERE ID = ?"; 
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("server is up");
})