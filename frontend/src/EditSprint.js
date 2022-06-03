import './css/addsprintstyle.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from './Menu'

function EditSprint() {
  // const [options, setOption] = useState([])
  const [Sprintname, settextSprintname] = useState('')
  const [assignedto, settxtUserName] = useState('')
  const [todate, settodate] = useState('')
  const [fromdate, setfromdate] = useState('')
  const [array, setArray] = useState([])
  const [taskarray, settaskarray] = useState([])
  const navigate = useNavigate()
  const [id, setid] = useState('0')
  var tempid=localStorage.getItem(id);
  setid(tempid)
  
  useEffect(() => {
    //localStorage.getItem(id)
    
    var url = 'http://localhost:8000/fetchsprintwisetasklist'
    var req = {"refsprintid":1}
    var header = {}
    axios
      .post(url, req, header)
      .then((res) => {
        console.log('response'+ JSON.stringify(res.data))
      })
      .catch()
  }, [])

 

  function handleclick() {
    var url = 'http://localhost:8000/updatesprint'
    var request = {
      id:tempid,
      txtSprintname: Sprintname,
      //stdate: fromdate,
      //enddate: todate,
    }
    console.log(request)
    var header = {}

    axios
      .post(url, request, header)
      .then((res) => {
        // console.log('result' + JSON.stringify(res.data))
        if (res.data !== 'undefined') {
          alert('sprint updation success')
        }
      })
      .catch()
  }
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
              <label>EditSprint {id}</label>
            </div>
            <div className="as_sc_row1_cl2">
              <button onClick={handleclick}>SAVE</button>
            </div>
          </div>
          <div className="as_sc_row2">
            <div className="as_sc_row2_cl1">
              <label>Title</label>
              <input
                type="text"
                onChange={(e) => {
                  settextSprintname(e.target.value)
                }}
              />
            </div>

            <div className="as_sc_row2_cl2">
              <label>Description</label>
              <textarea rows="8" cols="60"></textarea>
            </div>
          </div>
          <div className="as_sc_row3">
            <div className="as_sc_row3_cl1">
              <label>Status</label>

              <select className="as_sc_dropbox1">
                <option>--options--</option>
                <option>To do</option>
                <option>In Progress</option>
                <option>Review</option>
                <option>Completed</option>
              </select>
            </div>
            <div className="as_sc_row3_cl2">
              <label>Assigned to</label>
              <select
                className="as_sc_dropbox2"
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
                onChange={(e) => {
                  setfromdate(e.target.value)
                }}
              />
            </div>
            <div className="as_sc_row4_cl2">
              <label>To date</label>
              <input
                type="date"
                onChange={(e) => {
                  settodate(e.target.value)
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
