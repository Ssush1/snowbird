


function AddSprint() {
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
      
          <div className="secondcolumn">
            <div className="prowone">
              <label>Add Sprint</label>
              <button>SAVE</button>
            </div>

            <div className="psecondrow">
              <div className="titlerow">
                <label>Title</label>
                <input type="text" />
              </div>

              <div className="titlerow">
                <label>Description</label>
                <textarea rows="6" cols="50"></textarea>
              </div>
              <div className="description"></div>

              <div className="typerow">
                <label>Status</label>
                <br></br>
                <select>
                  <option>--options--</option>
                  <option>Sprint1</option>
                  <option>Sprint2</option>
                </select>

                <label>Assigned to</label>
                <br></br>
                <select>
                  <option>--options--</option>
                  <option>Sprint1</option>
                  <option>Sprint2</option>
                </select>
              </div>

              <div className="ownerrow">
                <label>From date</label>
                <br></br>
                <select>
                  <option>--options--</option>
                  <option>AAA</option>
                  <option>BBB</option>
                </select>
              </div>
              <div className="ownerrow">
                <label>To date</label>
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
export default AddSprint
