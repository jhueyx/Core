import { motion } from 'framer-motion';
import styles from './Section.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <div className={styles.grid}>
        <h2 className={styles.label}>About</h2>
        <p className={styles.copy}>
          Bay Area–based risk and operations professional with experience spanning financial services,
          marketplace trust & safety, fraud strategy, and risk analytics. My work has focused on
          designing scalable operational programs, analytical workflows, and decision-support systems
          across fintech and platform ecosystems.
        </p>
      </div>
    </motion.section>
  );
}
