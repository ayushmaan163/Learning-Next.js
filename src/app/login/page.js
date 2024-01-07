"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Login Page</h1>
      <br />
      <Link href="/">Go to Home Page</Link>
      <br />
      <button onClick={() => router.push("/")}>Go to Home Page</button>
      <br />
      <br />
      <button onClick={() => router.push("/login/loginStudent")}>
        Student Login
      </button>
    </div>
  );
};

export default Login;
