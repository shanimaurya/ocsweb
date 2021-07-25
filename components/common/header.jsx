import React, { useState, useEffect,Component } from "react";
import Nav from './nav';
import Link from "next/link";
import Images from '../global/image';
import Logo from '../../public/images/logo.png';
const Header = (props) => {
     const requiredInfo={
        image:{
            url:Logo,
            text:'Ocsweb Experts',
            class: 'header-logo'
        }
    }
    return (
        <header>
            {/* <img src={Logo} alt=""/> */}
            <Link href='/'>
                <a>
                <Images details={requiredInfo.image} />
                </a>
            </Link>
            <Nav />
         </header>
      );
  
};
export default Header;
