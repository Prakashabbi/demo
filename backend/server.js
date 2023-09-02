const express=require("express");
const cors=require("cors");
const mysql=require("mysql");
const app=express();

app.use(express.json());

app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"demo"
})

app.get("/", (req,res)=>
{
    const sql="SELECT * FROM task";
    db.query(sql, (err,data)=>
    {
        if(err) return res.json("ERROR");
        return res.json(data);
    })
})



app.post("/create", (req,res) =>
{
    const sql="INSERT INTO task(`title`,`description`) VALUES (?)";
    const values=[
        req.body.title,
        req.body.description
    ]
    db.query(sql, [values], (err,data)=>
    {
        if(err) return res.json("ERROR");
        return res.json(data);
    })
})


app.put('/update/:id', (req,res) =>
{
    const sql="UPDATE task set `title` = ? , `description` = ? where ID = ?";
    const values=[
        req.body.title,
        req.body.description
    ]
   const id=req.params.id;

   console.log(id);

    db.query(sql, [...values,id], (err,data)=>
    {
        if(err) return res.json("ERROR");
        return res.json(data);
    })
})

app.delete('/student/:id', (req,res) =>
{
    const sql="DELETE FROM task where id= ? ";
    const id=req.params.id;
    db.query(sql, [id], (err,data)=>
    {
        if(err) return res.json("ERROR");
        return res.json(data);
    })
})


app.listen(6060 , ()=>
    {
        console.log("listening");
    })
