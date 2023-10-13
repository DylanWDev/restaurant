import React, { useState } from 'react';

function MenuDiv(props) {
    console.log(props)
    return (
        <div id="mainContainDiv" className=' mt-5 border border-secondary p-3'>
            <div>
                <h1 className='text-center mb-0 p-4 pb-5'>OUR MENU</h1>
            </div>
            <div className="border-top border-bottom mx-4">
                <p className='m-0 p-3 ps-0'>HORS D'OEUVRES</p>
            </div>
        </div>
    )
}

export default MenuDiv;