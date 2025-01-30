import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Us */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            MTG Card Explorer is a fan project designed to help Magic: The
            Gathering players find, explore, and save their favorite cards.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Integrity Policy */}
        <div className="footer-section">
          <h3>Integrity Policy</h3>
          <p>
            This site uses Local Storage to store your favorite cards. No
            personal data is collected or shared.
          </p>
          <Link to="/integrity-policy">Read more</Link>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://deckanddraft.odoo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Store (SE)
            </a>{" "}
            |
            <a
              href="https://www.facebook.com/profile.php?id=61568785420078"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            |
            <a
              href="https://www.tiktok.com/@deckanddraft?lang=sv-SE"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} MTG Card Explorer. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
