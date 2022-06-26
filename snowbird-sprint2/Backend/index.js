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

/**********************************  Sprints ************************************************************/
/*API for FetchUser*/

app.post('/fetchuser', function (req, res) {
  var sql = ' select id,txtUserName,txtPassword from tblusers'

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
    }
  })
})

/*API for Update Sprint*/

app.post('/updatesprint', function (req, res) {
  var Sprint = req.body.txtSprintname
  var id = req.body.id
  var Description = req.body.Description
  var assign = req.body.txtUsername
  var Status = req.body.Status
  var Acstdate = req.body.dtActstartdate
  var Acenddate = req.body.dtActenddate
  var state = req.body.togglestate

  var sql =
    "UPDATE tblsprints SET txtSprintname='" +
    Sprint +
    "',Description='"+Description+"',txtUsername='"+assign+"',Status='"+Status+"',dtActstartdate='"+Acstdate+"',dtActenddate'"+Acenddate+"',state'"+state+"'  WHERE id='" +
    id +
    "';"

  con.query(sql, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

/*API for InsertSprint*/

app.post('/InsertSprint', function (req, res) {
  var Sname = req.body.txtSprintname
  var Desc = req.body.Description
  var assign = req.body.txtUsername
  var Status = req.body.Status
  var Acstdate = req.body.dtActstartdate
  var Acenddate = req.body.dtActenddate
  var state = req.body.togglestate

  //var sql1 = "Select id from tblusers where txtUsername='" + uname + "';"
  var sql =
    "Insert into tblsprints(txtSprintname,Description,txtUsername,Status,dtActstartdate,dtActenddate,state) values('" +
    Sname +
    "' ,'" +
    Desc +
    "','" +
    assign +
    "','" +
    Status +
    "','" +
    Acstdate +
    "','" +
    Acenddate +
    "','" +
    state +
    "')"

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
    }
  })
})
/*API for FetchSprintlist*/

app.post('/fetchsprintlist', function (req, res) {
  var sql =
    ' select Id,txtSprintname,dtActstartdate,dtActenddate from tblsprints'

  con.query(sql, function (err, result) {
    
    if (err) throw err
    else {
      res.send(result)
    }
  })
})

/*API for Fetch Sprintwisetasklist*/

app.post('/fetchsprintwisetasklist', function (req, res) {
  var Sid = req.body.refsprintid
  var sql =
    " select txtTitle,txtDesc,txtStatus,refepicid,refAssignee,dtEststartdate,dtestenddate,dtActstartdate,dtActenddate from tbltasks where refsprintid='" +
    Sid +
    "';"

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
    }
  })
})
/*API for Fetch Sprintdetails as per sprintid*/
app.post('/sprintdetails', function (req, res) {
  var Sid = req.body.Id
  var sql =
    "select txtSprintname,Description,txtUsername,Status,dtActstartdate,dtActenddate,state from tblsprints where Id='" +
    Sid +
    "';"

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
