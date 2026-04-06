import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateOnScroll from "../components/AnimateOnScroll";

function Services() {
  return (
    <main>
      {/* Page Header */}
      <section style={styles.header}>
        <AnimateOnScroll direction="up">
          <h1 style={styles.headerTitle}>Our Services</h1>
          <p style={styles.headerSubtitle}>
            Professional cleaning solutions for every need and budget.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Services List */}
      <section style={styles.section}>
        <div style={styles.container}>
          {services.map((s, i) => (
            <AnimateOnScroll
              key={i}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={0.1}
            >
              <motion.div
                style={styles.serviceCard}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(46,204,113,0.15)",
                }}
              >
                <div style={styles.iconBox}>
                  <span style={styles.icon}>{s.icon}</span>
                </div>
                <div style={styles.serviceContent}>
                  <h2 style={styles.serviceTitle}>{s.title}</h2>
                  <p style={styles.serviceDesc}>{s.desc}</p>
                  <ul style={styles.list}>
                    {s.points.map((p, j) => (
                      <li key={j} style={styles.listItem}>
                        ✅ {p}
                      </li>
                    ))}
                  </ul>
                  <div style={styles.serviceFooter}>
                    <span style={styles.price}>From {s.price}</span>
                    <Link to="/contact" style={styles.btnPrimary}>
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <AnimateOnScroll direction="up">
          <h2 style={styles.ctaTitle}>Not Sure Which Service You Need?</h2>
          <p style={styles.ctaText}>
            Contact us and we'll recommend the best option for your space and
            budget.
          </p>
          <Link to="/contact" style={styles.btnWhite}>
            Get a Free Quote
          </Link>
        </AnimateOnScroll>
      </section>
    </main>
  );
}

const services = [
  {
    icon: "🏠",
    title: "Regular Home Cleaning",
    desc: "Scheduled cleaning services to keep your home consistently clean and tidy.",
    price: "$99",
    points: [
      "Weekly, bi-weekly or monthly",
      "All rooms cleaned thoroughly",
      "Vacuuming and mopping",
      "Kitchen and bathroom cleaning",
    ],
  },
  {
    icon: "✨",
    title: "Deep Cleaning",
    desc: "A thorough top-to-bottom clean for homes that need extra attention.",
    price: "$199",
    points: [
      "Inside appliances cleaned",
      "Baseboards and trim",
      "Inside cabinets and drawers",
      "Behind and under furniture",
    ],
  },
  {
    icon: "📦",
    title: "Move In/Out Cleaning",
    desc: "Leave your old place spotless or start fresh in your new home.",
    price: "$249",
    points: [
      "Full property cleaned",
      "Inside all appliances",
      "Walls and light switches",
      "Deposit return guarantee",
    ],
  },
  {
    icon: "🏢",
    title: "Office Cleaning",
    desc: "Professional cleaning for offices and commercial spaces.",
    price: "$149",
    points: [
      "After hours cleaning",
      "Workstations and common areas",
      "Washrooms sanitized",
      "Weekly contracts available",
    ],
  },
  {
    icon: "🔨",
    title: "Post Construction",
    desc: "Remove dust, debris, and residue after renovations.",
    price: "$299",
    points: [
      "Dust and debris removal",
      "Window and glass cleaning",
      "Floor cleaning and polishing",
      "Final inspection included",
    ],
  },
  {
    icon: "🎉",
    title: "Event Cleaning",
    desc: "Pre and post event cleaning for any occasion.",
    price: "$179",
    points: [
      "Pre-event setup clean",
      "Post-event full clean",
      "Same day service available",
      "Commercial and residential",
    ],
  },
];

const styles = {
  header: {
    background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    padding: "80px 40px",
    textAlign: "center",
  },
  headerTitle: {
    color: "#1a1a2e",
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "16px",
  },
  headerSubtitle: {
    color: "#555",
    fontSize: "20px",
  },
  section: {
    padding: "80px 40px",
    backgroundColor: "#ffffff",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  serviceCard: {
    display: "flex",
    gap: "30px",
    backgroundColor: "#f8fffe",
    padding: "40px",
    borderRadius: "16px",
    alignItems: "flex-start",
    flexWrap: "wrap",
    border: "1px solid #e0fdf0",
    cursor: "pointer",
  },
  iconBox: {
    backgroundColor: "#1a1a2e",
    borderRadius: "16px",
    padding: "20px",
    minWidth: "80px",
    textAlign: "center",
  },
  icon: {
    fontSize: "40px",
  },
  serviceContent: {
    flex: 1,
    minWidth: "200px",
  },
  serviceTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "10px",
  },
  serviceDesc: {
    color: "#666",
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "16px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "8px",
    marginBottom: "20px",
  },
  listItem: {
    color: "#444",
    fontSize: "15px",
  },
  serviceFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "12px",
  },
  price: {
    color: "#2ecc71",
    fontWeight: "700",
    fontSize: "20px",
  },
  btnPrimary: {
    backgroundColor: "#2ecc71",
    color: "#ffffff",
    padding: "10px 24px",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "15px",
  },
  cta: {
    background: "linear-gradient(135deg, #2ecc71, #16a34a)",
    padding: "80px 40px",
    textAlign: "center",
  },
  ctaTitle: {
    color: "#ffffff",
    fontSize: "36px",
    fontWeight: "800",
    marginBottom: "16px",
  },
  ctaText: {
    color: "#ffffff",
    fontSize: "18px",
    marginBottom: "32px",
    opacity: 0.9,
  },
  btnWhite: {
    backgroundColor: "#ffffff",
    color: "#16a34a",
    padding: "14px 32px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    display: "inline-block",
  },
};

export default Services;
