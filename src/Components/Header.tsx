import '@fortawesome/fontawesome-free/css/all.min.css';
function Header () {  
    return (
      <header className="header">
        <div className="logo text-green-500"><a href="">TINKAS</a></div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <i className="fa-solid fa-bars fa-xl" style={{ color: "#000000" }} ></i>
        </nav>
      </header>
    );
  }
  export default Header;
             