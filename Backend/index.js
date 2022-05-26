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

/**********************************  USERS ************************************************************/

/*API for FetchUserrole*/

app.post('/fetchuserRole', function (req, res) {
  var sql =
    " select tu.id,tu.txtUserName,tu.txtPassword,tr.txtUserrole from tblusers tu join tbluserroles tr on tu.RefUserRole=tr.id where tu.txtUsername='Arpana'"

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
    }
  })
})

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

/*API for Insert User*/

app.post('/insertuser', function (req, res) {
  var uname = req.body.txtUsername
  var paswd = req.body.txtPassword
  var userrole = req.body.RefUserRole

  var sql1 = "Select id from tblusers where txtUsername='" + uname + "';"
  var sql2 =
    "Insert into tblusers(txtUsername,txtPassword,RefUserRole) values('" +
    uname +
    "','" +
    paswd +
    "','" +
    userrole +
    "');"

  con.query(sql1, function (err, result) {
    var a = result[0]
    if (a != undefined) {
      res.send('user already exists!!')
    } else {
      con.query(sql2, function (err, result) {
        if (err) throw err
        else {
          res.send(result)
        }
      })
    }
  })
})

/*API for Update User*/

app.post('/updateuser', function (req, res) {
  var Username = req.body.txtUsername
  var id = req.body.id
  var sql =
    "UPDATE tblusers SET txtUsername='" + Username + "' WHERE id='" + id + "';"

  con.query(sql, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

/**********************************  Sprints ************************************************************/

/*API for Update Sprint*/

app.post('/updatesprint', function (req, res) {
  var Sprint = req.body.txtSprintname
  var id = req.body.id
  var sql =
    "UPDATE tblsprints SET txtSprintname='" +
    Sprint +
    "' WHERE id='" +
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
  var Stdate = req.body.stdate
  var Enddate = req.body.enddate
  var Acstdate = req.body.acstdate
  var Acenddate = req.body.acenddate

  //var sql1 = "Select id from tblusers where txtUsername='" + uname + "';"
  var sql =
    "Insert into tblsprints(txtSprintname,dtEststartdate,dtestenddate,dtActstartdate,dtActenddate) values('" +
    Sname +
    "' ,'" +
    Stdate +
    "','" +
    Enddate +
    "','" +
    Acstdate +
    "','" +
    Acenddate +
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
  var sql =
    " select  Id,txtTitle,txtDesc,txtStatus,refepicid,refAssignee,dtEststartdate,dtestenddate,dtActstartdate,dtActenddate from tbltasks where refsprintid='1';"

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
    }
  })
})
app.post('/fetchTasklist', function (req, res) {
  var sql =
    ' select  Id,txtTitle,txtDesc,txtStatus,refepicid,refAssignee,dtEststartdate,dtestenddate,dtActstartdate,dtActenddate from tbltasks'

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
    }
  })
})

app.post('/InsertTask', function (req, res) {
  var Tname = req.body.txtTitle
  var Tdesc = req.body.txtDesc
  var Status = req.body.txtStatus
  var Refepicid = req.body.refepicid
  var Assignedto = req.body.refAssignee
  var Refsprintid = req.body.refsprintid
 

  var sql =
    "insert into tbltasks (txtTitle,txtDesc,txtStatus,refepicid,refAssignee,refsprintid) values('" +
    Tname +
    "' ,'" +
    Tdesc +
    "','" +
    Status +
    "','" +
    Refepicid +
    '","' +
    Assignedto +
    "','" +
    Refsprintid +
    "')"

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
