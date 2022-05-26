import "./styles/styles.css";
function TaskList() {
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow">
          <div className="usericon"></div>
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

          {/* Main outline */}
          <div className="secondcolumn">
            <div className="seccolumfirstrow">
              <label>
                <h2>Epic</h2>
              </label>
              <button className="buttonright">Create New</button>
            </div>
            <div className="seccolumsecondrow">
              <table className="tableborder">
                <thead>
                  <th>#id</th> <th>Task</th> <th>Status</th>{" "}
                  <th>Epic</th><th>ProjectName</th>
                </thead>
                <tbody>
                    <tr className="trow"><td>1</td>   <td>User1</td>  <td>ToDo</td>  <td>Api</td><td>Ecommerce</td></tr>
                    <tr className="trow"><td>2</td>   <td>User2</td>  <td>ToDo</td>  <td>Ui</td><td>Jira</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}