import React from 'react'
import './index.css'

import {FiSearch} from 'react-icons/fi'
import{CgMenuGridO} from 'react-icons/cg'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {IoSettingsOutline} from 'react-icons/io5'
import {BsThreeDots} from 'react-icons/bs'
import {MdOutlineReportGmailerrorred} from 'react-icons/md'
const Profile = () => {
  return (
    <div className="profile-container">

      <div className='icons-container'>
        <FiSearch className='profile-icon-s'/>
        <img src=" https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?w=1380&t=st=1677508163~exp=1677508763~hmac=bf4adf8f457fd9f51246b6db945b3bdb1af6470377076aa7839d12af34dddc55" alt=" profile-pic" className='profile-pic2'/>
        
        <CgMenuGridO  className='profile-icon-s'/>
        <div>
        <IoIosNotificationsOutline className='profile-icon-s'/>
        <div className='notification'>4</div>

        </div>
        
        <IoSettingsOutline className='profile-icon-s'/>
        
        <img src=" https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1677507347~exp=1677507947~hmac=9687006ad36e12ed653de1f25846fdeebd938ffb0ecb06e5976ee8298628f1c6" alt=" profile-pic" className='profile-pic1'/>
        
      </div>
      <div className='profile-main-container'>

        <div className='profile-mini-block'>
          <i className='icon4'><BsThreeDots/> </i>

        </div>
        <div className='profile-section'>
          <div className='profile-pic-container'>
            <img src=" https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1677507347~exp=1677507947~hmac=9687006ad36e12ed653de1f25846fdeebd938ffb0ecb06e5976ee8298628f1c6" alt=" profile-pic" className='profile-pic'/>
          </div>
          <div className='profile-details'>
          <span className=' profile-name'>Jennifier Benneit</span>
            <span className=' profile-designation'>Product designer</span>
          </div>
          
         
        </div>

        <div className='profile-details-followers'>
          <div className='profile-details-prod'>
            <span className=' profile-name'>1,269</span>
            <span className=' profile-designation'>Products</span>
          </div>
        <div className='vertical vertical1'></div>
          <div className='profile-details-prod'>
            <span className=' profile-name'>5.2k</span>
            <span className=' profile-designation'>Followers</span>
          </div>
        </div>
        <hr className='horizontal'/>

        <div>
          <div className='progress-header'>
            <span>Earning</span>
            <MdOutlineReportGmailerrorred/>
          </div>
          <div className='progress-section'>
          {/* <progress id="file" value="32" max="100" className='prgs'> 32% </progress> */}
            <img src="https://i.pinimg.com/564x/ee/67/82/ee6782be2480af9e8534e230402a27e7.jpg" alt="progress-bar" className='progress-bar'/>
            <span className='prog-amount'>$26,256</span>
            <span className='prog-amount-str'>Earning this Month</span>
            <div className='prog-bottom-section'>
                <div className='percentage'>+2.65%</div><p className='prog-content'>From previous period</p>
            </div>

          </div>
        </div>

        <hr className='horizontal'/>

        <div className='rec-act-prog'>
          <p>Recent Activity</p>
  <div className='recent-acivities-cont'>
          <div className='activities'>
            <div className='date-activity'>12 <span>Sep</span></div>
            <p className='date-act-content'>Responded to need "Volunteer Activities"</p>
          </div>
          <div className='activities'>
            <div className='date-activity'>11 <span>Sep</span></div>
            <p className='date-act-content'>Everyone realizes would be desirable... <span className='read-more'>Read more</span></p>
          </div>
          <div className='activities'>
            <div className='date-activity'>10 <span>Sep</span></div>
            <p className='date-act-content'>Joined the group "Boardsmanship Forum"</p>
          </div>
        </div>
        </div>

      </div>


    </div>
  )
}

export default Profile