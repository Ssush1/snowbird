import './style.css'
function Sprints() {
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
              <button>Create New</button>
            </div>
            <div className="tablerow">
              <table>
                <thead>
                  <th>#id</th>
                  <th>Sprint name</th>
                  <th>Sprint owner</th>
                </thead>

                <tbody>
                  <tr>
                    <td>1 </td>
                    <td>Sprint1</td>
                    <td>A</td>
                  </tr>
                </tbody>
              </table>
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
  );
}
export default Sprints;
