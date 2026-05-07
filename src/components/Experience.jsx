import { motion } from 'framer-motion';
import { experience } from '../data/content';
import styles from './Section.module.css';
import eStyles from './Experience.module.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const row = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className={styles.section}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className={styles.grid}>
        <h2 className={styles.label}>Experience</h2>
        <div className={eStyles.timeline}>
          {experience.map(e => (
            <motion.div key={e.title} className={eStyles.item} variants={row}>
              <div className={eStyles.period}>{e.period}</div>
              <div>
                <strong className={eStyles.title}>{e.title}</strong>
                <span className={eStyles.desc}>{e.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
