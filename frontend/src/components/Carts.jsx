import React from 'react'

function Carts() {
  return (
    <>
    <div className="carts">
        <div className="cart">
            <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png" alt="" />
            <p>instant video consultant</p>
        </div>
        <div className="cart">
            <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png" alt="" />
            <p>find doctors near you</p>
        </div>
        <div className="cart">
            <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png" alt="" />
            <p>medicines</p>
        </div>
        <div className="cart">
            <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png" alt="" />
            <p>lab tests</p>
        </div>
        <div className="cart">
            <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png" alt="" />
            <p>surgeries</p>
        </div>
    </div>
    <div id="lower">
        <div id="lower-left">
            <p>Watch Amitabh Bachchan emphasize the importance of Unlimited Expert Doctor Consultations online for the entire family</p>
            <button>Download app</button>
        </div>
        <div id="lower-right">
            <video autoPlay src="https://www.medibuddy.in/assets/mb-amitabh.mp4" controls muted></video>
        </div>
    </div>
    </>
  )
}

export default Carts