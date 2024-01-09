import Link from "next/link";

const AboutStudent = () => {
  return (
    <div>
      <h1>About Student Page</h1>
      <br />
      <Link href="/about"> Go to About Page</Link>
      <br />
      <Link href="/"> Go to Home Page</Link>
    </div>
  );
};

export default AboutStudent;
