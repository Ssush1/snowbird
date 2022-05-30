import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from './Menu'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function AddSprint() {
  const [options, setOption] = useState([])
  const [Sprintname, settextSprintname] = useState('')
  const [Description,setdescription]=useState('')
  const [assignedto, settxtUserName] = useState('')
  const [todate,settodate]=useState(new Date())
  const [fromdate, setfromdate] = useState(new Date())
  const [Status,setstatus]= useState('')
  //const handlechange = (date) => setfromdate(date)
  const navigate = useNavigate()
  //const m = moment(date, 'yy-mm-dd');
  //console.log(m.format('MMMM'))
  //List-dropdown -Assigned to
  useEffect(() => {
    var url = 'http://localhost:8000/fetchuserRole'
    var request = {}
    var header = {}
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data)
        var len = res.data.length
        // setA(len);
        if (len > 0) {
          setOption(res.data)
        }
      })
      .catch()
  }, [])

  //insert of new sprint

  function handleclick() {
    var url = 'http://localhost:8000/insertSprint'
    var request = {
      Title: Sprintname,
      Description:Description,
      Status:Status,
      Assignedto: assignedto,
      FromDate: fromdate,
      ToDate: todate,
    }
    //console.log('assignedto:' + JSON.stringify(assignedto))
    var header = {}

    axios
      .post(url, request, header)
      .then((res) => {
        console.log('reS' + JSON.stringify(res.data))
        if (res.data !== 'undefined') {
          alert('added new sprint')
        }
      })
      .catch()
  }

  return (
    <div className="outer">
      {/* USer name with icon */}
      <div className="firstrow">
        <div className="usericon"> </div>
        <label>User</label>
      </div>
      <div className="secondrow">
        {/*Side navigation menu */}

        <Menu />

        <div className="secondcolumn">
          <div className="prowone">
            <label>Add Sprint</label>
            <button onClick={handleclick}>SAVE</button>
          </div>
          <div className="psecondrow">
            <div className="titlerow">
              <label>Title</label>
              <input
                type="text"
                onChange={(e) => {
                  settextSprintname(e.target.value)
                }}
              />
            </div>

            <div className="titlerow">
              <label>Description</label>
              <textarea rows="6" cols="50"></textarea>
            </div>

            <div className="typerow">
              <label>Status</label>
              <br></br>
              <select>
                <option>--options--</option>
                <option>To do</option>
                <option>In Progress</option>
                <option>Review</option>
                <option>Completed</option>
              </select>

              <label>Assigned to</label>
              <br></br>
              <select
                onChange={(e) => {
                  settxtUserName(e.target.value)
                }}
              >
                {options.map((item, index) => {
                  return (
                    <>
                      <option value={item.id}>{item.txtUserName}</option>
                    </>
                  )
                })}
              </select>
            </div>

            <div className="ownerrow">
              <label>From date</label>
              <input type="date"/>
              <br></br>
              {/* <select>
                  <DatePicker
                    selected={date}
                    onChange={handlechange}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                  /> */}

              {/* <option>{m.format('MMMM')}</option> */}
              {/* <Datepicker */}
              {/* controls={['calendar', 'time']}
   timeFormat="HH:mm:ss"
 /> */}
              {/* </select> */}
            </div>
            <div className="ownerrow">
              
              <label>To date</label> 
              <input type="date"/>
              <br></br>
              <select>
                <option>--options--</option> <option>AAA</option> */}
                <option>BBB</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSprint
