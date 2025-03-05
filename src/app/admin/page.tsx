// app/admin/page.tsx
"use client";
import { useState } from "react";
import styles from "./page.module.scss";

export default function AdminDashboard() {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add post submission logic here
  };

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <h2>SVOZD Admin</h2>
        <nav className={styles.navMenu}>
          <button className={styles.navItem}>Nova objava</button>
          <button className={styles.navItem}>Urejaj objave</button>
          <button className={styles.navItem}>Statistika</button>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        <h1>Ustvari novo objavo</h1>

        <form onSubmit={handleSubmit} className={styles.postForm}>
          <div className={styles.formGroup}>
            <label>Naslov</label>
            <input
              type="text"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Datum</label>
            <input
              type="date"
              value={postData.date}
              onChange={(e) =>
                setPostData({ ...postData, date: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Vsebina</label>
            <textarea
              value={postData.content}
              onChange={(e) =>
                setPostData({ ...postData, content: e.target.value })
              }
              rows={8}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Objavi
          </button>
        </form>
      </main>
    </div>
  );
}
