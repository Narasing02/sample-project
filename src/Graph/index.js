import React from 'react'
import './index.css'
const Graph = () => {
  return (
    <div className='graph-container' >
        <div className='graph-content'>
            <p>Overview</p>
            <p className='sortby'>Sort By: <select className='sort-by-option'><option>Yearly</option></select></p>
        </div>
        <div className='content-container'>
           <div className='content1-container'>
            <div className="month-stat">
                <p className='month-header'>This Month</p>
                <p className='month-sal'>$24,568  <span className="month-percent">+2.65%</span></p>
            </div>

            <div className='inner-content'>
                <div>
                    <p className='inner-content-header'>Orders</p>
                    <span  className='inner-content-value'>5,643</span>
                </div>
                <div className='vertical'></div>
                <div>
                    <p className='inner-content-header'>Sales</p>
                    <span  className='inner-content-value'>16,273</span>
                </div>
            </div>
            <hr className='horizontal'/>

            <div className='inner-content'>

            <div>
                    <p className='inner-content-header'>Order Value</p>
                    <span  className='inner-content-value'>12.03%</span>
                </div>
                <div className='vertical'></div>
                <div>
                    <p className='inner-content-header'>Customers</p>
                    <span  className='inner-content-value'>21,456</span>
                </div>
            </div>
            <hr className='horizontal'/>

            <div className='inner-content'>

            <div>
                    <p className='inner-content-header'>Income</p>
                    <span  className='inner-content-value'>$35,652</span>
                </div>
                <div className='vertical'></div>
                <div>
                    <p className='inner-content-header'>Expenses</p>
                    <span  className='inner-content-value'>$12,248</span>
                </div>
            </div>


            
           </div>
           <div>
            <img src="https://i.pinimg.com/564x/87/50/44/87504403f160ba80dadd6c4144c9ecd9.jpg" alt="graph" className='graph-img'/>
           </div>
        </div>


    </div>
  )
}

export default Graph