import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Counter from "../components/Counter";

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section style={styles.hero}>
        <motion.div
          style={styles.heroContent}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            style={styles.heroBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            ⭐ Edmonton's #1 Rated Cleaning Service
          </motion.div>
          <h1 style={styles.heroTitle}>
            A Cleaner Home,
            <br />
            <span style={styles.heroAccent}>A Happier Life</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Professional, eco-friendly cleaning services for homes and
            businesses. Fully insured, background-checked, and satisfaction
            guaranteed.
          </p>
          <div style={styles.heroBtns}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" style={styles.btnPrimary}>
                Book a Free Quote →
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/services" style={styles.btnSecondary}>
                View Services
              </Link>
            </motion.div>
          </div>
          <div style={styles.heroTrust}>
            <span style={styles.trustItem}>✅ Fully Insured</span>
            <span style={styles.trustItem}>✅ Background Checked</span>
            <span style={styles.trustItem}>✅ Eco-Friendly</span>
          </div>
        </motion.div>
        <motion.div
          style={styles.heroImageBox}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={styles.heroCard}>
            <div style={styles.heroCardIcon}>🏠</div>
            <div style={styles.heroCardText}>Home Cleaning</div>
            <div style={styles.heroCardSub}>Starting at $99</div>
          </div>
          <div style={styles.heroCard}>
            <div style={styles.heroCardIcon}>🏢</div>
            <div style={styles.heroCardText}>Office Cleaning</div>
            <div style={styles.heroCardSub}>Starting at $149</div>
          </div>
          <div style={styles.heroCard}>
            <div style={styles.heroCardIcon}>✨</div>
            <div style={styles.heroCardText}>Deep Cleaning</div>
            <div style={styles.heroCardSub}>Starting at $199</div>
          </div>
          <div style={styles.heroCard}>
            <div style={styles.heroCardIcon}>📦</div>
            <div style={styles.heroCardText}>Move In/Out</div>
            <div style={styles.heroCardSub}>Starting at $249</div>
          </div>
        </motion.div>
      </section>

      {/* Wave Divider */}
      <div style={styles.wave}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#f8fffe"
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>

      {/* Stats Counter */}
      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          {stats.map((s, i) => (
            <AnimateOnScroll key={i} direction="up" delay={i * 0.15}>
              <div style={styles.statCard}>
                <div style={styles.statIcon}>{s.icon}</div>
                <div style={styles.statNumber}>
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section style={styles.section}>
        <AnimateOnScroll direction="up">
          <h2 style={styles.sectionTitle}>Our Cleaning Services</h2>
          <p style={styles.sectionSubtitle}>
            Tailored cleaning solutions for every need and budget.
          </p>
        </AnimateOnScroll>
        <div style={styles.servicesGrid}>
          {services.map((s, i) => (
            <AnimateOnScroll key={i} direction="up" delay={i * 0.1}>
              <motion.div
                style={styles.serviceCard}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(46,204,113,0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div style={styles.serviceIcon}>{s.icon}</div>
                <h3 style={styles.serviceTitle}>{s.title}</h3>
                <p style={styles.serviceDesc}>{s.desc}</p>
                <div style={styles.servicePrice}>From {s.price}</div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Wave Divider 2 */}
      <div style={styles.wave2}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#f0fdf4"
            d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>

      {/* How It Works */}
      <section style={styles.howSection}>
        <AnimateOnScroll direction="up">
          <h2 style={styles.sectionTitle}>How It Works</h2>
          <p style={styles.sectionSubtitle}>
            Getting your home cleaned is simple and stress-free.
          </p>
        </AnimateOnScroll>
        <div style={styles.stepsGrid}>
          {steps.map((s, i) => (
            <AnimateOnScroll key={i} direction="up" delay={i * 0.2}>
              <div style={styles.stepCard}>
                <div style={styles.stepNumber}>{s.number}</div>
                <div style={styles.stepIcon}>{s.icon}</div>
                <h3 style={styles.stepTitle}>{s.title}</h3>
                <p style={styles.stepDesc}>{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section style={styles.testimonialsSection}>
        <AnimateOnScroll direction="up">
          <h2 style={styles.sectionTitleWhite}>What Our Clients Say</h2>
          <p style={styles.sectionSubtitleWhite}>
            500+ happy customers across Edmonton
          </p>
        </AnimateOnScroll>
        <div style={styles.carouselContainer}>
          <motion.div
            key={currentTestimonial}
            style={styles.testimonialCard}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div style={styles.stars}>⭐⭐⭐⭐⭐</div>
            <p style={styles.testimonialText}>
              "{testimonials[currentTestimonial].text}"
            </p>
            <div style={styles.testimonialAuthor}>
              <div style={styles.authorAvatar}>
                {testimonials[currentTestimonial].initials}
              </div>
              <div>
                <div style={styles.authorName}>
                  {testimonials[currentTestimonial].name}
                </div>
                <div style={styles.authorLocation}>
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>
          </motion.div>
          <div style={styles.dots}>
            {testimonials.map((_, i) => (
              <div
                key={i}
                style={{
                  ...styles.dot,
                  backgroundColor:
                    i === currentTestimonial ? "#2ecc71" : "#ffffff50",
                }}
                onClick={() => setCurrentTestimonial(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section style={styles.checklistSection}>
        <div style={styles.checklistContainer}>
          <AnimateOnScroll direction="left">
            <div style={styles.checklistText}>
              <h2 style={styles.sectionTitle}>
                What's Included in Every Clean
              </h2>
              <p style={styles.sectionSubtitle}>
                We don't cut corners — every visit covers all the essentials.
              </p>
              <Link to="/contact" style={styles.btnPrimary}>
                Book Now →
              </Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div style={styles.checklistGrid}>
              {checklist.map((item, i) => (
                <motion.div
                  key={i}
                  style={styles.checkItem}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span style={styles.checkIcon}>✅</span>
                  <span style={styles.checkText}>{item}</span>
                </motion.div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={styles.cta}>
        <AnimateOnScroll direction="up">
          <h2 style={styles.ctaTitle}>Ready for a Sparkling Clean Home?</h2>
          <p style={styles.ctaText}>
            Book today and get 15% off your first cleaning.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" style={styles.btnWhite}>
              Claim Your Discount →
            </Link>
          </motion.div>
        </AnimateOnScroll>
      </section>
    </main>
  );
}

const stats = [
  { icon: "🏠", end: 500, suffix: "+", label: "Homes Cleaned" },
  { icon: "⭐", end: 5, suffix: "/5", label: "Average Rating" },
  { icon: "👥", end: 12, suffix: "", label: "Pro Cleaners" },
  { icon: "📅", end: 3, suffix: " yrs", label: "In Business" },
];

const services = [
  {
    icon: "🏠",
    title: "Regular Home Cleaning",
    desc: "Weekly, bi-weekly, or monthly scheduled cleaning for your home.",
    price: "$99",
  },
  {
    icon: "✨",
    title: "Deep Cleaning",
    desc: "Thorough top-to-bottom cleaning for neglected or heavily used spaces.",
    price: "$199",
  },
  {
    icon: "📦",
    title: "Move In/Out Cleaning",
    desc: "Leave your old place spotless or start fresh in your new home.",
    price: "$249",
  },
  {
    icon: "🏢",
    title: "Office Cleaning",
    desc: "Professional cleaning for offices, retail spaces, and commercial properties.",
    price: "$149",
  },
  {
    icon: "🔨",
    title: "Post Construction",
    desc: "Remove dust, debris, and residue after renovations or construction.",
    price: "$299",
  },
  {
    icon: "🎉",
    title: "Event Cleaning",
    desc: "Pre and post event cleaning for parties, weddings, and corporate events.",
    price: "$179",
  },
];

const steps = [
  {
    number: "01",
    icon: "📋",
    title: "Get a Quote",
    desc: "Fill out our quick form and get a free quote within 1 hour.",
  },
  {
    number: "02",
    icon: "📅",
    title: "Schedule a Time",
    desc: "Pick a date and time that works best for you — we're flexible.",
  },
  {
    number: "03",
    icon: "✨",
    title: "We Clean",
    desc: "Our professional team arrives on time and gets to work.",
  },
  {
    number: "04",
    icon: "😊",
    title: "You Relax",
    desc: "Enjoy your sparkling clean space — guaranteed satisfaction.",
  },
];

const testimonials = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    location: "Edmonton, AB",
    text: "SparkClean has been cleaning my home for 6 months and I couldn't be happier. They're thorough, professional, and always on time. My house has never looked better!",
  },
  {
    initials: "MR",
    name: "Mike Robertson",
    location: "St. Albert, AB",
    text: "Used them for a move-out clean and got my full deposit back. The landlord was amazed at how clean the place was. Worth every penny!",
  },
  {
    initials: "AL",
    name: "Amanda Lee",
    location: "Sherwood Park, AB",
    text: "I have two dogs and a toddler — my house was a disaster. SparkClean came in and transformed it. I now have them every two weeks. Absolutely love this service!",
  },
  {
    initials: "TR",
    name: "Tom Richards",
    location: "Edmonton, AB",
    text: "Best cleaning service in Edmonton. They use eco-friendly products which is important for our family. Highly recommend!",
  },
];

const checklist = [
  "Vacuuming all floors and carpets",
  "Mopping hard floors",
  "Dusting all surfaces",
  "Kitchen deep clean",
  "Bathroom scrubbing",
  "Window sills and ledges",
  "Baseboards and trim",
  "Inside microwave",
  "Trash removal",
  "Bed making",
  "Mirror cleaning",
  "Light switches and door handles",
];

const styles = {
  hero: {
    background:
      "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #ffffff 100%)",
    padding: "100px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "60px",
    flexWrap: "wrap",
    minHeight: "95vh",
    position: "relative",
    overflow: "hidden",
  },
  heroTitle: {
    fontSize: "64px",
    fontWeight: "800",
    color: "#0a0f1e",
    lineHeight: "1.1",
    marginBottom: "20px",
    letterSpacing: "-1px",
  },
  heroAccent: {
    background: "linear-gradient(135deg, #16a34a, #22c55e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#ffffff",
    border: "1px solid #22c55e40",
    color: "#16a34a",
    padding: "8px 20px",
    borderRadius: "30px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "28px",
    boxShadow: "0 4px 20px rgba(34,197,94,0.15)",
  },
  heroSubtitle: {
    color: "#6b7280",
    fontSize: "19px",
    lineHeight: "1.7",
    marginBottom: "40px",
    fontWeight: "400",
  },
  heroCard: {
    backgroundColor: "#ffffff",
    padding: "28px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
    border: "1px solid #f0fdf4",
    transition: "transform 0.3s ease",
  },
  heroBtns: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "24px",
  },
  btnPrimary: {
    backgroundColor: "#2ecc71",
    color: "#ffffff",
    padding: "14px 32px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    display: "inline-block",
  },
  btnSecondary: {
    backgroundColor: "transparent",
    color: "#1a1a2e",
    padding: "14px 32px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    border: "2px solid #1a1a2e",
    display: "inline-block",
  },
  heroTrust: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  trustItem: {
    color: "#16a34a",
    fontSize: "14px",
    fontWeight: "500",
  },
  heroImageBox: {
    flex: 1,
    minWidth: "280px",
    maxWidth: "400px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },

  heroCardIcon: {
    fontSize: "36px",
    marginBottom: "8px",
  },
  heroCardText: {
    color: "#1a1a2e",
    fontWeight: "600",
    fontSize: "14px",
    marginBottom: "4px",
  },
  heroCardSub: {
    color: "#2ecc71",
    fontSize: "13px",
    fontWeight: "500",
  },
  wave: {
    backgroundColor: "#dcfce7",
    lineHeight: 0,
  },
  wave2: {
    backgroundColor: "#ffffff",
    lineHeight: 0,
  },
  statsSection: {
    background: "linear-gradient(135deg, #0a0f1e 0%, #1a1f2e 100%)",
    padding: "80px 40px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "24px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  statCard: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "36px 24px",
    borderRadius: "20px",
    textAlign: "center",
  },
  statIcon: {
    fontSize: "40px",
    marginBottom: "16px",
  },
  statNumber: {
    fontSize: "48px",
    fontWeight: "900",
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "8px",
  },
  statLabel: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "15px",
    fontWeight: "500",
  },
  serviceCard: {
    background: "#ffffff",
    padding: "36px",
    borderRadius: "20px",
    textAlign: "left",
    border: "1px solid #f0f0f0",
    cursor: "pointer",
    height: "100%",
    transition: "all 0.3s ease",
  },
  serviceIcon: {
    fontSize: "48px",
    marginBottom: "20px",
    display: "block",
  },
  serviceTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#0a0f1e",
    marginBottom: "10px",
    fontFamily: "Playfair Display, serif",
  },
  serviceDesc: {
    color: "#6b7280",
    fontSize: "15px",
    lineHeight: "1.7",
    marginBottom: "20px",
  },
  servicePrice: {
    display: "inline-block",
    color: "#16a34a",
    fontWeight: "700",
    fontSize: "18px",
    backgroundColor: "#f0fdf4",
    padding: "6px 16px",
    borderRadius: "20px",
  },
  stepCard: {
    backgroundColor: "#ffffff",
    padding: "40px 32px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    border: "1px solid #f0f0f0",
    position: "relative",
  },
  stepNumber: {
    fontSize: "72px",
    fontWeight: "900",
    color: "#22c55e10",
    lineHeight: "1",
    marginBottom: "4px",
    fontFamily: "Playfair Display, serif",
  },
  stepTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#0a0f1e",
    marginBottom: "10px",
    fontFamily: "Playfair Display, serif",
  },
  stepDesc: {
    color: "#6b7280",
    fontSize: "15px",
    lineHeight: "1.7",
  },
  testimonialsSection: {
    background: "linear-gradient(135deg, #0a0f1e 0%, #1a1f2e 100%)",
    padding: "100px 40px",
    textAlign: "center",
  },
  testimonialCard: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "50px 40px",
    borderRadius: "24px",
    marginBottom: "32px",
  },
  testimonialText: {
    color: "rgba(255,255,255,0.9)",
    fontSize: "20px",
    lineHeight: "1.8",
    fontStyle: "italic",
    marginBottom: "28px",
    fontFamily: "Playfair Display, serif",
  },
  sectionTitleWhite: {
    fontSize: "42px",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "16px",
    fontFamily: "Playfair Display, serif",
  },
  sectionSubtitleWhite: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "18px",
    marginBottom: "60px",
  },
  cta: {
    background:
      "linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #16a34a 100%)",
    backgroundSize: "200% 200%",
    padding: "120px 40px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  ctaTitle: {
    color: "#ffffff",
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "20px",
    fontFamily: "Playfair Display, serif",
  },
  ctaText: {
    color: "rgba(255,255,255,0.9)",
    fontSize: "20px",
    marginBottom: "40px",
  },
  btnWhite: {
    backgroundColor: "#ffffff",
    color: "#16a34a",
    padding: "18px 48px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "18px",
    display: "inline-block",
    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
  },
  checkItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    backgroundColor: "#ffffff",
    padding: "14px 18px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    border: "1px solid #f0f0f0",
  },
  checkText: {
    color: "#374151",
    fontSize: "14px",
    fontWeight: "500",
  },
  section: {
    padding: "80px 40px",
    backgroundColor: "#ffffff",
    textAlign: "center",
  },
  howSection: {
    padding: "80px 40px",
    backgroundColor: "#f0fdf4",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#1a1a2e",
    marginBottom: "12px",
  },
  sectionSubtitle: {
    color: "#666",
    fontSize: "18px",
    marginBottom: "50px",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  stepIcon: {
    fontSize: "36px",
    marginBottom: "12px",
  },

  carouselContainer: {
    maxWidth: "700px",
    margin: "0 auto",
  },

  stars: {
    fontSize: "24px",
    marginBottom: "16px",
  },

  testimonialAuthor: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    justifyContent: "center",
  },
  authorAvatar: {
    backgroundColor: "#2ecc71",
    color: "#ffffff",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "16px",
  },
  authorName: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "16px",
  },
  authorLocation: {
    color: "#aaaaaa",
    fontSize: "14px",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  checklistSection: {
    padding: "80px 40px",
    backgroundColor: "#f8fffe",
  },
  checklistContainer: {
    display: "flex",
    gap: "60px",
    maxWidth: "1100px",
    margin: "0 auto",
    alignItems: "center",
    flexWrap: "wrap",
  },
  checklistText: {
    flex: 1,
    minWidth: "280px",
  },
  checklistGrid: {
    flex: 1,
    minWidth: "280px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },
  checkItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#ffffff",
    padding: "12px 16px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  checkIcon: {
    fontSize: "16px",
  },
  checkText: {
    color: "#444",
    fontSize: "14px",
    fontWeight: "500",
  },
  cta: {
    background: "linear-gradient(135deg, #2ecc71, #16a34a)",
    padding: "100px 40px",
    textAlign: "center",
  },
  ctaTitle: {
    color: "#ffffff",
    fontSize: "42px",
    fontWeight: "800",
    marginBottom: "16px",
  },
  ctaText: {
    color: "#ffffff",
    fontSize: "20px",
    marginBottom: "36px",
    opacity: 0.9,
  },
  btnWhite: {
    backgroundColor: "#ffffff",
    color: "#16a34a",
    padding: "16px 40px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    display: "inline-block",
  },
};

export default Home;
