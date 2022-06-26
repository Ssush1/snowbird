import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditSprint from './EditSprint'
// import Users from './Users'
import AddSprint from './AddSprint'
import Sprints from './Sprints'
// import Task from './Task'
// import Epic from './Epic'
// import AddProject from './AddProject'
// import EditProject from './EditProject'
// import AddUser from './AddUser'
// import EditUser from './EditUser'
// import Project from './Project'
// import AddTask from './AddTask'
import EditTask from './EditTask'
// import EditEpic from './EditEpic'
// import AddEpic from './AddEpic'
import LoginPage from './LoginPage'
// import Dashboard from './Dashboard'


// import Newlogin from './newpro/Newlogin'

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          {/* <Route path="/Epic" element={<Epic />}></Route> */}
          {/* <Route path="/AddEpic" element={<AddEpic />}></Route> */}
          {/* <Route path="/EditEpic" element={<EditEpic />}></Route> */}
          {/* <Route path="/AddTask" element={<AddTask />}></Route> */}
          <Route path="/EditTask" element={<EditTask />}></Route>
          {/* <Route path="/Users" element={<Users />}></Route> */}
          <Route path="/Sprints" element={<Sprints />}></Route>
          <Route path="/AddSprint" element={<AddSprint />}></Route>
          <Route path="/EditSprint" element={<EditSprint />}></Route>
          {/* <Route path="/Project" element={<Project />}></Route>
          <Route path="/Task" element={<Task />}></Route>
          <Route path="/AddProject" element={<AddProject />}></Route>
          <Route path="/EditProject" element={<EditProject />}></Route>
          <Route path="/EditUser" element={<EditUser />}></Route>
          <Route path="/AddUser" element={<AddUser />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
           */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Navigation
