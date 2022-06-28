// import './css/addsprintstyle.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./style/styles.css";
import Menu from './Menu'
// import './styles/SnowBirdStyle.css'
import { DiAptana } from "react-icons/di";
import {AiOutlineApartment} from "react-icons/ai";
import {AiOutlineLink} from "react-icons/ai";
import { FcBookmark } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
import { BiSortDown} from "react-icons/bi";
import { GrAttachment } from "react-icons/gr";
import {HiOutlineUserCircle } from "react-icons/hi";

function AddSprint() {
  const [options, setOption] = useState([])
  const [Sprintname, settextSprintname] = useState('')
  const [Description, setdescription] = useState('')
  const [assignedto, settxtUserName] = useState('')
  const [todate, settodate] = useState(new Date())
  const [fromdate, setfromdate] = useState(new Date())
  const [Status, setStatus] = useState('')
  const [array, setArray] = useState([])
  const [statarray, setstatarray] = useState([
    { Id: 1, Status: 'To Do' },
    { Id: 2, Status: 'In Progress' },
    { Id: 3, Status: 'Review' },
    { Id: 4, Status: 'Completed' },
  ])
  // const [taskarray, settaskarray] = useState([])

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
    console.log(Status)
    var url = 'http://localhost:8000/insertSprint'
    var request = {
      txtSprintname: Sprintname,
      Description: Description,
      Status: Status,
      txtUsername: assignedto,
      dtActdate: fromdate,
      dtActenddate: todate,
    }
    var header = {}

    axios
      .post(url, request, header)
      .then((res) => {
        console.log(request.dtActenddate)
        if (res.data)
          //console.log('g1' + JSON.stringify(res.data))
          //console.log(request.dtActenddate)
          alert('added new sprint')
      })
      .catch()
  }

  return (
    <div>
      <div className="outter">
        {/* width:100% */}
        <div className="outer_row1">
          {/* width:50% */}
          <div className="path"><FcFlashOn/>Test Epic/<FcBookmark/>Test-5</div>
          <div className="closeicon">{/* width:50% */}x</div>
        </div>
        <div className="outer_row2">
          {/* width:100% */}
          <div className="outer_column1">
            {/* width:60% */}
            <div>
              <label className="column1_row1">AddSprint</label>
            </div>
            <div className="column1_row2">
              <button className="row2buttons"><GrAttachment/>Attach</button>
              <button className="row2buttons"><AiOutlineApartment/> Add a child issue</button>
              <button className="row2buttons"><AiOutlineLink/> Link issue</button>
              <select className="select">
                <option value=""></option>
              </select>
              <button className="row2buttons">...</button>
            </div>
           <div className="column1_row3">
              <label>Description</label>
              <textarea
                rows="10"
                cols="200"
                placeholder="Add a description..."
              ></textarea>
            </div>
            <div className="column1_row4">
              <label>Activity</label>
            </div>
            <div className="column1_row5">
            <div className="row5">
                <button className="row5buttons">Show</button>
                <button className="row5buttons">All</button>
                <button className="row5buttons">Comments</button>
                <button className="row5buttons">History</button>
              </div>

              <div className="row5_1">
                <label>Newest First <BiSortDown/></label>
              </div>
            </div>
            <div className="column1_row6">
              <div className="row6"> A </div>
              <div className="row7">
                <textarea rows="10" cols="200"></textarea>
              </div>
            </div>
            <div className="column1_row7">
              <button9 className="row8">Save</button9>
              <button10 className="row9">Cancel</button10>
            </div>
          </div>
          <div className="outer_column2">
            <div className="column2_row1">
              <select className='select1'>
                <option value="To Do">To Do</option>
              </select>
            </div>
            <div className="column2_row2">Details</div>
            <div className="column2_row3">
            <div className="column2_row3_1">
              <div className="listt">Assignee</div>
              <div className="listt">label</div>
              <div className="listt">label</div>
              <div className="listt">label</div>
              <div className="listt">label</div>
            </div>
            <div className="column2_row3_2">
              <div className="listt"><HiOutlineUserCircle/>Unassigned</div>
              <div className="listt">None</div>
              <div className="listt">label</div>
              <div className="listt">label</div>
              <div className="listt">
                <div className="list_A">A</div><div>label</div>
              </div>
            </div>
            </div>
            <div className="column3_row1">
            <label>created 9 minutes ago</label>
            <label className="cl3row1"><DiAptana/>Configure</label>
            </div>
            <div className="column3_row2"><label>uploaded 8 minutes ago</label></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddSprint
