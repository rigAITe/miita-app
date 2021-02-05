import React from 'react'
import Home from './components/home'
import Determine from './components/letsDetermine'
import PaginationA1 from './pagination/paginationA1'
import PaginationA2 from './pagination/paginationA2'
import PaginationB1 from './pagination/paginationB1'
import PaginationB2 from './pagination/paginationB2'
import './components/style.scss'



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const  App = () => {
  return (
    
    <Router>
        <div>
        {/* <ScrollToTop /> */}
        <Switch>
          <Route path="/paginationB2" component={PaginationB2}/>
          <Route path="/paginationB1" component={PaginationB1}/>
          <Route path="/paginationA2" component={PaginationA2}/>
          <Route path="/paginationA1" component={PaginationA1}/>
          <Route path="/to-determine" component={Determine}/>
          <Route exact path='/'  component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
