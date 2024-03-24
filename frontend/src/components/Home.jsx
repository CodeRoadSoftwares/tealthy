import React from 'react'
import Carts from './Carts'

function Home() {
  return (
    <>
    <Carts/>
    <div id="cart-2">
      <h1>Insurance</h1>
      <h3>Get access to all your Health insurance services - View Policy, Initiate and Track Claims, Go Cashless with network hospitals and intimate Hospitalization</h3>
      <div className="carts-2">
        <div id="cart">
          <div id="heading">
            <p>E-card</p>
            <p>Get e-cart for your family</p>
          </div>
            <img src="https://www.medibuddy.in/assets/services/insurance/ecard.svg" alt="" />
        </div>
        <div id="cart">
          <div id="heading">

            <p>Claims</p>
            <p>Take your claims for real time</p>
          </div>
            <img src="https://www.medibuddy.in/assets/services/insurance/claims.svg" alt="" />
        </div>
        <div id="cart">
        <div id="heading">
            <p>Network Hospitals</p>
          
            <p>search the nearest hospital</p>
        </div>
            <img src="https://www.medibuddy.in/assets/services/insurance/network-hospitals.svg" alt="" />
        </div>
    </div>
    </div>
    <div id="footer">
      <h1>FAQ'S</h1>
      <div id="section">
        <p>What is online consultant ?</p>
      </div>
      <div id="section">
        <p>Are your online doctors qualified ?</p>
      </div>
      <div id="section">
        <p>How do i start online consultation with doctors ?</p>
      </div>
    </div>
    </>
  )
}

export default Home