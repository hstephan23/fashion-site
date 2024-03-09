// import './component-test.css';
export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };
  
    return (
      <nav className="main-header-menu">
        <section className="navbar-section">
          <div style={linkStyle}>
            <a href="/">Home</a>
          </div>
          <div style={linkStyle}>
            <a href="/Login">Login</a>
          </div>
          <div style={linkStyle}>
            <a href="/Signup">Sign-Up</a>
          </div>
          <div style={linkStyle}>
            <a href="/Profile">Profile</a>
          </div>
          <div style={linkStyle}>
            <a href="/Content">Shop</a>
          </div>
        </section>
      </nav>
    );
  }
  