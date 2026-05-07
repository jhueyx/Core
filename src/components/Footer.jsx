import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.row}>
          <span>© {new Date().getFullYear()} Jason Huey</span>
          <span>No trackers. No analytics. Static by design.</span>
        </div>
      </div>
    </footer>
  );
}
