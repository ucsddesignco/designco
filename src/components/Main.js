import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

class Main extends React.Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </main>
        );

    }
}

export default Main;