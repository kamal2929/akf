import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import {useDispatch, useSelector} from 'react-redux';
import {Dropdown, Image} from 'react-bootstrap';
import { logout } from '../../actions/userActions';

import './Header.css';
export default function Headder() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const { isAuthenticated, user } = useSelector(state => state.authState);
    const { items:cartItems } = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logout);
    }
  
  return (
    
    
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
        <div className="col-12 col-md-3 mb-3">
           <div className="navbar-brand">
             <Link to="/">
               <img width="40px" height="70px" classsName="limage" alt='AKF LOGO' src="./images/final.png" />
             </Link>
             </div>
        </div>
        
          <div className="col-12 col-md-6 mt-2 mt-md-0">
      
        </div>
                        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          { isAuthenticated ? 
            (
              <Dropdown className='d-inline' >
                  <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
                    <figure className='avatar avatar-nav'>
                      <Image width="50px" src={user.avatar??'./images/default_avatar.png'}  />
                    </figure>
                    <span>{user.name}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      { user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}} className='text-dark'>Dashboard</Dropdown.Item> }
                      <Dropdown.Item onClick={() => {navigate('/myprofile')}} className='text-dark'>Profile</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/orders')}} className='text-dark'>Orders</Dropdown.Item>
                      <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            )
          
          :
            <Link to="/login"  className="btn" id="login_btn">Login</Link>
          }
          <Link to="/cart"><span id="cart" className="ml-3">Cart</span></Link>
          <span className="ml-1" id="cart_count">{cartItems.length}</span>
        </div>
                     <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}
// export default function Header () {

//     const { isAuthenticated, user } = useSelector(state => state.authState);
//     const { items:cartItems } = useSelector(state => state.cartState)
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const logoutHandler = () => {
//       dispatch(logout);
//     }
//     return (
//     <nav className="navbar navbar-dark bg-light">
//         <div className="col-12 col-md-3">
//           <div className="navbar-brand">
//             <Link to="/">
//               <img width="150px" alt='AKF LOGO' src="/images/logo.png" />
//             </Link>
//             </div>
//         </div>
  
//         <div className="col-12 col-md-6 mt-2 mt-md-0">
//            <Search/>
//         </div>
  
//         <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
//           { isAuthenticated ? 
//             (
//               <Dropdown className='d-inline' >
//                   <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
//                     <figure className='avatar avatar-nav'>
//                       <Image width="50px" src={user.avatar??'./images/default_avatar.png'}  />
//                     </figure>
//                     <span>{user.name}</span>
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                       { user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}} className='text-dark'>Dashboard</Dropdown.Item> }
//                       <Dropdown.Item onClick={() => {navigate('/myprofile')}} className='text-dark'>Profile</Dropdown.Item>
//                       <Dropdown.Item onClick={() => {navigate('/orders')}} className='text-dark'>Orders</Dropdown.Item>
//                       <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
//                   </Dropdown.Menu>
//               </Dropdown>
//             )
          
//           :
//             <Link to="/login"  className="btn" id="login_btn">Login</Link>
//           }
//           <Link to="/cart"><span id="cart" className="ml-3">Cart</span></Link>
//           <span className="ml-1" id="cart_count">{cartItems.length}</span>
//         </div>
//     </nav>
//     )
// }