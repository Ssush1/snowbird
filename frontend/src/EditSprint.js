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
{<Menu/>}
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
              <div className="descriptiion">
                <label>Description</label>
                <br></br>
                {/* <textarea/> */}
                <input type="text" />
              </div>

              <div className="typerow">
                <label>Type</label>
                <br></br>
                <select>
                  <option>--options--</option>
                  <option>Sprint1</option>
                  <option>Sprint2</option>
                </select>
              </div>

              <div className="ownerrow">
                <label>Owner</label>
                <br></br>
                <select>
                  <option>--options--</option>
                  <option>AAA</option>
                  <option>BBB</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditSprint
