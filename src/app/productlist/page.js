// Function to call the API
async function productList() {
  const data = await fetch("https://dummyjson.com/products");
  const json = await data.json();
  return json.products;
}

export default async function ProductPage() {
  const products = await productList();
  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <h4>Name: {item.title}</h4>
      ))}
    </div>
  );
}
