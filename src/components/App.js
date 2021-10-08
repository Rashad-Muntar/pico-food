import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Navbar from "./navbar";
import Home from "../components/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
   
  );
}

export default App;
