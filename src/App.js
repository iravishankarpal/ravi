
import {
HashRouter as Router,
Switch,
Route

} from 'react-router-dom'
import "./App.css"
import TopNavBar from './TopNavBar'
import Footer from './Footer'
import Home from './Home';
import Project from './Project';
import Work from './Work';

function App() {
 
  return (
      <Router basename='/ravi'>
        <TopNavBar/>
        <Switch>
          <Route exact path='/'> <Home/> <Work/> <Project/> </Route>
      <Route path='/Works'> <Work/></Route>
      <Route path='/Projects'>      <Project/></Route>
       

        </Switch>
        <Footer/>

      </Router>
 
  );
}

export default App;
