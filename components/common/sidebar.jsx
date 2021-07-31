import React, { useState, useEffect, Component } from "react";
import Nav from './nav';
import styles from '../../styles/Home.module.css';
import Link from "next/link";
import Images from '../global/image';
import Logo from '../../public/images/logo.png';
const Sidebar = (props) => {
    var visibleNav = false;
    const requiredInfo = {
        image: {
            url: Logo,
            text: 'Ocsweb Experts',
            class: 'header-logo'
        }
    }

    return props.trigger ? (
        <div className={`${styles.sidebarWrapper}`} >
            <span className={`${styles.sidebarOverlay} ${(props.trigger ? styles.show : '')}`} onClick={() => props.setTrigger(false)}></span>
            <div className={`${styles.sidebar} ${(props.trigger ? styles.show : '')}`}>
                <Images details={requiredInfo.image} />
                <span onClick={() => props.setTrigger(false)}>x</span>
                <div className={styles.services}>
                    <h3 className={styles.sidebarHeading}>Web Services</h3>
                    <ul>
                        <li>
                            <Link href='/about'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href='/services'>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href='/portfolio'>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link href='/products'>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.services}>
                    <h3 className={styles.sidebarHeading}>Other Services</h3>
                    <ul>
                        <li>
                            <Link href='/'>
                                +91-8604075215
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    ) : '';

};
export default Sidebar;
