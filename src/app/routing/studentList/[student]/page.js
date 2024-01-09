export default function Student({ params }) {
  return (
    <div>
      <h1>Student Details</h1>
      <h1>Student ID: {params.student}</h1>
    </div>
  );
}
