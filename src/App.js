import React, { useState } from 'react';
import './App.css';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import DataEngineeringPage from './pages/DataEngineeringPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import GenAI from './components/GenAIPage/index';
import Architecture from './components/ArchitecturePage';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/data-engineering' component={DataEngineeringPage} exact />
        <Route path='/gen-ai' component={GenAI} exact />
        <Route path="/architecture" component={Architecture} />
      </Switch>
      <Footer /> {/* Footer added here */}
    </Router>
  );
}

export default App;
