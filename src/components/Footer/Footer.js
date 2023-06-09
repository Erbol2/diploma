import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className="Footer">
      <div className="top_footer">
        <div className="txtAbout">
          <h3>About</h3>
          <p>"Game Shop: Your one-stop destination for all things gaming. We offer a wide selection of video games, consoles, and accessories. Whether you're a casual gamer or a hardcore enthusiast, we've got you covered. Step into a world of endless fun and excitement at Game Shop!"
          </p>
        </div>
        <div className="QuickLinks">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/roulette">Roulette</Link></li>
          </ul>
        </div>
        <div className="GoUp">
          <Link href="#" onClick={scrollToTop}>
            <i className="fa-solid fa-arrow-up"></i>
            <h3>GO UP</h3>
          </Link>
        </div>
      </div>

      <div className="bottom_footer">
        <p style={{opacity: "0.3"}}>Copyright © 2023, All Right Reserved Erbol</p>
        <div className="icons">
          <a href="/"  target="_blank">
            <i className="fa-brands fa-instagram instagram"></i>
          </a>
          <a href="/" target="_blank">
            <i className="fa-brands fa-linkedin linkedin"></i>
          </a>
          <a href="/" target="_blank">
            <i className="fa-brands fa-github github"></i>
          </a>
        </div></div>
    </div>
  )
}