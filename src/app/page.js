"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Fetching API from Client Component</h1>
      <Link href="/productlist">Go to Product List</Link>
    </main>
  );
}
