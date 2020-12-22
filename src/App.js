import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './component/Home';
import History from './component/History';
import Game from './component/Game';
function App() {
  return (
    <Router>
    <Switch>
          <Route exact path="/" component={(props) => <Home {...props}/>}>
            
          </Route>
          <Route path="/game" component={(props) => <Game {...props}/>}>
           
          </Route>
          <Route path="/history" component={(props) => <History {...props}/>}>
            <History />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
