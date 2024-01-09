"use client";
import { useRouter } from "next/navigation";

const LoginStudent = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Login Page for Student</h1>
      <br />
      <br />
      <button onClick={() => router.push("/login")}>Go to Login Page</button>
      <br />
      <br />
      <button onClick={() => router.push("/")}>Go to Home Page</button>
    </div>
  );
};

export default LoginStudent;
