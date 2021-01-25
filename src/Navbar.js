import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {CgClose} from 'react-icons/cg'
import {ImCreditCard} from 'react-icons/im'
import './Navbar.css'
function Navbar() {

    const [click, setClick]= useState(false)
    const [showButton, setShowButton]=useState(false)

    const handleMenuBtnClick=()=>{
        setClick(!click)
    }
    const showBurger = ()=>{
        if (window.innerWidth <=768){
            setShowButton(true)

        } else{
            setClick(false)
            setShowButton(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', showBurger)
        return () => {
            window.removeEventListener('resize', showBurger)
        }
    }, [])

    return (
        <div className="navbar">
            <div className="logo-container">
                <span className="logo">PaySafe
                 <ImCreditCard className="logo-icon"/>
                </span>
            </div>
            <ul className={click? "mobile-menu full":"nav-items"}>
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                <li className="nav-item"><button className="nav-signup">Sign Up</button></li>
                {/* <li className>
                    <button className={click? "nav-item signup-btn":" hidden"}>
                         Sign Up
                    </button>
                </li> */}
            </ul>
            <button className={click? "menu-signup-btn":"hidden"}>
                SIGN UP
            </button>

            <div onClick={handleMenuBtnClick} className={showButton?"menu-btn":"hidden"}>
                {click ? <CgClose/>: <FaBars/>}
            </div>
            
            
        </div>
    )
}

export default Navbar