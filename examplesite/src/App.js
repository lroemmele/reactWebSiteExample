import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//Components
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Homepage from './Components/Pages/homePage';
import Aboutpage from './Components/Pages/aboutPage';
import Contact from './Components/Pages/contactPage';
import Products from './Components/Pages/productsPage';

//includes
import './Assets/css/app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

            <Route exact path='/' component={Homepage}/>
            <Route exact path='/Aboutpage' component={Aboutpage}/>
            <Route exact path='/Contact' component={Contact}/>
            <Route exact path='/Products' component={Products}/>



          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
