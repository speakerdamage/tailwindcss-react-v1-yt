import React from 'react';
import Cards from '../components/Cards';
import Cta from '../components/Cta';

const Menu = () => {
  return (
    <>
      <div class="h-screen flex justify-center items-center bg-green-300">
        <h1 className="text-9xl uppercase font-black">Menu</h1>
      </div>
      <Cards />
      <Cta />
    </>
  )
}

export default Menu;