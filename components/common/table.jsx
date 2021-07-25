import React, { useState, useEffect,Component } from "react";

import Link from "next/link";
// import pages from '../../constants/nav';
const Table = (props) => {
    
    const getData=props;
     console.log('getData',getData);
    return (
        <div>
           <ul>
               { 
                   getData.props.map((data,key)=>(
                       <li key={key}> 
                           <Link  href={data.fields.actionLinkUrl}>
                                <img src={data.fields.blogImgUrl} alt={data.fields.title} />
                           
                           </Link>
                           
                            {data.title}
                       </li>
                   ))
               }
           </ul>
         </div>
      );
  
};
export default Table;
