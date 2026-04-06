import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = useState(false);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBar(window.scrollY > 300);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        style={{
          ...styles.nav,
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.98)"
            : "rgba(255,255,255,1)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" style={styles.logo}>
          ✨ SparkClean
        </Link>

        {isMobile && (
          <button
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        )}

        {!isMobile && (
          <div style={styles.links}>
            <Link to="/" style={styles.link}>
              Home
            </Link>
            <Link to="/services" style={styles.link}>
              Services
            </Link>
            <Link to="/pricing" style={styles.link}>
              Pricing
            </Link>
            <Link to="/contact" style={styles.btnLink}>
              Book Now
            </Link>
          </div>
        )}

        {isMobile && menuOpen && (
          <div style={styles.mobileMenu}>
            <Link
              to="/"
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/pricing"
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </motion.nav>

      {/* Sticky Bottom Bar — mobile only */}
      {isMobile && showBar && (
        <motion.div
          style={styles.stickyBar}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href="tel:7805550123" style={styles.stickyCall}>
            📞 Call Now
          </a>
          <Link to="/contact" style={styles.stickyQuote}>
            Book a Clean
          </Link>
        </motion.div>
      )}
    </>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    position: "sticky",
    top: 0,
    zIndex: 100,
    flexWrap: "wrap",
    transition: "all 0.3s ease",
    borderBottom: "1px solid #f0f0f0",
  },
  logo: {
    color: "#2ecc71",
    fontSize: "22px",
    fontWeight: "bold",
    textDecoration: "none",
  },
  hamburger: {
    backgroundColor: "transparent",
    border: "none",
    color: "#333",
    fontSize: "28px",
    cursor: "pointer",
  },
  links: {
    display: "flex",
    gap: "32px",
    alignItems: "center",
  },
  link: {
    color: "#333",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
  },
  btnLink: {
    backgroundColor: "#2ecc71",
    color: "#ffffff",
    textDecoration: "none",
    padding: "10px 24px",
    borderRadius: "25px",
    fontSize: "15px",
    fontWeight: "bold",
  },
  mobileMenu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "8px",
    paddingBottom: "16px",
  },
  mobileLink: {
    color: "#333",
    textDecoration: "none",
    fontSize: "16px",
    padding: "14px 0",
    borderBottom: "1px solid #f0f0f0",
  },
  stickyBar: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    zIndex: 200,
    boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
  },
  stickyCall: {
    flex: 1,
    backgroundColor: "#333",
    color: "#ffffff",
    textDecoration: "none",
    textAlign: "center",
    padding: "16px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  stickyQuote: {
    flex: 1,
    backgroundColor: "#2ecc71",
    color: "#ffffff",
    textDecoration: "none",
    textAlign: "center",
    padding: "16px",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default Navbar;
