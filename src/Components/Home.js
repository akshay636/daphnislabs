import React from "react";
import "../styles/sidebar.css";
import Navbar from "./Navbar";
import {ImCross} from 'react-icons/im'
import Sidebar from "./Sidebar";
const Home = () => {
  return (
    <>
    <div class="container-fuild searchBar">
      <div>
        <p>
          Medical Darpan > Search > <b>FabiFlu Tablet</b>
        </p>
      </div>
      <div class="col-md-8">
        <div class="search">
          <i class="fa fa-search"></i>
          <input type="text" class="form-control" placeholder="Paracetamol" />
          <button
            style={{
              backgroundColor: "#0fbdbd",
              color: "white",
              border: "none",
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-2">
        <p>
          <b>Paracetamol</b> &nbsp;&nbsp;(128 products)&nbsp;&nbsp;
          {/* <div style={{display:"flex", justifyContent:"space-between"}}>  */}
          <button
            style={{
              backgroundColor: "#0fbdbd",
              color: "white",
              border: "none",
              marginRight: "10px",
              borderRadius: "5px",
              padding:"5px",
            }}
          >
            Aceclofenac<ImCross style={{fontSize:"10px",marginTop:"0px",cursor:"pointer", marginLeft:"10px"}}/>
          </button> 
          {/*   </div> */}
          <button
            style={{
              backgroundColor: "#0fbdbd",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding:"5px"
            }}
          > 500 mg &nbsp;<ImCross style={{fontSize:"10px",marginTop:"0px",cursor:"pointer", marginLeft:"10px"}}/>
            
          </button>
          &nbsp;&nbsp;
          <span style={{ color: "#b30000",cursor:"pointer" }}>Remove all</span>
        </p>
      </div>
    </div>
    <Sidebar />
    </>
  );
};

export default Home;
