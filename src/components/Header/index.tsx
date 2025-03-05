import Link from "next/link";
import { Menu } from "lucide-react";
import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src="/SVOZD_Logotip.png"
            alt="SVOZD Logo"
            width={200}
            height={50}
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/svozd">SVOZD</Link>
          <Link href="/pravna-podlaga">Pravna podlaga</Link>
          <Link href="/obrazci">Obrazci</Link>
          <Link href="/login">Prijava</Link>
        </nav>
      </div>
    </header>
  );
}
