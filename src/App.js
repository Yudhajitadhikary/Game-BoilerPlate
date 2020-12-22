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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
