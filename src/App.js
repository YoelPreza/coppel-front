import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import LandingController from './controllers/landingController';
import RegisterControler from './controllers/registerController';
import FollowUpControler from './controllers/followUpControler';
import AdminController from './controllers/adminController';
import Navbar from './views/navbar';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingController />}/>
          <Route path="/register" element={<RegisterControler />}/>
          <Route path="/follow-up" element={<FollowUpControler />}/>
          <Route path="/admin" element={<AdminController />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
