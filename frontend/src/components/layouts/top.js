import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './top.css'; 
export default function Top1() {
    return (
        <div>
            <div className='navba'>
            <Link to="/akfhome">
                <div className='navbas'>Home</div>
                </Link>
                <Link to="/">
                <div className='navbas'>Products</div>
                </Link>
                {/* <span className="a">
                    <span className="navb-items"><i className="fa fa-code"></i>
                    </span>
                </span> */}
            </div>
        </div>
    )
}