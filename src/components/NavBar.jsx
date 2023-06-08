import { Outlet, Link } from "react-router-dom";
import logo from '../assets/shared/desktop/logo.svg'
import { useRef } from "react";

import logoWhite from '../assets/logo-white.png'
import insta from '../assets/shared/desktop/icon-instagram.svg'
import facebook from '../assets/shared/desktop/icon-facebook.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'

function NavBar () {
  const menuBarRef = useRef(null)
  const navRef = useRef(null)
  
  const handleClick = () => {
    menuBarRef.current.classList.toggle('active')
    navRef.current.classList.toggle('active')
  }

 return ( 
  <>
   <header>
    <img src={logo} alt=""/>

    <div ref={menuBarRef} onClick={handleClick} className="menu-bar">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <nav ref={navRef}>
     <ul>
      <li>
        <Link to='.'>Home</Link>
      </li>
      <li>
        <Link to='about'>About</Link>
       </li>
      <li>
        <Link to='plan'>Create Your Plan</Link>
       </li>
     </ul>
    </nav>
   </header>

   <main>
    <Outlet />
   </main>


   <footer>
    <div>
      <img src={logoWhite} alt=""  className="logo"/>
    </div>
    <div>
      <ul>
        <li>
          <Link to='.'>Home</Link>
        </li>
        <li>
          <Link to='about'>About</Link>
        </li>
        <li>
          <Link to='plan'>Create Your Plan</Link>
        </li>
      </ul>
    </div>
    <div className="social--media">
      <img src={facebook} alt="" />
      <img src={twitter} alt="" />
      <img src={insta} alt="" />
    </div>
   </footer>

  </>
  );
}

export default NavBar;