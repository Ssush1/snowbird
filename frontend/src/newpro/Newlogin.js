import './Style3.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Newlogin() {
  const [username, setusername] = useState('')
  const [Password, setpassword] = useState('')
useEffect (()=>{
  var url='http://localhost:8000/Userdetails'
  var req={"username":"txtUsername",
"Password":"txtPassword"}
var header={}
axios.post(url,req,header).then((res)=>{}).catch(()=>{},[])
})
  function handleclick() {
    if (username!== undefined){} else if (Password!==undefined)
      {return alert("Login Success")} else
    
       return (alert("error!!"))
  }

  
  
  return (
    <>
      <div class="Outerdiv">
        <div class="Innerdiv">
          <div class="row1">
            <h1>Login</h1>
          </div>
          <div class="row2">
            <label>Login</label>
            <input
              type="text"
              onChange={(e) => {
                setusername(e.target.value)
              }}
            ></input>
          </div>
          <div class="row3">
            <label> Password</label>
            <input
              type="text"
              onChange={(e) => {
                setpassword(e.target.value)
              }}
            ></input>
          </div>
          <div class="row4">
            <button onClick={handleclick}>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Newlogin
