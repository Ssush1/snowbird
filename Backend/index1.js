const express = require('express')
const app = express()
const port = 8000
const mysql = require('mysql')
app.use(express.json())
const cors = require('cors')
app.use(cors())

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'agileprom',
})

con.connect(function (err) {
  if (err) throw err
  else console.log('connected')
})

app.post('/Userdetails', function (req, res) {
    var Username=req.body.txtUsername;
    var Password=req.body.txtPassword;

  var sql =
    "select Id from tblusers where txtUsername='"+Username+"' and txtPassword='"+Password+"';"
    var a= Username
    var b= Password
if (a != undefined) {} else if (b!= undefined){res.send(Id)}
 else {alert("error")}


  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
    }
  })
})
app.listen(8000, () => {
    console.log('Server is running')
  })
  
