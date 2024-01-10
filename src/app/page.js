"use client";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Profile from "../../public/vercel.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Image Optimization in Next.js</h2>
      <Image src={Profile} />
      <Image
        src="https://c.wallhere.com/photos/cf/c9/AI_art_gamer_computer_PC_gaming-2211925.jpg!d"
        width={700}
        height={400}
      />
      <br />
      <br />
      <h1>Fetching API in Server Component</h1>
      <Link href="/productlist">Go to Product List</Link>
    </main>
  );
}
