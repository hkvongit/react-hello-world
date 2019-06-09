import React, {Component} from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Message from './components/Message'
import Login from './components/Login'
import Logout from './components/Logout'
import Admin from './components/Admin'

// function App() {
//   return (
//     <div className="App">
//       {
        
//         <Message></Message>

//         /* <Greet name="Bruce" heroname="Batman"> </Greet>
//       <button> Like Bruce</button>
//       <p>But I am Ironman</p>
//       <Greet name="Tony" heroname="Ironman"> </Greet>
//       <p>We are marvels</p>
//       <Welcome></Welcome> */}
//     </div>
//   );
// }
class App extends Component {
  render(){
    return(
      <Switch>
        <Route exact path ="/" component={Login} />
        <Route exact path ="/" component={Login} />
        <Route exact path ="/" component={Login} />
      </Switch>
      
    );
  }
}


export default App;
