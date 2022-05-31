import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from './Menu'

function EditSprint() {
  const [options, setOption] = useState([])
  const [Sprintname, settextSprintname] = useState('')
  const [assignedto, settxtUserName] = useState('')
  const navigate = useNavigate()

  const handleclick=()=>{};
  const taskarray=()=>{};
  const newClick=()=>{};

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

  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow">
          <div className="usericon"> </div>
          <label>User</label>
        </div>
        <div className="secondrow">
          {/* Side navigation menu */}
          {<Menu />}
          <div className="secondcolumn">
            <div className="prowone">
              <label>EditSprint</label>
              <button onClick={handleclick}>SAVE</button>
            </div>

            <div className="psecondrow">
              <div className="titlerow">
                <label>Title</label>
                <br></br>
                <input type="text" />
              </div>
              <div className="titlerow1">
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
                <input type="date" />
                <br></br>
              </div>
              <div className="ownerrow">
                <label>To date</label>
                <input type="date" />
              </div>

              <div className="prowone">
                <label>Task</label>
                <button onClick={handleclick}>Add Task</button>
              </div>

              <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditSprint
