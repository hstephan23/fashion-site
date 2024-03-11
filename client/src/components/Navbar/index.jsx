// import './component-test.css';
export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
      <nav className="main-header-menu">
        <section className="navbar-section">
          <div className="nav-element" style={linkStyle}>
            <a href="/">Home</a>
          </div>

          <div className="nav-element nav-hover" style={linkStyle}>
            <a href="/login">Login</a>
            <div id="drop-signup" className="drop-menu" style={linkStyle}>
              <a href="/signup">Sign-Up</a>
            </div>
          </div>
          
          <div className="nav-element" style={linkStyle}>
            <a id="profile-nav" href="/me">Profile</a>
          </div>
          
          <div className="nav-element" style={linkStyle}>
            <a href="/shop">Shop</a>
          </div>

          <div className="nav-element" style={linkStyle}>
            <a href="/blog">Blog</a>
          </div>

          <div className="nav-element nav-hover" style={linkStyle}>
            <a href="/cart">Cart</a>
            <div id="drop-cart" className="drop-menu">
              <a href="/order">Order History</a>
              <a href="/cart">Check Out</a>
            </div>
          </div>
        </section>
      </nav>
    );
  }
  