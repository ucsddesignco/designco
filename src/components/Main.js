import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import AllEvents from '../pages/Events';
// import Join from '../pages/JoinOurTeam';
import Contact from '../pages/Contact';
import GBM from '../pages/GBM';

class Main extends React.Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/events' component={AllEvents}/>
                    {/* <Route path='/joinourteam' component={Join}/> */}
                    <Route path='/contact' component={Contact}/>
                    <Route path='/gbm' component={GBM}/>
                </Switch>
            </main>
        );
    }
}

export default Main;