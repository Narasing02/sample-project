import React,{useState} from 'react'

import './index.css'
import {CgMenuGridO} from 'react-icons/cg'
import {FiChevronUp,FiChevronDown} from 'react-icons/fi'
import {BsFillCalendarMinusFill,BsFillFilePostFill,BsBagDash} from 'react-icons/bs'
import{IoChatbubbleEllipsesOutline} from 'react-icons/io5'
import{AiOutlineMail} from 'react-icons/ai'
import {TbFileInvoice} from 'react-icons/tb'
import {FaSuitcase} from 'react-icons/fa'
import {BiWifi,BiUserCheck,BiCube} from 'react-icons/bi'
import{BsFiles,BsFillPencilFill} from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Menu =()=>{
  const [open, setOpen] = useState(false);
  
    return(
        <div className="total_div">
          <div><CgMenuGridO className='cgMenu'/></div>
         
          <Button className='button-dashboard'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Dashboard <span className='menu-icon-chever'>{open ? <FiChevronUp/>:<FiChevronDown/>}</span>
      </Button>
   
      <Collapse in={open}>
        <div id="example-collapse-text">
        <p className="total_div1 inner_drop_down">Ecommerce</p>
 <p className="total_div1 inner_drop_down2">Saas</p>
<p className="total_div1 inner_drop_down2">Cryplo</p>
          
        </div>
      </Collapse>


              <div className="application_name">
                <p className='application'>APPLICATIONS</p>
              </div>


        <div className='icons-cont-1'>
              <div className="calendar_div">
             <BsFillCalendarMinusFill className=' calendar_div_icon'/> <span className="names">Calendar</span>
              </div>
              <div className="calendar_div">
              <IoChatbubbleEllipsesOutline className=' calendar_div_icon chat-icon'/><span className="names">Chat</span><span className="hot_name">Hot</span>
              </div>
              <div className="calendar_div">
              <BsFillFilePostFill className=' calendar_div_icon'/> <span className="names">File Manager</span>
              </div>
              <div className="calendar_div">
             <BsBagDash className=' calendar_div_icon'/> <span className="names">Ecommerce</span><FiChevronDown className='select-chevron'/>
              </div>
              <div className="calendar_div">
              <AiOutlineMail className=' calendar_div_icon'/> <span className="names">Email</span><FiChevronDown className='select-chevron chev-email'/>
              </div>
              <div className="calendar_div">
              <TbFileInvoice className=' calendar_div_icon'/> <span className="names">Invoices</span><FiChevronDown className='select-chevron chev-invoice'/>
              </div>
              <div className="calendar_div">
              <FaSuitcase className=' calendar_div_icon'/> <span className="names">Projects</span><FiChevronDown className='select-chevron chev-projects'/>
              </div>
              <div className="calendar_div">
              <BiWifi className=' calendar_div_icon'/> <span className="names">Contacts</span><FiChevronDown className='select-chevron chev-contacts'/>
              </div>
             



              <div className="application_name">
                <p className='application'>LAYOUTS</p>
              </div>


              <div className="application_name">
                <p className='application'>PAGES</p>
              </div>


              <div className="calendar_div authenticate">
              <BiUserCheck className=' calendar_div_icon'/><span className="names">Authentication</span><span className="span_8">8</span>
              </div>

              <div className="calendar_div">
         <BiCube className=' calendar_div_icon'/> <span className="names">Utility</span><FiChevronDown className='select-chevron chev-utility'/>
              </div>
              

              <div className="application_name">
                <p className='application'>COMPONENTS</p>
              </div>


              <div className="calendar_div ">
             <BsFiles className='calendar_div_icon'/><span className="names">UIElements</span><FiChevronDown className='select-chevron chev-ui'/>
              </div>
              <div className="calendar_div">
            <BsFillPencilFill className=' calendar_div_icon' /><span className="names">Forms</span><FiChevronDown className='select-chevron chev-form'/>
              </div>

              

              </div>
        </div>
    )
}
export default Menu



