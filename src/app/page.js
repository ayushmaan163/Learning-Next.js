"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = (route) => {
    router.push(route);
  };

  return (
    <main className={styles.main}>
      <h1>Routing</h1>

      {/* Link */}
      <Link href="/login">Go to Login Page</Link>
      <Link href="/about">Go to About Page</Link>

      {/* Navigation */}
      <button onClick={() => navigate("/login")}>Go to Login Page</button>
      <button onClick={() => navigate("/about")}>Go to About Page</button>
    </main>
  );
}
