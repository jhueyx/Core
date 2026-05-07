import { motion } from 'framer-motion';
import { skills } from '../data/content';
import styles from './Section.module.css';
import sStyles from './Skills.module.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className={styles.section}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className={styles.grid}>
        <h2 className={styles.label}>Skills</h2>
        <div className={sStyles.grid}>
          {skills.map(group => (
            <motion.div key={group.category} className={sStyles.group} variants={item}>
              <h3 className={sStyles.category}>{group.category}</h3>
              <div className={sStyles.pills}>
                {group.items.map(skill => (
                  <span key={skill} className={sStyles.pill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
