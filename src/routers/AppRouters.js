import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Productos from '../pages/Productos'
import NavBar from '../components/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function AppRouters() {
    return (
        <Router>
            <NavBar/>
            <Switch>
            <Route exact path="/" component={Home}>Home</Route>
            <Route path="/About" component={About}>About</Route>
            <Route path="/Productos" component={Productos}>Productos</Route>
            </Switch>
        </Router>
    )
}

export default AppRouters
