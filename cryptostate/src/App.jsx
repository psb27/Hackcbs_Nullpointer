import { Details } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
// you can import like this
import "./App.css";
import Detiles from "./Componenets/Detiles_page/Detiles";
import Navbar from "./Componenets/navbar/Navbar";
import EngagementCardDemo from "./Componenets/Register_page/Register";
import Property from "./Componenets/Property_page/Property";
import Cryptostate from "./abis/CryptoState.json";
import Web3 from "web3";
import { setstate } from "./ContextApi/Contextapi";
import Home from "./Componenets/Home";

function App() {
  const [contract, setcontract] = useState();
const [account, setaccount] = useState()
  useEffect(() => {
    loadWeb3();
    loadBlockchain();
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };
  let scan;

  const loadBlockchain = async () => {
    const web3 = window.web3;
    //Load account
    const accounts = await web3.eth.getAccounts();

    setaccount(accounts[0])
    // Network ID
    const networkId = await web3.eth.net.getId();
   

    const networkData = Cryptostate.networks[networkId];
    console.log(Cryptostate.networks);
    if (networkData) {
      scan = new web3.eth.Contract(Cryptostate.abi, networkData.address);
      console.log(scan);
      console.log("successfully get contreact");
      setcontract(scan);
    }
  };
  console.log(contract);
  return (
    <setstate.Provider value={{ contract,account }}>
       <div className="App">
      <Navbar />
      <Switch> 
      <Route  exact path="/"component={Detiles}>
          <Home />
        </Route>
        <Route path="/moreInfo" component={Detiles}>
          <Detiles />
        </Route>
        <Route path="/Register" >
          <EngagementCardDemo />
        </Route>
        <Route path="/properties" >
          <Property />
        </Route>
      </Switch>
    </div>
    </setstate.Provider>
   
  );
}

export default App;
