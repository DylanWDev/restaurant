import React, { useState } from 'react';
import Logo from "next/image"

function Navbar() {
    return ( 
    <div id="navDiv" className=''>
        <div id='navbar' className='border border-secondary'>
            <a><Logo src="/M-logo.png" alt="cool image" className='p-1 m-3' width={50} height={50}/></a>
        </div>
    </div> 
    );
}

export default Navbar;