"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "100",
  size: "20",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Font Optimization in Next.js</h1>
      <h1 className={roboto.className}>Font with Next.js font feature</h1>

      <br />
      <br />
      <h1>Fetching API in Server Component</h1>
      <Link href="/productlist">Go to Product List</Link>
    </main>
  );
}
