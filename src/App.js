import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import "./Banner.css";
import Nav from "./Nav";
import InfoUser from "./infoUser"
import { UserContext } from "./storeUsers";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {

  const [userDetails, setDetails]= useState({});

  return (
    <div className="app">
    <Router>
    <UserContext.Provider value={{userDetails, setDetails}}>

    <Switch>
      <Route path="/" exact> 
      <Nav />
      <Banner />
      <Row
        title="Current Users"
        fetchURL={requests.fetchUsers}
        isLargeRow={true}
      />
      </Route>       
      <Route path="/users" >
        <InfoUser/>
      </Route>
     </Switch>
     </UserContext.Provider>

     </Router>
    </div>
    
  );
}

export default App;
