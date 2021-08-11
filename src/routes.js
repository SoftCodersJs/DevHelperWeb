import React from 'react'
import { Route, BrowserRouter } from "react-router-dom"

import ask from "./pages/askques/index"
import Home from "./pages/Home/index"
import Login from "./pages/Login/index"
import Register from "./pages/Register/index"
import Profile from "./pages/Profile/index"
import duvidas from "./pages/duvidas/index"

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Login} path="/login"/>
            <Route component={Register} path="/register"/>
            <Route component={Profile} path="/Profile"/>
            <Route component={duvidas} path="/duvidas"/>
            <Route component={ask} path="/ask"/>
        </BrowserRouter>
    )
}

export default Routes