import React from 'react';
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
  <header className='flex justify-between items-center p-4  border-b-2 border-b-gray-200  max-w-7xl mx-auto  '>
  <h1 className='font-bold text-4xl'  >knowledge-cafe</h1>



            <img src={profile} alt="" />
             
        </header>
    );
};

export default Header;