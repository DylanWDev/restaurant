import React, { useState } from 'react';
import Logo from "next/image"

function Navbar() {
    return ( 
    <div id="navDiv" className='container'>
        <nav className='border border-primary'>
            <a><Logo src="/M-logo.png" alt="cool image" className='p-1' width={50} height={50}/></a>
        </nav>
    </div> 
    );
}

export default Navbar;