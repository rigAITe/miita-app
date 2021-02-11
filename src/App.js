import React from 'react'
import Home from './components/home'
import Determine from './components/letsDetermine'
import PaginationA1 from './pagination/paginationA1'
import PaginationA2 from './pagination/paginationA2'
import PaginationA3 from './pagination/paginationA3'
import PaginationA4 from './pagination/paginationA4'
import PaginationA5 from './pagination/paginationA5'
import PaginationB1 from './pagination/paginationB1'
import PaginationB2 from './pagination/paginationB2'
import PaginationB3 from './pagination/paginationB3'
import PaginationB4 from './pagination/paginationB4'
import PaginationB5 from './pagination/paginationB5'
import PaginationB6 from './pagination/paginationB6'
import PaginationB7 from './pagination/paginationB7'
import './components/style.scss'



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const  App = () => {
  return (
    
    <Router>
        <div>
        {/* <ScrollToTop /> */}
        <Switch>
          <Route path="/paginationB7" component={PaginationB7}/>
          <Route path="/paginationB6" component={PaginationB6}/>
          <Route path="/paginationB5" component={PaginationB5}/>
          <Route path="/paginationB4" component={PaginationB4}/>
          <Route path="/paginationB3" component={PaginationB3}/>
          <Route path="/paginationB2" component={PaginationB2}/>
          <Route path="/paginationB1" component={PaginationB1}/>
          <Route path="/paginationA5" component={PaginationA5}/>
          <Route path="/paginationA4" component={PaginationA4}/>
          <Route path="/paginationA3" component={PaginationA3}/>
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
