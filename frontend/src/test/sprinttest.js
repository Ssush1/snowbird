
function AddSprint() {
  return (
    <div className="outer">
      <div className="firstrow">
        <div className="usericon"> </div>
        <label>User</label>
      </div>
      <div className="secondrow">
        {/*Side navigation menu */}

        

        <div className="secondcolumn">
          <div className="prowone">
            <label>Add Sprint</label>
            <button>SAVE</button>
          </div>
          <div className="psecondrow">
            <div className="titlerow">
              <label>Title</label>
              <input type="text"/>
            </div>

            <div className="titlerow">
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
              {/* <select
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
            </select>*/}
            </div> 

            <div className="ownerrow">
              <label>From date</label>
              <input type="date" />
              <br></br>
              {/* <select>
                  <DatePicker
                    selected={date}
                    onChange={handlechange}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                  /> */}

              {/* <option>{m.format('MMMM')}</option> */}
              {/* <Datepicker */}
              {/* controls={['calendar', 'time']}
   timeFormat="HH:mm:ss"
 /> */}
              {/* </select> */}
            </div>
            <div className="ownerrow">
              <label>To date</label>
              <input type="date" />
              <br></br>
              <select>
                <option>--options--</option> <option>AAA</option> 
                <option>BBB</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddSprint
