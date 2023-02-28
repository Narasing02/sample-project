import React from 'react'
import {BiPieChart} from 'react-icons/bi'
import{IoMdContacts} from 'react-icons/io'
import {FaFolderPlus} from 'react-icons/fa'
import './index.css'
import Graph from '../Graph'
import AdditionalCards from '../AdditionalCards'




const Dashboard = () => {
  return (
    <div className='dashboard-container1'>
    <div className='dashboard-container'>
        
        <div className="dashboard-cards-container">
            <div className='card1'>
                <div className='inner-icon'>
                    <BiPieChart className='icon1'/>


                </div>
                <div className='icon-content'>
                    <span className='icon-header'>Revenue</span>
                    <span className='icon-amount'>$21,456</span>
                </div>

                <div className="percentage">
                    +2.65%
                </div>

            </div>


        </div>
        <div className="dashboard-cards-container">
            <div className='card1'>
                <div className='inner-icon'>
                    <FaFolderPlus className='icon1'/>


                </div>
                <div className='icon-content'>
                    <span className='icon-header'>Orders</span>
                    <span className='icon-amount'>5,643</span>
                </div>

                <div className="negative">
                    -0.82%
                </div>

            </div>


        </div>

     
         <div className="dashboard-cards-container">
            <div className='card1'>
                <div className='inner-icon'>
                    <IoMdContacts className='icon1'/>


                </div>
                <div className='icon-content'>
                    <span className='icon-header'>Customers</span>
                    <span className='icon-amount'>45,254</span>
                </div>

                <div className="negative">
                    -1.04%
                </div>

            </div>


        </div> 
        
        
        </div>
        <Graph/>
        <AdditionalCards/>
        
    
        </div>
  )
}

export default Dashboard