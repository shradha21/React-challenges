import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './Home'
import AutoFills from './AutoFills'
import FetchUserId from './FetchUserId'
import DropDown from './DropDown'

function App(props) {
    return (
        <Router>
            <div>
                <h1>React Assignments</h1>

                <Link to = "/home">Home</Link> |
                <Link to = "/autofills">AutoFills</Link> |
                <Link to = "/users">UserInfo</Link> |
                <Link to = "/user">Users</Link>
                
                <Route path = "/home" component = {Home} exact = {true} /> 
                <Route path = "/autofills" component = {AutoFills}  />
                <Route path = "/users" component = {FetchUserId} />
                <Route path = "/user" component = {DropDown} />
            </div>
        </Router>
        
        
    )
}

export default App