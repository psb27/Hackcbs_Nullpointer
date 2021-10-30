import { Details } from "@mui/icons-material";
import React from "react";
import { Route, Switch } from "react-router";
// you can import like this 
import './App.css'
import Detiles from "./Componenets/Detiles_page/Detiles";
import Navbar from './Componenets/navbar/Navbar'
import EngagementCardDemo from "./Componenets/Property_page/card/Card";
import Property from "./Componenets/Property_page/Property";
function App() {

  return (

    <>
      <Navbar/>
    </>

    <div className="App">
 <Switch>

          <Route path="/moreInfo" component={Detiles}>
          <Detiles/>
          </Route>

<Property/>     

   </Switch>

    </div>


  );
}

export default App;
