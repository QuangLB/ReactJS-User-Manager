import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Addplayers from "./Add";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Detail from "./detail";
import Edit from "./Edit";
import LogIn from "./Pages/LogIn";
import Player from "./Player";

const Routes = (props) => {
  return (
    
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/players">
          <Player /> 
        </Route>
        <Route path="/addplayers" exact>
          <Addplayers />
        </Route>
        <Route path="/editplayers/:id" component={Edit}>
          <Edit />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
