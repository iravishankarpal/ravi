import React from "react";
import "./App.css";
import ravi from "./component/ravishankarpal.png";
function Home() {
  return (
    <>
      <div id='Home ' className='home'>
        <div className="shapedividers_com-3063">

 
     
    
        <div className="container-fulid">
          <div className="container home-start">
            <div className="row row-intro">
            <div className="col-md-6 order-md-last  raviShankar-img-container">
                <div className="ravishankar-img">
                  <img src={ravi} alt="ravishankar pf" />
                </div>
              </div>

              <div className="col-md-6 ravishankar-hi">
                <div className="intro">
                  <h1>Ravi Shankar</h1>
                </div>
              </div>
             
              
           
           
           
            </div>
          </div>

          <div className="row row-intro">
            <div className="col-12">
              <div className="intro">I am full-stack developer and coder</div>
            </div>
          </div>
        </div>
        </div>
  
      </div>
    </>
  );
}

export default Home;
