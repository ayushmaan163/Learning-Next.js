import Link from "next/link";

const AboutCollege = () => {
  return (
    <div>
      <h1>About College Page</h1>
      <br />
      <Link href="/about">Go to About Page</Link>
      <br />
      <Link href="/">Go to Home Page</Link>
    </div>
  );
};

export default AboutCollege;
