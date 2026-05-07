import { motion } from 'framer-motion';
import { projects } from '../data/content';
import styles from './Section.module.css';
import pStyles from './Projects.module.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className={styles.section}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className={styles.grid}>
        <h2 className={styles.label}>Projects</h2>
        <div className={pStyles.grid}>
          {projects.map(p => (
            <motion.article key={p.id} className={pStyles.card} variants={card}>
              <h3 className={pStyles.title}>{p.name}</h3>
              <p className={pStyles.desc}>{p.desc}</p>
              <div className={pStyles.tags}>
                {p.tags.map(t => <span key={t} className={pStyles.tag}>{t}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
