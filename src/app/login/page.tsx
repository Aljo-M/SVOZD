import React from "react";
import styles from "./page.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>SVOZD</h1>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Main Content / Login Form */}
      <main className={styles.main}>
        <div className={styles.formWrapper}>
          <h2>Login</h2>
          <form>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </main>
    </div>
  );
}
