import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import SpecificCourse from './components/SpecificCourse'
import Header from './components/Header'

import './App.css'

// Replace your code here
const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/courses/:id" component={SpecificCourse} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
