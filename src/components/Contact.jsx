import { motion } from 'framer-motion';
import styles from './Section.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className={styles.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className={styles.grid}>
        <h2 className={styles.label}>Contact</h2>
        <p className={styles.copy}>
          For professional context, connect on{' '}
          <a href="https://www.linkedin.com/in/jhueyx/" target="_blank" rel="me noopener">LinkedIn</a>
          {' '}or review public work on{' '}
          <a href="https://github.com/jhueyx" target="_blank" rel="me noopener">GitHub</a>.
        </p>
      </div>
    </motion.section>
  );
}
