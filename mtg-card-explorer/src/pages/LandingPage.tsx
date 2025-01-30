import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-overlay"></div>
      <header className="landing-header">
        <h1>Welcome to MTG Card Explorer</h1>
        <p>Discover and explore Magic: The Gathering cards effortlessly!</p>
        <Link to="/home" className="cta-button">
          Start Exploring
        </Link>
      </header>

      <section className="features">
        <div className="feature">
          <h2>🔍 Search Cards</h2>
          <p>
            Find any Magic: The Gathering card easily with our powerful search
            tool.
          </p>
        </div>
        <div className="feature">
          <h2>⭐ Save Favorites</h2>
          <p>Save your favorite cards and access them anytime.</p>
        </div>
        <div className="feature">
          <h2>🎨 Filter by Color & Type</h2>
          <p>Refine your searches by color, type, and mana cost.</p>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          MTG Card Explorer was built for passionate Magic: The Gathering fans
          who love discovering new cards and building powerful decks. Join us in
          exploring the world of MTG!
        </p>
        <Link to="/about-us" className="learn-more">
          Learn More
        </Link>
      </section>

      <footer className="landing-footer">
        <p>© 2025 MTG Card Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
