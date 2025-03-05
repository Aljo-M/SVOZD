import React from "react";
import styles from "./page.module.scss";

export default function SinglePostPage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>SVOZD</div>
        <nav className={styles.nav}>
          <a href="/obvestila">Obvestila</a>
          <a href="/pravna-podlaga">Pravna podlaga</a>
          <a href="/zaupnik">Zaupnik</a>
          <a href="/kontakt">Kontakt</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Sindikat varnosti, obrambe, zaščite in družine</h1>
          <p>Zastopamo interese delavcev Ministrstva za obrambo</p>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.main}>
        <article className={styles.article}>
          <h2 className={styles.title}>
            Javno pismo sindikatov s področja varnosti in obrambe
          </h2>
          <p className={styles.date}>14. junij 2024</p>
          <div className={styles.postContent}>
            <p>
              Sindikat s področja varnosti in obrambe je dne 13. 6. 2024
              medijsko objavil javno pismo za rešitev ...
            </p>
            <p>Vsebinsko se pismo nanaša na ...</p>
            <p>
              <strong>Ključne točke:</strong>
            </p>
            <ul>
              <li>Izboljšanje pogojev za zaposlene</li>
              <li>Prilagoditev plačnega sistema</li>
              <li>Usklajevanje delovnega časa</li>
            </ul>
            <p>
              Za več informacij se obrnite na sindikalne predstavnike ali nam
              pišite na svozd.predsednik@gmail.com.
            </p>
          </div>
        </article>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.contactCard}>
            <h3>Kontaktni podatki</h3>
            <p>
              <strong>Naslov:</strong> Vojkova cesta 55, 1000 Ljubljana
            </p>
            <p>
              <strong>E-mail:</strong> svozd.predsednik@gmail.com
            </p>
            <p>
              <strong>Uradne ure:</strong> 09:00 – 13:00
            </p>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 SVOZD. Vse pravice pridržane.</p>
      </footer>
    </div>
  );
}
