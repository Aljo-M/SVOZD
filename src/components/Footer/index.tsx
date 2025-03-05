import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>O nas</h3>
          <ul>
            <li><Link href="/svozd">O SVOZD</Link></li>
            <li><Link href="/pravna-podlaga">Pravna podlaga</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Kontakt</h3>
          <ul>
            <li>Vojkova cesta 55</li>
            <li>1000 Ljubljana</li>
            <li>Tel: 040 821 596</li>
            <li>E-pošta: svozd.predsednik@gmail.com</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Uradne ure</h3>
          <ul>
            <li>Po predhodnem dogovoru</li>
            <li>Lokacija: Gimnazija, soba E2</li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        © {currentYear} SVOZD - Sindikat varnosti, obrambe, zaščite in družine. Vse pravice pridržane.
      </div>
    </footer>
  );
}