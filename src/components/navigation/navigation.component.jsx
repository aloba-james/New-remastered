import React,  { Fragment, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Container, 
  NavDropdown,
  Nav,
  Navbar,
  Dropdown
} from 'react-bootstrap/';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAnglesDown,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import {
  NavBarContainer,
	NavBar,
	LogoContainer,
	NavBarMenu,
	NavBarMenuItem,
	NavBarMenuLink,
} from './navigation.styles';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import Logo from '../../assets/crown.svg';
import Mach from '../../assets/images/logo/mach.jpg';
import { selectCurrentUser } from '../../store/user/user.selector';
import { setCurrentUser } from '../../store/user/user.action';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';
import { emptyCart } from '../../store/cart/cart.action';



const DropdownMenuCustom = () => {
  return(
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  );
 
};

const Navigation = () => {
  const dispatch =  useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);

  const signOutHandler = () => {
    signOutUser()
    dispatch(emptyCart(cartItems))
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
    if(window.scrollY > 0 ){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = (e) => setIsScrolled(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    
  }, []);

  return (
    <Fragment>
      <NavBarContainer>
      <NavBar className={colorChange ? 'navbar colorChange' : 'navbar '} >
        <NavBarMenu className='nav-bar-menu'>
          <NavBarMenuItem className='nav-bar-menu-item toggle'>
            <DropdownMenuCustom />
          </NavBarMenuItem>
          <NavBarMenuItem className='nav-bar-menu-item'> 
          <NavBarMenuLink to='/'>
          <LogoContainer className='logo-container'>
              <div className='Mach-logo'>
                <span as='link' to='/'> 
                    <img
                      src={isScrolled ? Logo : Mach }
                      alt={
                        isScrolled
                          ? "SmartLogger white logo"
                          : "SmartLogger colored logo"
                      }
                      weight={80}
                      height={40}
                    />
                </span> 
              </div>
            </LogoContainer> 
          </NavBarMenuLink>
              </NavBarMenuItem>
          <NavBarMenuItem><NavBarMenuLink to="/">Home</NavBarMenuLink></NavBarMenuItem>          
          <NavBarMenuItem >
            <NavBarMenuLink to="/#" > About Us <FontAwesomeIcon icon={faAnglesDown} />
              </NavBarMenuLink>
          </NavBarMenuItem>
          <NavBarMenuItem>
            <NavBarMenuLink to="/shop">Shop</NavBarMenuLink>
          
          </NavBarMenuItem>
          <NavBarMenuItem>
            <NavBarMenuLink to="/portfolio">Portfolio</NavBarMenuLink>
          </NavBarMenuItem>
          <NavBarMenuItem><NavBarMenuLink to="/blog">Blog</NavBarMenuLink></NavBarMenuItem>
          <NavBarMenuItem><NavBarMenuLink to="/search">Search</NavBarMenuLink></NavBarMenuItem>

          {currentUser ? (
            <>
              <NavBarMenuItem>
                <NavBarMenuLink to='/user'>
                <div>
                  <FontAwesomeIcon icon={faUser} />
                  {currentUser.displayName}
                </div>
                </NavBarMenuLink>
              </NavBarMenuItem>
              <NavBarMenuItem>
                <NavBarMenuLink onClick={signOutHandler} to='/'>
                  SIGN OUT
                </NavBarMenuLink>
              </NavBarMenuItem> 
            </> 
            ) : (
            <>
              <NavBarMenuItem>
                <NavBarMenuLink to='/auth'>SIGN IN</NavBarMenuLink>
              </NavBarMenuItem>
            </>
            
          )}

          <CartIcon />
          {isCartOpen && <CartDropdown />} 
          
        </NavBarMenu>
      </NavBar>
      </NavBarContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;