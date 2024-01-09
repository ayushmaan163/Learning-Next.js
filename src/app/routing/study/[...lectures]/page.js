"use client";

export default function Lectures({ params }) {
  console.log(params);
  return (
    <div>
      {/* <h1>{params.lectures[0]}</h1> */}
      <h1>Day of College - {params.lectures[1]}</h1>
      <h1>Lecture Number - {params.lectures[2]}</h1>
    </div>
  );
}
