import './css/addsprintstyle.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from './Menu'
function AddSprint() {
  const [options, setOption] = useState([])
  const [Sprintname, settextSprintname] = useState('')
  const [Description, setdescription] = useState('')
  const [assignedto, settxtUserName] = useState('')
  const [todate, settodate] = useState(new Date())
  const [fromdate, setfromdate] = useState(new Date())
  const [Status, setStatus] = useState('')
  const [array, setArray] = useState([])
  const [togglestate,settogglestate]=useState('')
  const [statarray, setstatarray] = useState([
    { Id: 1, Status: 'To Do' },
    { Id: 2, Status: 'In Progress' },
    { Id: 3, Status: 'Review' },
    { Id: 4, Status: 'Completed' },
  ])

  const navigate = useNavigate()
  useEffect(() => {
    var url = 'http://localhost:8000/fetchuser'
    var req = {}
    var header = {}
    axios
      .post(url, req, header)
      .then((res) => {
        setArray(res.data)
      })
      .catch()
  }, [])

  function handleclick() {
    //console.log('hi')
    var url = 'http://localhost:8000/insertSprint'
    var request = {
      txtSprintname: Sprintname,
      Description:Description,
      Status: Status,
      txtUserName:assignedto,
      dtActdate:fromdate,
      dtActenddate: todate,
      togglestate:togglestate
      
    }
    var header = {}

    axios
      .post(url, request, header)
      .then((res) => {
        // console.log('result' + JSON.stringify(res.data))
        if (res.data !== 'undefined') {
          alert('added new sprint')
        
        }
      })
      .catch()
  }
  function newClick(){
    console.log(togglestate)
    settogglestate(togglestate==1?0:1)
  }

  return (
    <div className="outer">
      <div className="firstrow">
        <div className="usericon"> </div>
        <label>User</label>
        {togglestate}
      </div>
      <div className="secondrow">
        {<Menu />}
        <div className="as_sc">
          <div className="as_sc_row1">
            <div className="as_sc_row1_cl1">
              <label>Add Sprint</label>
            </div>
            <div className="as_sc_row1_cl2">
              <button onClick={handleclick}>SAVE</button>
            </div>
            <div className='togbutton'>
              <label class="switch">
                <input type="checkbox" defaultChecked="checked" onClick={newClick}></input>
                <span class="slider round" ></span>
              </label>
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
              <select
                className="as_sc_dropbox1"
                value={Status}
                onChange={(e) => {
                  setStatus(e.target.value)
                }}
              >
                {statarray.map((stitem, stindex) => {
                  return (
                    <>
                      <option value={stitem.Status}>{stitem.Status}</option>
                    </>
                  )
                })} 
                
              </select>
              
            </div>
            <div className="as_sc_row3_cl2">
              <label>Assigned to</label>
              <select
                className="as_sc_dropbox2"
                value={assignedto}
                onChange={(e) => {
                  settxtUserName(e.target.value)
                }}
              >
                {array.map((item, index) => {
                  return (
                    <>
                      <option value={item.txtUserName}>{item.txtUserName}</option>
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
                v
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
          <div className="as_sc_row6">
            <button>1</button>
            <button>2</button>
            <button>...</button>
            <button>10</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddSprint
