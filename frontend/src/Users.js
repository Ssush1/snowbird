import axios from 'axios'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function handleClick() {
  navigate('/AddUser')
}
function newClick() {
  navigate('/EditUser')
}
function Users() {

  const navigate=useNavigate()
  useEffect (()=>{
    var request={}
    var header={}
    var url=

  
  })


  
  
  
  const[array,setarray]=useState([])
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow">
          <div className="usericon"></div>
          <label>User</label>
        </div>
        <div className="secondrow">
          {/* Side navigation menu */}
          <div className="firstcolumn">
            <nav>
              <li>Board</li>
              <li>Projects</li>
              <li>Epics</li>
              <li>Tasks</li>
              <li>Sprints</li>
              <li>Users</li>
            </nav>
          </div>
          <div className="secondcolumn">
            <div className="prowone">
              <label>Users</label>
              <button onClick={handleClick}>Create New</button>
            </div>
            <table className="tablerow">
              <tr className="TblFirstrow">
                <th className="tblId">Id</th>
                <th className="tblTitle">Users</th>
                <th className="tblDate">UserRoles</th>
              </tr>
              <tr>
                <th> Id</th>
                <th> Users</th>
                <th> UserRoles</th>
              </tr>

              {array.map((item, index) => {
                return (
                  <>
                    <tr onClick={newClick}>
                      <td>{item.Id}</td>
                      <td>{item.txtUsername}</td>
                      <td>{item.txtUserRole}</td>
                    </tr>
                  </>
                )
              })}
            </table>

            <div className="pbutton">
              <button>1</button>
              <button>2</button>
              <button>...</button>
              <button>10</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Users
