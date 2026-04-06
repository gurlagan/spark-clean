import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.col}>
          <h3 style={styles.logo}>✨ SparkClean</h3>
          <p style={styles.text}>
            Professional cleaning services for homes and businesses in Edmonton.
            Trusted, reliable, and thorough.
          </p>
          <div style={styles.socials}>
            <motion.a
              href="#"
              style={styles.social}
              whileHover={{ scale: 1.2 }}
            >
              📘
            </motion.a>
            <motion.a
              href="#"
              style={styles.social}
              whileHover={{ scale: 1.2 }}
            >
              📸
            </motion.a>
            <motion.a
              href="#"
              style={styles.social}
              whileHover={{ scale: 1.2 }}
            >
              🐦
            </motion.a>
          </div>
        </div>
        <div style={styles.col}>
          <h4 style={styles.heading}>Quick Links</h4>
          <Link to="/" style={styles.footerLink}>
            Home
          </Link>
          <Link to="/services" style={styles.footerLink}>
            Services
          </Link>
          <Link to="/pricing" style={styles.footerLink}>
            Pricing
          </Link>
          <Link to="/contact" style={styles.footerLink}>
            Book Now
          </Link>
        </div>
        <div style={styles.col}>
          <h4 style={styles.heading}>Services</h4>
          <p style={styles.text}>Regular Home Cleaning</p>
          <p style={styles.text}>Deep Cleaning</p>
          <p style={styles.text}>Move In/Out Cleaning</p>
          <p style={styles.text}>Office Cleaning</p>
          <p style={styles.text}>Post Construction</p>
        </div>
        <div style={styles.col}>
          <h4 style={styles.heading}>Contact Us</h4>
          <p style={styles.text}>📞 (780) 555-0199</p>
          <p style={styles.text}>✉️ hello@sparkclean.ca</p>
          <p style={styles.text}>📍 Edmonton, Alberta</p>
          <div style={styles.badge}>
            <span>⭐⭐⭐⭐⭐</span>
            <span style={styles.badgeText}>500+ 5-Star Reviews</span>
          </div>
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.bottomText}>
          © 2026 SparkClean. All rights reserved. | Edmonton, Alberta
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1a1a2e",
    color: "#ffffff",
    paddingTop: "60px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "40px",
    padding: "0 40px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  logo: {
    color: "#2ecc71",
    fontSize: "22px",
    marginBottom: "8px",
  },
  heading: {
    color: "#2ecc71",
    marginBottom: "8px",
    fontSize: "16px",
  },
  text: {
    color: "#aaaaaa",
    fontSize: "14px",
    lineHeight: "1.6",
  },
  footerLink: {
    color: "#aaaaaa",
    fontSize: "14px",
    textDecoration: "none",
  },
  socials: {
    display: "flex",
    gap: "12px",
    marginTop: "8px",
  },
  social: {
    fontSize: "24px",
    textDecoration: "none",
    cursor: "pointer",
  },
  badge: {
    backgroundColor: "#2ecc7120",
    border: "1px solid #2ecc71",
    borderRadius: "8px",
    padding: "10px",
    marginTop: "8px",
    textAlign: "center",
  },
  badgeText: {
    display: "block",
    color: "#2ecc71",
    fontSize: "12px",
    marginTop: "4px",
  },
  bottom: {
    borderTop: "1px solid #333",
    padding: "20px 40px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  bottomText: {
    color: "#666",
    fontSize: "13px",
  },
};

export default Footer;
