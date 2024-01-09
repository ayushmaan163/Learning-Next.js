"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">Go to Home Page</Link>
      <br />
      <button onClick={() => router.push("/")}>Go to Home Page</button>
      <br />
      <Link href="/about/aboutStudent">About Student</Link>
      <br />
      <Link href="/about/aboutCollege">About College</Link>
    </div>
  );
};

export default About;
