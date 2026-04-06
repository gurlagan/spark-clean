import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateOnScroll from "../components/AnimateOnScroll";

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <main>
      {/* Page Header */}
      <section style={styles.header}>
        <AnimateOnScroll direction="up">
          <h1 style={styles.headerTitle}>Simple, Transparent Pricing</h1>
          <p style={styles.headerSubtitle}>
            No hidden fees. No surprises. Just a clean home.
          </p>
        </AnimateOnScroll>

        {/* Toggle */}
        <AnimateOnScroll direction="up" delay={0.2}>
          <div style={styles.toggle}>
            <span
              style={{
                ...styles.toggleLabel,
                color: isMonthly ? "#2ecc71" : "#999",
              }}
            >
              Monthly
            </span>
            <div
              style={styles.toggleSwitch}
              onClick={() => setIsMonthly(!isMonthly)}
            >
              <motion.div
                style={styles.toggleThumb}
                animate={{ x: isMonthly ? 0 : 28 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span
              style={{
                ...styles.toggleLabel,
                color: !isMonthly ? "#2ecc71" : "#999",
              }}
            >
              One-Time
            </span>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Pricing Cards */}
      <section style={styles.section}>
        <div style={styles.grid}>
          {plans.map((plan, i) => (
            <AnimateOnScroll key={i} direction="up" delay={i * 0.15}>
              <motion.div
                style={{
                  ...styles.card,
                  border: plan.popular
                    ? "2px solid #2ecc71"
                    : "1px solid #e0fdf0",
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(46,204,113,0.15)",
                }}
              >
                {plan.popular && (
                  <div style={styles.popularBadge}>⭐ Most Popular</div>
                )}
                <div style={styles.planIcon}>{plan.icon}</div>
                <h3 style={styles.planName}>{plan.name}</h3>
                <p style={styles.planDesc}>{plan.desc}</p>
                <div style={styles.planPrice}>
                  <span style={styles.currency}>$</span>
                  <span style={styles.amount}>
                    {isMonthly ? plan.monthlyPrice : plan.oneTimePrice}
                  </span>
                  <span style={styles.period}>
                    {isMonthly ? "/mo" : " one-time"}
                  </span>
                </div>
                <ul style={styles.featureList}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={styles.feature}>
                      <span style={styles.checkmark}>✅</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  style={{
                    ...styles.planBtn,
                    backgroundColor: plan.popular ? "#2ecc71" : "#1a1a2e",
                  }}
                >
                  Get Started
                </Link>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.faqSection}>
        <AnimateOnScroll direction="up">
          <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
        </AnimateOnScroll>
        <div style={styles.faqGrid}>
          {faqs.map((f, i) => (
            <AnimateOnScroll key={i} direction="up" delay={i * 0.1}>
              <div style={styles.faqCard}>
                <h3 style={styles.faqQuestion}>{f.q}</h3>
                <p style={styles.faqAnswer}>{f.a}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <AnimateOnScroll direction="up">
          <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
          <p style={styles.ctaText}>
            Book today and get 15% off your first clean.
          </p>
          <Link to="/contact" style={styles.btnWhite}>
            Book Now →
          </Link>
        </AnimateOnScroll>
      </section>
    </main>
  );
}

const plans = [
  {
    icon: "🌱",
    name: "Basic",
    desc: "Perfect for small apartments and condos.",
    monthlyPrice: 99,
    oneTimePrice: 149,
    popular: false,
    features: [
      "Up to 2 bedrooms",
      "Kitchen and bathroom",
      "Vacuuming and mopping",
      "Dusting all surfaces",
      "Trash removal",
    ],
  },
  {
    icon: "✨",
    name: "Standard",
    desc: "Our most popular plan for family homes.",
    monthlyPrice: 159,
    oneTimePrice: 229,
    popular: true,
    features: [
      "Up to 4 bedrooms",
      "Full home cleaning",
      "Inside appliances",
      "Window sills and ledges",
      "Baseboards and trim",
      "Priority scheduling",
    ],
  },
  {
    icon: "👑",
    name: "Premium",
    desc: "The ultimate cleaning experience.",
    monthlyPrice: 249,
    oneTimePrice: 349,
    popular: false,
    features: [
      "Unlimited bedrooms",
      "Deep clean every visit",
      "Eco-friendly products",
      "Same-day availability",
      "Dedicated cleaner",
      "Satisfaction guarantee",
      "24/7 support",
    ],
  },
];

const faqs = [
  {
    q: "Do I need to be home during the cleaning?",
    a: "No — many clients give us a key or door code. We are fully insured and background checked.",
  },
  {
    q: "What products do you use?",
    a: "We use eco-friendly, non-toxic cleaning products that are safe for children and pets.",
  },
  {
    q: "How do I pay?",
    a: "We accept credit cards, e-transfer, and cash. Payment is due after each cleaning.",
  },
  {
    q: "What if I am not happy with the clean?",
    a: "We offer a 100% satisfaction guarantee. If you are not happy, we will re-clean for free.",
  },
  {
    q: "How do I cancel or reschedule?",
    a: "Just give us 24 hours notice and we will reschedule at no charge.",
  },
  {
    q: "Do you bring your own supplies?",
    a: "Yes — we bring all equipment and supplies. You do not need to provide anything.",
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
    marginBottom: "40px",
  },
  toggle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
  },
  toggleLabel: {
    fontSize: "16px",
    fontWeight: "600",
  },
  toggleSwitch: {
    width: "56px",
    height: "28px",
    backgroundColor: "#2ecc71",
    borderRadius: "14px",
    padding: "2px",
    cursor: "pointer",
    position: "relative",
  },
  toggleThumb: {
    width: "24px",
    height: "24px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
  },
  section: {
    padding: "80px 40px",
    backgroundColor: "#ffffff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#f8fffe",
    padding: "40px",
    borderRadius: "20px",
    position: "relative",
    height: "100%",
  },
  popularBadge: {
    position: "absolute",
    top: "-14px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#2ecc71",
    color: "#ffffff",
    padding: "6px 20px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "700",
    whiteSpace: "nowrap",
  },
  planIcon: {
    fontSize: "42px",
    marginBottom: "16px",
  },
  planName: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#1a1a2e",
    marginBottom: "8px",
  },
  planDesc: {
    color: "#666",
    fontSize: "15px",
    marginBottom: "20px",
  },
  planPrice: {
    display: "flex",
    alignItems: "flex-end",
    gap: "4px",
    marginBottom: "24px",
  },
  currency: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#2ecc71",
    marginBottom: "8px",
  },
  amount: {
    fontSize: "52px",
    fontWeight: "900",
    color: "#1a1a2e",
    lineHeight: "1",
  },
  period: {
    fontSize: "16px",
    color: "#999",
    marginBottom: "8px",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 30px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#444",
    fontSize: "15px",
  },
  checkmark: {
    fontSize: "14px",
  },
  planBtn: {
    display: "block",
    color: "#ffffff",
    textAlign: "center",
    padding: "14px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
  faqSection: {
    padding: "80px 40px",
    backgroundColor: "#f8fffe",
  },
  faqTitle: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#1a1a2e",
    textAlign: "center",
    marginBottom: "50px",
  },
  faqGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  faqCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    border: "1px solid #e0fdf0",
  },
  faqQuestion: {
    fontSize: "17px",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "10px",
  },
  faqAnswer: {
    color: "#666",
    fontSize: "15px",
    lineHeight: "1.6",
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

export default Pricing;
