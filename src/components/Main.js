import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AllEvents from "../pages/Events";
// import Join from '../pages/JoinOurTeam';
import GBM from "../pages/GBM";
import Contact from "../pages/Contact";
import Sony from "../pages/sony/Sony";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={AllEvents} />
          {/* <Route path='/joinourteam' component={Join}/> */}
          <Route exact path="/gbm" component={GBM} />
          <Route path="/contact" component={Contact} />
          <Route path="/sony" component={Sony} />
        </Switch>
      </main>
    );
  }
}

export default Main;
