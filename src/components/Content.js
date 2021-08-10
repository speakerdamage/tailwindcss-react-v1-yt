import React from 'react';
import ImageOne from '../images/egg.jpg';
import ImageTwo from '../images/egg2.jpg';

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow"/>
        <div class="center-content">
          <h2 className="text-2xl mb-2">Hardboiled Eggs</h2>
          <p class="mb-2">Crispy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow"/>
        <div class="center-content">
          <h2 className="text-2xl mb-2">Fried Eggs</h2>
          <p class="mb-2">Crispy, delicious, and nutritious</p>
          <span>$18</span>
        </div>
      </div>
    </>
  )
}

export default Content;
