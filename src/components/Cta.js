import React from 'react';
import {Link} from 'react-router-dom';
import background from '../images/cta-bg-gray.jpg';

const Cta = () => {
  return (
    <>
      <div 
      className='p-10 md:p-40 md:flex justify-between items-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'
      style={{ backgroundImage: `url(${background})`}}>
        <h2 className="header-cta sm:my-10">Here is some text</h2>
        <Link className='sm:inline-block py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-blue'>
          Click here
        </Link>
      </div>
      
    </>
  )
}

export default Cta;
