import React, { useState, useEffect,Component } from "react";
import Link from "next/link";
// import pages from '../../constants/nav';
const Nav = (props) => {
    
     const pages=[ 
         {
            key:1,
            url:'/features',
            title:'Features',
        },
         {
            key:2,
             url:'/about',
             title:'About us',
         },
        
        {
            key:3,
            url:'/contact',
            title:'Contact',
        }
     ]
    //  console.log(pages);
    return (
        <nav>
           <ul>
               { 
                   pages.map((page)=>(
                       <li key={page.key}> 
                           <Link href={page.url}>
                            {page.title}
                           </Link>
                       </li>

                   ))
               }
           </ul>
         </nav>
      );
  
};
export default Nav;
