import './App.css';
import Navbar from './Navbar'
import Home from  './Home'
import Contact from './Contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/' exact component={Contact}/> */}
        {/* <Route path='/products' component={Products}/> 
        <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
      {/* <Footer /> */}
      <Contact/>
    </Router>
  );
}

export default App;
