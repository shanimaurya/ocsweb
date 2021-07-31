import React, { useState, useEffect,Component } from "react";
import Sidebar from './sidebar';
import styles from '../../styles/Home.module.css';
import Link from "next/link";
import Images from '../global/image';
import Logo from '../../public/images/logo.png';
import mail from '../../public/images/msg.svg';
import call from '../../public/images/call.svg';
import humb from '../../public/images/humburger.svg';
const Header = (props) => {
    const [popup, setPopUp] = useState(false);
     const requiredInfo={
        image:{
            url:Logo,
            text:'Ocsweb Experts',
            class: 'header-logo'
        },
        msgIcon:{
            url:mail,
            text:'info@ocswebexperts.com',
            class:'icons'
        },
        callIcon:{
            url:call,
            text:'+91-8604075215',
            class:'icons'
        },
        humbIcon:{
            url:humb,
            text:'ocsweb nav',
            class:'icons'
        }
    }
    const handleClick=function(e){
        e.preventDefault();
        setPopUp(true);
    }
    return (
        <header className={styles.headerHome}>
           {<Sidebar trigger={popup} setTrigger={setPopUp} />}
            {/* <img src={Logo} alt=""/> */}
            <div className={styles.headerLeft}>
                <span className={styles.humburgerMenu} onClick={handleClick}>
                    <Images details={requiredInfo.humbIcon} />
                </span>
                <Link href='/'>
                <a>
                <Images details={requiredInfo.image} />
                </a>
            </Link>
            </div>
           
            <nav className={styles.headerNav}>
                <Link href='mailto:info@ocswebexperts.com'>
                    <a>
                        <Images details={requiredInfo.msgIcon} />
                      <span>info@ocswebexperts.com</span>  
                        </a>
                </Link>
                <Link href='tail:+91-8604075215'>
                <a>
                    <Images details={requiredInfo.callIcon} />
                    <span>+91-8604075215</span></a>
                </Link>
            </nav>
         </header>
      );
  
};
export default Header;
