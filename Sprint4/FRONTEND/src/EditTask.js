import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react'
import './styles/SnowBirdStyle.css'
import { DiAptana } from "react-icons/di";
import {AiOutlineApartment} from "react-icons/ai";
import {AiOutlineLink} from "react-icons/ai";
import { FcBookmark } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
import { BiSortDown} from "react-icons/bi";
import { GrAttachment } from "react-icons/gr";
import {HiOutlineUserCircle } from "react-icons/hi";
function EditTask() {
  return (
    <div>
      <div className="outer">
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
              <label className="column1_row1">EditTask</label>
            </div>
            <div className="column1_row2">
              <button1><GrAttachment/>Attach</button1>
              <button2><AiOutlineApartment/> Add a child issue</button2>
              <button3><AiOutlineLink/> Link issue</button3>
              <select className="select">
                <option value=""></option>
              </select>
              <button4>...</button4>
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
                <button5>Show</button5>
                <button6>All</button6>
                <button7>Comments</button7>
                <button8>History</button8>
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
              <div className="list">Assignee</div>
              <div className="list">label</div>
              <div className="list">label</div>
              <div className="list">label</div>
              <div className="list">label</div>
            </div>
            <div className="column2_row3_2">
              <div className="list"><HiOutlineUserCircle/>Unassigned</div>
              <div className="list">None</div>
              <div className="list">label</div>
              <div className="list">label</div>
              <div className="list">
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
export default EditTask
