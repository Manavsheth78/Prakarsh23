import React from 'react'
import "./Footer.css"
import 'boxicons'

const Footer = () => {
  return (
    <div className="footerDiv">
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      <div className="upperDiv">

        <div className="leftDiv">

            <div className="upperleftDiv">
                  <h1>PRAKARSH'23</h1>
                  <p>see you in events</p>
                </div>

              <div className="lowerLeftDiv">
              <div className="timerDiv">
                <div className="countDown-container">
                    <div className="countdown-el days-c">
                        <p className="big-text" id="days">0</p>
                            <div className="span"><span>Days</span>  </div>   
                    </div>
                    <div className="countdown-el hours-c">
                        <p className="big-text" id="hours">0</p>
                            <div className="span"><span>Hours</span>  </div>     
                    </div>
                    <div className="countdown-el  minutes-c">
                        <p className="big-text" id="minutes">0</p>
                            <div className="span"><span>Minutes</span>  </div>      
                    </div>
                    <div className="countdown-el  seconds-c">
                        <p className="big-text" id="seconds">0</p>
                           <div className="span"><span>Seconds</span>  </div>     
                    </div> 
                      </div>
                      </div>
                

            </div> 
        </div>
            <div className="rightDiv">
                  <h1>CONTACT US</h1>
                </div>

      </div>
      <div className="lowerDiv">
        <div>Sardar Vallabhbhai Institute Of Technology</div>
        <div>
        <box-icon type='logo' name='facebook-circle' color='#ffffff'  ></box-icon>
        <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
        <box-icon type='logo' name='twitter' color='#ffffff' ></box-icon>
        <box-icon type='logo' name='linkedin-square' color='#ffffff' ></box-icon>
        </div>
      </div>
    </div>
  )
}

export default Footer;
