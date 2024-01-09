import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentList/1">Peter</Link>
        </li>
        <li>
          <Link href="/studentList/2">Tony</Link>
        </li>
        <li>
          <Link href="/studentList/3">Steve</Link>
        </li>
        <li>
          <Link href="/studentList/4">Bruce</Link>
        </li>
      </ul>
    </div>
  );
}
