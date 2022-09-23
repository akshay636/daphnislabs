import React from 'react'
import favi from './favi.jpeg'
import {FaPaperPlane} from 'react-icons/fa'
const Cards = () => {
    return (
        <>
            <div class="card text-center col-md-3 " style={{ width: "22em", borderBottom: "13px solid  rgb(109, 28, 28)", margin:"12px" }}>
                <img classNames="card-img-top" src={favi} alt="Cardimage" />
                <div className="card-body">
                    <h4 className="card-title fw-bold">favipiravir 400 mg(fabiflu) Tablets</h4>
                    <p className="card-text fw-bold"><span style={{ color: " rgb(109, 28, 28)" }}>Rs 1,775&nbsp;</span><span style={{fontWeight:"800"}} className='fw-light'>/&nbsp;stripe</span></p>
                    <h4 className="card-title fw-bold">Glenmark Pharmaceutical Limited</h4>
                    <p className='fw-light'>PARVAT PATIYA, SURAT ,GUJRAT</p>
                </div>
                <div style={{border:"1px solid #868e96"}}>
                </div>
                <a style={{ color: "#0fbdbd", fontSize: "1.2rem", fontWeight:"800" }}><FaPaperPlane/> Contact Supplier</a>
            </div>



        </>
    )
}

export default Cards
{/* <div  className=''>
            <div className="text-center">
                <div className='col-lg-4 col-md-4 col-12'>
                    <div style={{width:"18rem"}} className="card text-white">
                        
                    </div>
                </div>
            </div>
        </div> */}