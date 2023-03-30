import React from 'react';
import HamburgerButton from './components/HamburgerButton';
import { Nav } from './styles';
import { useState } from 'react';


function Navbar() {
    //hoot para guardar valor, el 1 es el estado o el valor actual, 2cambiar el valor de la variable
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <>
            <Nav>

                <div>
                    <h2>Amazin <spam>eventos</spam> </h2>
                </div>
                <div className={`links ${clicked ? 'active' : ' '}`}>
                    <a href='./'>Home</a>
                    <a href='./'>Upcomming Events</a>
                    <a href='./'>Past Events</a>
                    <a href='./'>Contact</a>
                    <a href='./'>Satats</a>
                </div>
                <div className='buttonMenuLateral'>
                    <HamburgerButton clicked={clicked} handleClick={handleClick} />
                </div>

            </Nav>
        </>
    )
}

export default Navbar




