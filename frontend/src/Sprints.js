import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

//1.create new-click-redirect to the add sprint page

//2.inside button tag of "create new"

//Onload list- fetch - display
//No. of pages - current page

//Page no.-click-current -task 3 & disable click on the current page

//Row click - edit page//No. of pages - current page

//Page no.-click-current -task 3 & disable click on the current page

//Row click - edit page



function Sprints() {

  function handleClick() {
    navigate('/EditSprint')
  }
  
  var url = 'http://localhost:8000/fetchsprintlist'
  var data = {}
  var header = {}

  axios.post(url,data,header).then(
    (response) => {
      console.log(response.data)
    },
  ).catch((err)=>{console.log (err)})
  

  const count = 10
  const [sprintarray, setsprintarray] = useState([
    { Id: 1, name: 'sprint1', count },
    { Id: 2, name: 'sprint2', count },
    { Id: 3, name: 'sprint3', count },
    { Id: 4, name: 'sprint4', count },
    { Id: 5, name: 'sprint5', count },
  ])

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
              <label>Sprints</label>
              <button onClick={handleClick}>Create New</button>
            </div>
            <div className="tablerow">
              <th>id</th>
              <th>Sprint name</th>
              <th>Sprint owner</th>

              {sprintarray.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>{item.Id}</td>
                      <td>{item.name}</td>
                    </tr>
                  </>
                )
              })}
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
    </div>
  )
}
export default Sprints
