import Auth from "../../utils/auth";
import {Link } from "react-router-dom";

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };
  function showNavigation(){
    if(Auth.loggedIn()){
      return (
        <nav className="main-header-menu">
          <section className="navbar-section">
            <div className="nav-element" style={linkStyle}>
              <Link to="/">Home</Link>
            </div>

            <div className="nav-element nav-hover" style={linkStyle}>
              <Link to="/" onClick={() => Auth.logout()}>Logout</Link>
              <div id="drop-signup" className="drop-menu" style={linkStyle}>
                <Link to="/signup">Sign-Up</Link>
              </div>
            </div>
            
            <div className="nav-element" style={linkStyle}>
              <Link id="profile-nav" to="/me">Profile</Link>
            </div>
            
            <div className="nav-element" style={linkStyle}>
              <Link to="/shop">Shop</Link>
            </div>

            <div className="nav-element" style={linkStyle}>
              <Link to="/blog">Blog</Link>
            </div>

            <div className="nav-element nav-hover" style={linkStyle}>
              <Link to="/cart">Cart</Link>
              <div id="drop-cart" className="drop-menu">
                <Link to="/order">Order History</Link>
                <Link to="/cart">Check Out</Link>
              </div>
            </div>
          </section>
        </nav>
      );
    }
    else{
      return (
        <nav className="main-header-menu">
          <section className="navbar-section">
            <div className="nav-element" style={linkStyle}>
              <Link to="/">Home</Link>
            </div>

            <div className="nav-element nav-hover" style={linkStyle}>
              <Link to="/login">Login</Link>
              <div id="drop-signup" className="drop-menu" style={linkStyle}>
                <Link to="/signup">Sign-Up</Link>
              </div>
            </div>
            
            <div className="nav-element" style={linkStyle}>
              <Link id="profile-nav" to="/me">Profile</Link>
            </div>
            
            <div className="nav-element" style={linkStyle}>
              <Link to="/shop">Shop</Link>
            </div>

            <div className="nav-element" style={linkStyle}>
              <Link to="/blog">Blog</Link>
            </div>

            <div className="nav-element nav-hover" style={linkStyle}>
              <Link to="/cart">Cart</Link>
              <div id="drop-cart" className="drop-menu">
                <Link to="/order">Order History</Link>
                <Link to="/cart">Check Out</Link>
              </div>
            </div>
          </section>
        </nav>
      );
    }
  }

  return (<>
    {showNavigation()}
    </>
  );
  

  }
  