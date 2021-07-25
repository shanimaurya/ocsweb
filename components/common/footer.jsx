import React, { useState, useEffect,Component } from "react";
import Nav from './nav';
import Images from '../global/image';
import Logo from '../../public/images/logo.png';
const Footer = (props) => {
     const requiredInfo={
        image:{
            url:Logo,
            text:'Ocsweb Experts',
            class: 'header-logo'
        }
    }
    return (
        <footer >
            <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span>
                Ocsweb experts pvt ltd
                
            </span>
            </a>
            <Nav />
       </footer>
      );
  
};
export default Footer;



 