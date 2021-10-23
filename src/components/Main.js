import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AllEvents from "../pages/Events";
import Join from "../pages/JoinOurTeam";
import GBM from "../pages/GBM";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
// import Sony from "../pages/sony/Sony";
import Partnership from "../pages/Partnership";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={AllEvents} />
          {/* <Route path="/join-our-team" component={Join} /> */}
          <Route exact path="/gbm" component={GBM} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/headphone-ux-review" component={Sony} /> */}
          <Route path="/partnership" component={Partnership} />
        </Switch>
      </main>
    );
  }
}

export default Main;
