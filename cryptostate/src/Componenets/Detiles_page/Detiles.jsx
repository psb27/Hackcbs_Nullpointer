import { useLocation } from "react-router";
import "./Detiles.css";
import Button from "@mui/material/Button";
import React, { useContext, useEffect, useState } from "react";
import { setstate } from "../../ContextApi/Contextapi";
function Detiles() {
  const buyItem = async (e) => {
    e.preventDefault();
    let consts = await contract.methods
      .buyToken(loaction.state?.TokenId)
      .send({ from: account });
    console.log(consts);
  };
  const putonSalle = async (e) => {
    e.preventDefault();
    let consts = await contract.methods
      .toggleForSale(loaction.state?.TokenId)
      .send({ from: account });
    console.log(consts);
  };
  const chnagePrice = async (e) => {
    e.preventDefault();
    let listingPrice = await contract.methods.getListingPrice().call()
    let consts = await contract.methods
      .changeTokenPrice(loaction.state?.TokenId)
      .send({ from: account,value:listingPrice });
    console.log(consts);
  };
  const loaction = useLocation();
  console.log(loaction.state.owner);
  const { contract, account } = useContext(setstate);
  return (
    <div>
      <div className="image">
        <img src={"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="" />
      </div>

      <div className="allinfo">
        <div>
          <h3>TokenId:</h3> {loaction.state?.TokenId}
        </div>
        <div>
          {" "}
          <h3>Owner:</h3> {loaction.state.owner}
        </div>
        <div>
          {" "}
          <h3>OldOwner:</h3> {loaction.state.oldowner}
        </div>
        <div>
          {" "}
          <h3>Place:</h3> {loaction.state.place}
        </div>
        <div>
          <h3>createdBy:</h3> {loaction.state?.mintedBy}
        </div>
      </div>
      {loaction.state.owner == account  && account !== undefined ? (
        <div className="">
          <div className="btn_div">
            <Button variant="contained" onClick={buyItem} className="btn">
              Incress Price{" "}
            </Button>
          </div>
          <div className="btn_div">
            <Button variant="contained" onClick={putonSalle} className="btn">
              Put on the sell{" "}
            </Button>
          </div>
        </div>
      ) : (
        <div className="btn_div">
          <Button variant="contained" onClick={buyItem} className="btn">
            Buy Now{" "}
          </Button>
        </div>
      )}
    </div>
  );
}

export default Detiles;
