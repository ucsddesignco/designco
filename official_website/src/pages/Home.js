import React from 'react';
import Navbar from '../components/Navbar';
import Splash from '../components/Splash';
import Footer from '../components/Footer';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Splash />
                <div>
                    RANDOM I WANT TO SEE
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;