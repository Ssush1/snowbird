import axios from 'axios'
import { useEffect, useState } from 'react'
import './style/styles.css'
import Menu from './Menu'
import Header from './Header'
// import { FaAngleDown, FaAngleRight } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import {
  BsStar,
  BsStarFill
} from "react-icons/bs";


function Sprint() {
  const navigate = useNavigate()
  const [array, setArray] = useState([])
  var url = 'http://localhost:8000/epicfecth'
  var request = {}
  var header = {}
  useEffect(() => {
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data)
        for (const element of res.data) {
          element.isClicked = true
        }
        setArray(res.data)
      })
      .catch()
  }, [])

  const handleClick = (e, index) => {
    e.preventDefault()
    var temp = [...array]
    console.log('temp' + JSON.stringify(temp[index]))
    temp[index].isClicked = temp[index].isClicked ? false : true
    console.log('temp' + JSON.stringify(temp[index]))
    setArray(temp)
  }
  function newClick(e,Id) {
    localStorage.setItem('spid',Id)
   navigate('/EditSprint')
  }
  function OneClick() {
    navigate('/AddSprint')
  }
  return (
    <div>
      <div className="outer"></div>
      {<Header />}
      <div className="secondrow">
      <div className="firstcolumn">
            <Menu />
          </div>
          <div className="secondcolumn">
            <div className="prowone">
              <div className="prowone_left">
                <label>Sprint</label>
              </div>
              <div className="prowone_right">
              <button onClick={OneClick}>Create Sprint</button>
              </div>
            </div>
            <div className="secthirdrow">
              <div className="searchepic">
                <input type="text" />
                <FaSearch />
              </div>
            </div>
      <div className="userlist">
         {/* <table> 
          <tr> 
             {array.map((item, index) => { 
               return ( 
                <> 
                   <tr
                    onClick={(e) => {
                      handleClick(e, index)
                    }}
                   >
                    <td>
                      {item.isClicked ? (
                        <FaAngleDown
                          onClick={(e) => handleClick(e, item, index)}
                        />
                      ) : (
                        <FaAngleRight
                          onClick={(e) => handleClick(e, item, index)}
                        />
                      )}
                    </td>

                    <td
                      className="constant"
                      onClick={() => {
                        editepic(item.id)
                      }}
                    >
                      {item.id}
                    </td>
                    <td>{item.txtStatus}</td>
                    <td>{item.txtName}</td>
                    <td></td>
                  </tr>
                  {item.Task.map((childItem, ChildIndex) => {
                    return (
                      <>
                        <tr className={item.isClicked ? 'display' : 'none'}>
                          <td></td>
                           <td></td>
                          <td className="task">{childItem.txtTitle}</td>
                          <td className="task">{childItem.txtStatus}</td>
                        </tr>
                      </>
                    )
                  })}
                
                </>
              )
            })}
            </tr>
            </table> */}
            <div className="userlist">
            <table>
            <tr> <th>
                  <BsStarFill />
                </th>
            <th>id</th>
            <th>SprintName</th>
            <th>StDate</th>
            <th>EndDate</th>
            <th></th>
        </tr>
         
            <tr onClick={newClick}> 
            <td><BsStar /></td> 
            <td>1</td>
            <td>Sprint1</td>
            <td>20/06/2022</td>
            <td>27/06/2022</td>
            </tr>  
            <tr><td><BsStar /></td>
            <td>2</td>
            <td>Sprint2</td>
            <td>28/06/2022</td>
            <td>02/07/2022</td>
            </tr>     
        </table>
        </div>
      </div>
    </div>
</div>
</div>
  )}
export default Sprint
