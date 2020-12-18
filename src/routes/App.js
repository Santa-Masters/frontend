import React from "react"
import Login from "../pages/Login"
import Home from "../pages/Home"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { GlobalStyle } from "../res/styles"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
