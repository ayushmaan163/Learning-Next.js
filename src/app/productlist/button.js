"use client";

export default function Button({ price }) {
  return (
    <div>
      <button onClick={() => alert("$" + price)}>Check Price</button>
    </div>
  );
}
