import React from "react";
import SEO from "../components/SEO";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <SEO
        title="About Us - MTG Card Explorer"
        description="Learn more about the story, mission, and people behind MTG Card Explorer."
      />

      <h1>About Us</h1>

      <section className="brand-story">
        <h2>Our Story</h2>
        <p>
          MTG Card Explorer was born out of a deep love for Magic: The
          Gathering. What started as a passion project has now evolved into a
          go-to resource for players, collectors, and enthusiasts. We created
          this platform to help fans explore cards, build collections, and
          discover the magic in every deck.
        </p>
      </section>

      <section className="who-we-serve">
        <h2>Who We Serve</h2>
        <p>
          Our platform is designed for both newcomers and veteran players who
          want an easy way to browse and filter Magic: The Gathering cards.
          Whether you're building your first deck or curating a competitive
          collection, MTG Card Explorer is here to help.
        </p>
      </section>

      <section className="how-we-operate">
        <h2>How We Operate</h2>
        <p>
          We use advanced filtering, real-time card data, and user-friendly
          features to make card exploration seamless. Our data comes directly
          from the Scryfall API, ensuring accurate and up-to-date card
          information.
        </p>
      </section>

      <section className="cta">
        <h2>Stay Connected</h2>
        <p>
          Join us on social media, explore our web-store or sign up for our
          newsletter to stay updated on the latest Magic: The Gathering news.
        </p>
        <button className="cta-button">Subscribe to Newsletter</button>
      </section>
    </div>
  );
};

export default AboutUs;
