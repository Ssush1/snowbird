import './style.css'
function Users() {
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
          <div className="secondcolumn">
            <div className="secfirstrow">
              <h3>UserList</h3>
            </div>
            <div className="secsecondrow">
              <button>Create New</button>
            </div>
            <div className='secthirdrow'>
              <table>
                <thead>
                  <th> Id</th>
                  <th> Users</th>
                  <th> UserRoles</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ajay</td>
                    <td>Team Leader</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Vandana</td>
                    <td>Team Leader</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Ayush</td>
                    <td>Team member</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Jatin</td>
                    <td>Team member</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Pratibha</td>
                    <td>Team member</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Mridula</td>
                    <td>Admin</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="pages">
            <button>-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>10</button>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Users
