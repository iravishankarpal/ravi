import React from 'react'
import mainLogo from './component/ravi.svg'
import './Style.css'
import {Link} from "react-router-dom"
import Linkedin from './component/linkedin-icon.svg'
import Whatsapp from './component/whatsapp-icon.svg'
import github from './component/github-icon-1.svg'
import gmail from './component/gmail-icon.svg'
import download from './component/dowload-icon.svg'
import cv from './component/cv.pdf'
function Footer() {
  return (<>
  

  <div className="footer-dark shapedividers_com-5384">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Works</h3>
                        <ul>
                            <li><Link to="#">Web-Development</Link></li>
                            <li><Link to="#">Logo desing</Link></li>
                            <li><Link to="#">Content Wrighting</Link></li>
                            <li><Link to="#">Pc repring</Link></li>
                      
                          

                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Personal Project </h3>
                        <ul>
                            <li><a href="https://iravishankarpal.github.io/react-covid-tracker/">React-covid-traker</a></li>
                            <li><a href="https://iravishankarpal.github.io/rewdigital/#/">RewDigital</a></li>
                            <li><a href="https://iravishankarpal.github.io/typing-pratice">iTyping</a></li>
                            <li><a href="https://projectdeltaresource.home.blog">Project_Delta_Resource</a></li>
                        </ul>
                    </div>
                  
                    <div className="col-md-6  col-md-3 item text">
                        <h3> RaviShankar  </h3>
                        <p> super energetic, hard working and always learning something new 
                        </p>
                        <p> Email : iravishankarpal@gmail.com</p>
                        <p> Phone No : +91 8888283912  </p>
                        
                     
                         <h3>
                          CV  
                        </h3>
                          <a href={cv}   >   

                          <img className='social-item'   src={download}   alt="Dowload" />
                          </a>
                    </div>
                    <div className="col item social">

                                    
                                    <a  href='https://www.linkedin.com/in/iravishankarpal/' >   

                                    <img className='social-item'  src={Linkedin} alt="linkedin" />
                                    </a>
                                    <a  href='https://wa.me/qr/WB4WYKI7LAICC1' >   

                                    <img className='social-item'  src={Whatsapp} alt="whatsapp" />
                                    </a>
                                    <a  href='https://github.com/iravishankarpal'  >   

                                    <img className='social-item'  src={github} alt="github" />
                                    </a>
                                    <a   href='mailto:iravishankarpal@gmail.com'  >   

                                    <img className='social-item'src={gmail} alt="gmail" />
                                    </a>
                    </div>
                </div>
                <hr/>
  
    <img style={{width:"39px",height:"auto"}}  src={mainLogo} alt="logo" />
     <span className='copyright'>
           &copy; 2021 all rights reserved. 
         </span> 

    <hr />
            </div>
        </footer>
    </div>

  
  </>)
}

export default Footer
