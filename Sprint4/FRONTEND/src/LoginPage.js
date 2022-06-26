import { useState } from 'react'
import axios from 'axios'
import './styles/SnowBirdStyle.css'
import { useNavigate } from 'react-router-dom'
import logo_snow from './Images/logo_snow.png'
import dlogo from './Images/dlogo.png'
import left from './Images/left.png'

function LoginPage() {
  const [Username, setusername] = useState('')
  const [Password, setpassword] = useState('')
  const [errormessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  function handleclick(e) {
    console.log('hi')
    //e.preventDefault();
    var url = 'http://localhost:8000/uservalidation'
    var req = { txtUserName: Username, txtPassword: Password }
    var header = {}

    axios
      .post(url, req, header)
      .then((res) => {
        console.log('hiii')
        console.log(res)
        console.log(res.data)
        console.log(res.data[0].VAL)
        var result = res.data[0].VAL

        if (result === 0) {
          setErrorMessage('Error in Username Or Password')
          console.log('req' + result)
        } else {
          //  // var result=res.data;

          setErrorMessage('Success')
          console.log('req' + result)

          //   //ReactSession.set("token", res.data.token);
          //  //ReactSession.set("username", Username);
          //   //ReactSession.set("password", Password);
          //  //ReactSession.set("userid", result[0].id);
          navigate('/DashBoard')
        }
      })
      .catch()
  }
  // function newclick(e) {
  //   e.preventDefault()
  //   navigate('/SignUp')
  // }

  return (
    <div>
      <div className="Outerdiv">
        <div className="column1">
          <div>
            <img src={left} className="image1" />
          </div>
        </div>
        <div className="column2">
          <div className="row1">
            <img src={logo_snow} className="image2" />
            <input
              className="input"
              onChange={(e) => {
                setusername(e.target.value)
              }}
              type="text"
              placeholder="Enter Email"
            />
            <input
              className="input"
              onChange={(e) => {
                setpassword(e.target.value)
              }}
              type="password"
              placeholder="Enter Password"
            />
            <button onClick={handleclick}>Continue</button>
            <p>{errormessage}</p>
          <label className="row2">Privacy Policy . User Notice</label>
          <img src={dlogo} className="row3" />
          <label className="row4">
            One account for Jira,Conflue+
            nce,Trello and more
          </label>
        </div>
        </div>
        <div className="column3">
          <img src={left} className="image3" />
        </div>
      </div>
    </div>
  )
}
export default LoginPage
