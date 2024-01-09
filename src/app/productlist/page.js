"use client";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    console.log(json.products);
    setData(json.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {data.map((item) => (
        <h4>
          {item.id}. {item.title} - ${item.price}
        </h4>
      ))}
    </div>
  );
}
