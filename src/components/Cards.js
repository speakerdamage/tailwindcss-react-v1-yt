import React from 'react';
import ImageOne from '../images/egg.jpg';
import ImageTwo from '../images/egg2.jpg';

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={ImageOne} alt="egg" className="card-img"/>
          <div class="center-content">
            <h2 className="text-2xl mb-2">Hardboiled Eggs</h2>
            <p class="mb-2">Crispy, delicious, and nutritious</p>
            <span>$16</span>
          </div>
        </div>
        <div className="card">
          <img src={ImageTwo} alt="egg" className="card-img"/>
          <div class="center-content">
            <h2 className="text-2xl mb-2">Fried Eggs</h2>
            <p class="mb-2">Crispy, delicious, and nutritious</p>
            <span>$18</span>
          </div>
        </div>
        <div className="card">
          <img src={ImageTwo} alt="egg" className="card-img"/>
          <div class="center-content">
            <h2 className="text-2xl mb-2">Fried Eggs</h2>
            <p class="mb-2">Crispy, delicious, and nutritious</p>
            <span>$18</span>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Cards;
