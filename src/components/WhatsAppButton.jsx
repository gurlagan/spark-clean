import { motion } from "framer-motion";

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/17805550123"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        style={styles.pulse}
        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span style={styles.icon}>💬</span>
    </motion.a>
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "#25d366",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
    textDecoration: "none",
  },
  pulse: {
    position: "absolute",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#25d366",
    zIndex: -1,
  },
  icon: {
    fontSize: "28px",
  },
};

export default WhatsAppButton;
