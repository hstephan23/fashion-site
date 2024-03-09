import Auth from '../utils/auth';

export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };
  
    return (
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'monospace',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <div style={linkStyle}>
              <a href="/">Home</a>
          </div>
          <div style={linkStyle}>
            <a href="/login">Login</a>
          </div>
          <div style={linkStyle}>
            <a href="/signup">Register</a>
          </div>
          <div style={linkStyle}>
            <a href="/me">Profile</a>
          </div>
          <div style={linkStyle}>
            <a href="/content">Blog</a>
          </div>
          <div style={linkStyle}>
            <a href="/cart">Cart</a>
          </div>
        </section>
      </nav>
    );
  }
  