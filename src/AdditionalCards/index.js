import React from 'react'
import './index.css'
import {BsThreeDots} from 'react-icons/bs'


const Products=[
    {
      id:"#1",
      name:"Polo blue T-shirt",
      amount:"$25.4",
      likes:"3.82k"
    },
    {
      id:"#2",
      name:"Hoodie for men",
      amount:"$24.5",
      likes:"3.14k"
    },
    {
      id:"#3",
      name:"Red color Cap",
      amount:"$22.5",
      likes:"2.84k"
    },
  
  ]

const AdditionalCards = () => {
  return (
   <div className='additional-container'>
        <div className='box1'>
          <div className="card1-header">
            <span className='card1-weekly-header'>User Activity</span>
            <select  className='card1-weekly'>
              <option>Weekly</option>
            </select>
            </div>

            <div className='weekly-graph-content'>
              <div className='month-stat'>
                <span className='month-stat-header'>This Month</span>
                <span className='month-stat-amount'>16,543</span>
              </div>
              <p className='card1-color1 '><div className='card1-color green-color'></div><span className='current-header'>Current</span></p>
              <p className='card1-color1'> <div className='card1-color'></div><span className='current-header'>Previous</span></p>


            </div>


            <div className='analysis-graph'>
              <img src="https://img.freepik.com/free-vector/statistics-with-red-green-arrows_23-2147502423.jpg?w=740&t=st=1677506265~exp=1677506865~hmac=dbebc390add835868cf64dac3efe9b30682c3f03604187dabbf7bd1be8517581" alt="analysis-graph" className='analysis-graph'/>
            </div>

        </div>
        <div className='box1'>
          <div className='order-container'>
            <span>Order Stats</span>
            <BsThreeDots/>
          </div>
          <div>
            <img src=" https://i.pinimg.com/736x/43/d6/b3/43d6b33bfff155b416b402e8b9d52dba.jpg" alt=" pie-graph" className='pie-graph'/>
          </div>
          <hr/>
          <div className='order-stat-cont'>
            <p>Completed</p>
            <p>Pending</p>
            <p>Cancel</p>
          </div>

</div>
<div className='box1'>
<div className="card1-header">
            <span className='card1-weekly-header'>Top Product</span>
            <select  className='card1-weekly'>
              <option>Monthly</option>
            </select>
            </div>
            {
              Products.map(each=>{
                return(
                  <div className='product-stat-cont'>
                  <div className='month-stat-container'>
                    {each.id}
    
                  </div>
                  <div className='product-name-container'>
                    <span className='product-name'>{each.name}</span>
                    <span className='product-amount'>{each.amount}</span>
                  </div>
                  <div className='product-last-container'>
                   {each.likes}
                  </div>
                </div>

                )
              })
            }
         

</div>

    </div>
  )
}

export default AdditionalCards