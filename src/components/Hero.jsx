import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { roles } from '../data/content';
import styles from './Hero.module.css';

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % roles.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.hero} aria-label="Introduction" id="top">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Risk · Analytics · Systems
        </div>

        <h1 className={styles.name}>Jason Huey</h1>

        <div className={styles.roleWrap} aria-live="polite" aria-atomic="true">
          <span
            className={styles.role}
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)' }}
          >
            {roles[roleIdx]}
          </span>
        </div>

        <p className={styles.summary}>
          Designing operational systems, analytical workflows, and modern risk infrastructure.
        </p>

        <div className={styles.actions}>
          <a className={`${styles.btn} ${styles.primary}`} href="https://www.linkedin.com/in/jhueyx/" rel="me noopener" target="_blank">
            LinkedIn
          </a>
          <a className={styles.btn} href="https://github.com/jhueyx" rel="me noopener" target="_blank">
            GitHub
          </a>
          <a className={styles.btn} href="#contact">Contact</a>
        </div>
      </motion.div>
    </section>
  );
}
