import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Results from "./components/results/Results";
import Challenges from "./components/challenges/Challenges";
import SpeedCheck from "./components/speedCheck/SpeedCheck";
import ContextProvider from "./Contexts/Context";
const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="container pt-3">
          <NavbarComponent />
          <Switch>
            <Route exact path="/results" component={Results}></Route>
            <Route exact path="/challenges" component={Challenges}></Route>
            <Route exact path="/" component={SpeedCheck}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
