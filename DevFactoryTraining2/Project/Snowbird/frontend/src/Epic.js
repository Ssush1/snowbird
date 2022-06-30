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


function Epic() {
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
  function OneClick(n) {
    console.log('fetid' + n)
    //setPrjctId(n);
    localStorage.setItem('EpicId', n)
    navigate('/editepic')
  }
  function newep() {
    navigate('/addepic')
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
                <label>Epic</label>
              </div>
              <div className="prowone_right">
              <button onClick={newep}>Create Epic</button>
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
            <th>EpicName</th>
            <th>Status</th>
            <th>ProjectName</th>
            <th></th>
        </tr>
         
            <tr onClick={OneClick}> 
            <td><BsStar /></td> 
            <td>1</td>
            <td>Epic1</td>
            <td>To Do</td>
            <td>NewProject</td>
            </tr>  
            <tr><td><BsStar /></td>
            <td>1</td>
            <td>Epic2</td>
            <td>To Do</td>
            <td>NewProject</td>
            </tr>     
        </table>
        </div>
      </div>
    </div>
</div>
</div>
  )}
export default Epic
