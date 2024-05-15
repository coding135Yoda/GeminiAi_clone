import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'


const main = ()=> {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt=''/>
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello</span></p>
          <p>How can  I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see around !!</p>
            <img src={assets.compass_icon} alt=''/>
          </div>
          <div className="card">
            <p>briefly summarize the concept : urban planning</p>
            <img src={assets.bulb_icon} alt=''/>
          </div>
          <div className="card">
            <p>Brainstrom team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt=''/>
          </div>
          <div className="card">
            <p>Improve the redeadibilty of the following code</p>
            <img src={assets.code_icon} alt=''/>
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type='text' placeholder='Enter a prompt here'/>
            <div>
              <img src={assets.gallery_icon} alt=''/>
              <img src={assets.mic_icon} alt=''/>
              <img src={assets.send_icon} alt=''/>
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurable info, including about people, so double check in responses
          </p>
        </div>
      </div>
    </div>
  )
}

export default main