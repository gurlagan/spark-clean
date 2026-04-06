import { useState } from "react";
import AnimateOnScroll from "../components/AnimateOnScroll";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Page Header */}
      <section style={styles.header}>
        <AnimateOnScroll direction="up">
          <h1 style={styles.headerTitle}>Book a Cleaning</h1>
          <p style={styles.headerSubtitle}>
            Get a free quote within 1 hour — no obligation.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          {/* Info */}
          <AnimateOnScroll direction="left">
            <div style={styles.infoCol}>
              <h2 style={styles.infoTitle}>Get In Touch</h2>
              <p style={styles.infoText}>
                Ready for a cleaner space? Fill out the form and we'll get back
                to you within 1 hour with a free quote.
              </p>
              <div style={styles.infoCards}>
                {contactInfo.map((c, i) => (
                  <div key={i} style={styles.infoCard}>
                    <span style={styles.infoIcon}>{c.icon}</span>
                    <div>
                      <div style={styles.infoLabel}>{c.label}</div>
                      <div style={styles.infoValue}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={styles.hours}>
                <h3 style={styles.hoursTitle}>Business Hours</h3>
                {hours.map((h, i) => (
                  <div key={i} style={styles.hoursRow}>
                    <span style={styles.hoursDay}>{h.day}</span>
                    <span style={styles.hoursTime}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll direction="right">
            <div style={styles.formCol}>
              {submitted ? (
                <div style={styles.successBox}>
                  <div style={styles.successIcon}>✅</div>
                  <h3 style={styles.successTitle}>Booking Request Sent!</h3>
                  <p style={styles.successText}>
                    Thanks {formData.name}! We'll confirm your booking within 1
                    hour.
                  </p>
                </div>
              ) : (
                <div style={styles.form}>
                  <h2 style={styles.formTitle}>Request a Free Quote</h2>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Full Name *</label>
                    <input
                      style={styles.input}
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Email Address *</label>
                    <input
                      style={styles.input}
                      type="email"
                      name="email"
                      placeholder="jane@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input
                      style={styles.input}
                      type="tel"
                      name="phone"
                      placeholder="(780) 555-0199"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Service Needed</label>
                    <select
                      style={styles.input}
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="regular">Regular Home Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="moveinout">Move In/Out Cleaning</option>
                      <option value="office">Office Cleaning</option>
                      <option value="postconstruction">
                        Post Construction
                      </option>
                      <option value="event">Event Cleaning</option>
                    </select>
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Preferred Date</label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      minDate={new Date()}
                      placeholderText="Select a date"
                      style={styles.input}
                      wrapperClassName="datepicker-wrapper"
                      customInput={<input style={styles.input} />}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Message</label>
                    <textarea
                      style={styles.textarea}
                      name="message"
                      placeholder="Tell us about your space and any special requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>
                  <button style={styles.btnPrimary} onClick={handleSubmit}>
                    Request Free Quote →
                  </button>
                </div>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}

const contactInfo = [
  { icon: "📞", label: "Phone", value: "(780) 555-0199" },
  { icon: "✉️", label: "Email", value: "hello@sparkclean.ca" },
  { icon: "📍", label: "Address", value: "Edmonton, Alberta, Canada" },
];

const hours = [
  { day: "Monday - Friday", time: "7:00 AM - 7:00 PM" },
  { day: "Saturday", time: "8:00 AM - 5:00 PM" },
  { day: "Sunday", time: "10:00 AM - 3:00 PM" },
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
    display: "flex",
    gap: "60px",
    maxWidth: "1100px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  infoCol: {
    flex: 1,
    minWidth: "280px",
  },
  infoTitle: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#1a1a2e",
    marginBottom: "12px",
  },
  infoText: {
    color: "#666",
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "30px",
  },
  infoCards: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "40px",
  },
  infoCard: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    backgroundColor: "#f0fdf4",
    padding: "16px 20px",
    borderRadius: "10px",
    border: "1px solid #e0fdf0",
  },
  infoIcon: {
    fontSize: "24px",
  },
  infoLabel: {
    color: "#999",
    fontSize: "12px",
    marginBottom: "2px",
  },
  infoValue: {
    color: "#1a1a2e",
    fontSize: "16px",
    fontWeight: "500",
  },
  hours: {
    backgroundColor: "#1a1a2e",
    padding: "24px",
    borderRadius: "10px",
  },
  hoursTitle: {
    color: "#2ecc71",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  hoursRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  hoursDay: {
    color: "#aaaaaa",
    fontSize: "14px",
  },
  hoursTime: {
    color: "#ffffff",
    fontSize: "14px",
  },
  formCol: {
    flex: 1.5,
    minWidth: "300px",
  },
  form: {
    backgroundColor: "#f8fffe",
    padding: "40px",
    borderRadius: "16px",
    border: "1px solid #e0fdf0",
  },
  formTitle: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#1a1a2e",
    marginBottom: "24px",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    color: "#444",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "6px",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #e0fdf0",
    fontSize: "15px",
    color: "#333",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #e0fdf0",
    fontSize: "15px",
    color: "#333",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    resize: "vertical",
  },
  btnPrimary: {
    backgroundColor: "#2ecc71",
    color: "#ffffff",
    padding: "14px 32px",
    borderRadius: "30px",
    border: "none",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    width: "100%",
  },
  successBox: {
    backgroundColor: "#f0fdf4",
    padding: "60px 40px",
    borderRadius: "16px",
    textAlign: "center",
    border: "1px solid #e0fdf0",
  },
  successIcon: {
    fontSize: "60px",
    marginBottom: "20px",
  },
  successTitle: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#1a1a2e",
    marginBottom: "12px",
  },
  successText: {
    color: "#666",
    fontSize: "16px",
  },
};

export default Contact;
