import axios from "axios";
import { ReactSession } from "react-client-session";
import "./style/styles.css";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { DiAptana } from "react-icons/di";
import {AiOutlineApartment} from "react-icons/ai";
import {AiOutlineLink} from "react-icons/ai";
import { FcBookmark } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
import { BiSortDown} from "react-icons/bi";
import { GrAttachment } from "react-icons/gr";
import {HiOutlineUserCircle } from "react-icons/hi";
function AddProject() {
  const [options, setOption] = useState([]);
  const [name, setTextName] = useState("");
  const [type, setTextType] = useState("");
  const [owner, setRefOwner] = useState("");
  const[descri,setDescri]=useState("");
  //  Dropdown for owner
  useEffect(() => {

    var url = "http://localhost:8000/ownerfetch";
    var request = {};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        var len = res.data.length;
        // setA(len);
        if (len > 0) {

          setOption(res.data);
           }
           
      })
      .catch();
  }, []);
  //Insert of new project
  function handleclick() {
    var url = "http://localhost:8000/projectinsert";
    var request = { name: name, type: type, owner: owner };
    console.log("owner :" + JSON.stringify(owner));
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("reS"+JSON.stringify(res.data));
        if (res.data!='undefined') {
          alert("Inserted New project successfully");
        }
        //ReactSession.get("setRefOwner"+owner);


      })
      .catch();
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
              <label className="column1_row1">AddProject</label>
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
  );
}
export default AddProject;
