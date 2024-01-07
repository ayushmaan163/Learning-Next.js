"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("Ayushmaan");

  const alertPrint = () => {
    setName("Ironman");
  };

  return (
    <main className={styles.main}>
      <h1>Events, Function & State {name}</h1>

      <button onClick={alertPrint}>Click Me!!</button>
    </main>
  );
}
