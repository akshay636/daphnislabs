import React from "react";
import "../styles/sidebar.css";
import Cards from "./Cards";
import {ImCross} from 'react-icons/im'
const data = [
  {
    "Related category": [
      "Paracetamol Tablet",
      "Paracetamol Syrup",
      "Paracetamol Powder",
      "Aceclofenac",
      "Magaladrate Simethicone Oral Suspension",
      "Mefenamic Paracetamol Syrup",
    ],
  },
  {
    "Related Brands": [
      "Cipmol Paracetamol",
      "Pandal Paracetamol Tablet",
      "Combiflam",
      "Crocin Tablet",
      "Calpol Paracetamol Tablets, Sumo Tablet",
    ],
  },
  { "Business Type": ["WholeSelar", "Manufacturer", "Retailer", "exporter"] },
  { Strength: ["500 mg", "600 mg"] },
  { Manufacturer: ["Intas Pharmaceutical Ltd", "Alkem Laboratories Ltd"] },
  {
    "Prescription/Non Prescription": [
      "Intas Pharmaceutical Ltd",
      "Alkem Laboratories Ltd",
    ],
  },
];
const arr=[1,2,3,4,5,6]
// background-color: rgb(15, 189, 189);
const Sidebar = () => {
  return (
    <div>
      <div className="container-fuild mainDiv">
        <div className="sidebar">
          {data?.map((val, index) => {
            return (
              <div class="card side" style={{ width: "16rem" }}>
                <div class="card-header borderless">
                  <b>{Object.keys(val)}</b>
                </div>
                <ul class="list-group list-group-flush">
                  {console.log("kk", Object.values(val)[0])}
                  {Object.values(val)[0]?.map((val1, index) => {
                    if (val1 === "Aceclofenac") {
                      return <li class="list-group-item selected">{val1}<ImCross style={{fontSize:"10px",marginTop:"4px",cursor:"pointer"}}/></li>;
                    } else if (val1 === "500 mg") {
                      return <li class="list-group-item selected">{val1}<ImCross style={{fontSize:"10px",marginTop:"4px",cursor:"pointer"}}/></li>;
                    } else {
                      return <li class="list-group-item">{val1}</li>;
                    }
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="container">
          <div className="cartItems row">
        
           {

            arr.map((val)=>{
                return(
                    <Cards/>
                )
            })
         
           }  

          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
