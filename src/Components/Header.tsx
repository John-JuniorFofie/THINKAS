import '@fortawesome/fontawesome-free/css/all.min.css';
function Header () {  
    return (
      <header className="header sticky top-0 bg-white/50 backdrop-blur-md border-b-1 border-gray-200`">
        <div className="logo text-white font-bold"><a href="">TINKAS</a></div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <i className="fa-solid fa-bars fa-xl" style={{ color: "#ffffffff" }} ></i>
        </nav>
      </header>
    );
  }
  export default Header;
             