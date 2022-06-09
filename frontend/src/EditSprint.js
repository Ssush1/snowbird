import './css/addsprintstyle.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from './Menu'

function EditSprint() {
  // const [options, setOption] = useState([])
  const [txtSprintname, settextSprintname] = useState("")
  const [Description, setdescription] = useState("")
  const [Status, setStatus] = useState("")
  const [txtUserName, settxtUserName] = useState("")
  const [fromdate, setdtActenddate] = useState(Date)
  const [todate, setdtActstartdate] = useState(Date)
  const [array, setArray] = useState([])
  const [taskarray, settaskarray] = useState([])
  const [statarray, setstatarray] = useState([
    { Id: 1, Status: 'To Do' },
    { Id: 2, Status: 'In Progress' },
    { Id: 3, Status: 'Review' },
    { Id: 4, Status: 'Completed' },
  ])
  const [sparray, setsparray] = useState([])
  const navigate = useNavigate()
  const [Id, setid] = useState('')

  useEffect(() => {
    //localStorage.getItem(Id)
    var tempid = localStorage.getItem('spid')
    //console.log(tempid)
    setid(tempid)
    var url = 'http://localhost:8000/sprintdetails'
    var req = { Id: tempid }
    var header = {}
    axios
      .post(url, req, header)
      .then((res) => {
        //console.log(JSON.stringify(req))
        //console.log('response' + JSON.stringify(res.data))
        setsparray(res.data)

        settextSprintname(res.data[0].txtSprintname)
        setdescription(res.data[0].Description)
        setStatus(res.data[0].Status)
        settxtUserName(res.data[0].txtUserName)
        setdtActstartdate(res.data[0].dtActstartdate)
        setdtActenddate(res.data[0].dtActenddate)
      })
      .catch()
  }, [])

  // function handleclick() {
  //   var url = 'http://localhost:8000/updatesprint'
  //   var request = {
  //     txtSprintname: txtSprintname,
  //     Description: Description,
  //     dtActstartdate: fromdate,
  //     dtActenddate: todate,
  //     Status: Status,
  //     assignedto: txtUserName,
  //   }
  //   // console.log(request)
  //   var header = {}

  //   axios
  //     .post(url, request, header)
  //     .then((res) => {
  //       // console.log('result' + JSON.stringify(res.data))
  //       if (res.data !== 'undefined') {
  //         alert('updated sprint')
  //       }
  //     })
  //     .catch()
  // }
  function newClick() {
    navigate('/Task')
  }

  return (
    <div className="outer">
      <div className="firstrow">
        <div className="usericon"> </div>
        <label>User</label>
      </div>
      <div className="secondrow">
        {<Menu />}
        <div className="as_sc">
          <div className="as_sc_row1">
            <div className="as_sc_row1_cl1">
              <label>EditSprint</label>
            </div>
            <div className="as_sc_row1_cl2">
              {/* <button onClick={handleclick}>SAVE</button> */}
            </div>
          </div>
          <div className="as_sc_row2">
            <div className="as_sc_row2_cl1">
              <label>Title</label>
              <input
                type="text"
                value={txtSprintname}
                onChange={(e) => {
                  settextSprintname(e.target.value)
                }}
              />
            </div>

            <div className="as_sc_row2_cl2">
              <label>Description</label>
              <textarea
                rows="8"
                cols="60"
                value={Description}
                onChange={(e) => {
                  setdescription(e.target.value)
                }}
              ></textarea>
            </div>
          </div>
          <div className="as_sc_row3">
            <div className="as_sc_row3_cl1">
              <label>Status</label>

              <select
                className="as_sc_dropbox1"
               // value={Status}
                onChange={(e) => {
                  setStatus(e.target.value)
                }}
              >
                {statarray.map((stitem, stindex) => {
                  return (
                    <>
                      <option value={stitem.Id}>{stitem.Status}</option>
                    </>
                  )
                })} 
                
              </select>
            </div>
            <div className="as_sc_row3_cl2">
              <label>Assigned to</label>
              <select
                className="as_sc_dropbox2"
                value={txtUserName}
                onChange={(e) => {
                  settxtUserName(e.target.value)
                }}
              >
                {array.map((item, index) => {
                  return (
                    <>
                      <option value={item.id}>{item.txtUserName}</option>
                    </>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="as_sc_row4">
            <div className="as_sc_row4_cl1">
              <label>From date</label>

              <input
                type="date"
                placeholder
                text={fromdate}
                onChange={(date) => {
                  setdtActstartdate(date)
                }}
              />
            </div>
            <div className="as_sc_row4_cl2">
              <label>To date</label>
              <input
                type="date"
                onChange={(e) => {
                  setdtActenddate(e.target.value)
                }}
              />
            </div>
          </div>

          <div className="as_sc_row7">
            <div className="as_sc_row7_cl1">
              <label>Task</label>
            </div>
            <div className="as_sc_row7_cl2">
              <button onClick={newClick}>Add</button>
            </div>
          </div>
          <div></div>
          <table className="tablerow">
            <tr className="TblFirstrow">
              <th>#id</th>
              <th>Task</th>
              <th>Status</th>
              <th>Epic Name</th>
              <th>Project Name</th>
            </tr>

            {taskarray.map((item, index) => {
              return (
                <>
                  <tr onClick={newClick}>
                    <td className="tbdata">{item.Id}</td>
                    <td>{item.txttaskname}</td>
                    <td>{item.status}</td>
                    <td>{item.epicname}</td>
                    <td>{item.projectname}</td>
                  </tr>
                </>
              )
            })}
          </table>
        </div>

        <div className="as_sc_row6">
          <button>1</button>
          <button>2</button>
          <button>...</button>
          <button>10</button>
        </div>
      </div>
    </div>
  )
}
export default EditSprint
