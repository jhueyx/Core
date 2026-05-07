import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <div className="wrap">
        <nav className={styles.nav} aria-label="Primary navigation">
          <div className={styles.right}>
            <div className={`${styles.links} hide-mobile`}>
              {links.map(l => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </div>

            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className={styles.mobileMenu}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
