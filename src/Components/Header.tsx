import '@fortawesome/fontawesome-free/css/all.min.css';
function Header () {  
    return (
      <header className="header">
        <div className="logo">Logo</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    );
  }
  export default Header;
             