import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Results from "./components/results/Results";
import Challenges from "./components/challenges/Challenges";
import SpeedCheck from "./components/speedCheck/SpeedCheck";
const App = () => {
  return (
    <div className="container pt-3">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/results" component={Results}></Route>
          <Route exact path="/challenges" component={Challenges}></Route>
          <Route exact path="/" component={SpeedCheck}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
