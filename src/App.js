import React from 'react'
import Home from './components/home'
import './components/style.scss'



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const  App = () => {
  return (
    
    <Router>
        <div>
        {/* <Header/> */}
        {/* <ScrollToTop /> */}
        <Switch>
          {/* <Route path="/" component={} />
          <Route path='/' component = {}/> */}
          <Route exact path='/'  component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
