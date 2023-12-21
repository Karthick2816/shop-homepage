import React, { useState } from "react";
import Card from "./components/Card";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  let details = [
    {
      product: "Fancy product",
      isFancyProduct: true,
      options: "view options",
      price: "$40.00-$80.00",
    },
    ,
    {
      product: "Special Item",
      options: "Add to Cart",
      price: "$18.00",
      isSale: true,
      isReview: true,
    },
    {
      product: "Sale item",
      options: "Add to Cart",
      price: "$25.00",
      isSale: true,
    },
    {
      product: "Popular item",
      options: "Add to Cart",
      price: "$40.00",
      isReview: true,
    },
    {
      product: "sale item",
      options: "view options",
      price: "$25.00",
      isSale: true,
    },
    {
      product: "Fancy product",
      isFancyProduct: true,
      options: "Add to Cart",
      price: "$40.00-$80.00",
    },
    {
      product: "Special item",
      options: "Add to Carts",
      price: "$40.00-$80.00",
      isSale: true,
      isReview: true,
    },
    {
      product: "Poular item",
      options: "Add to Cart",
      price: "$40.00-$80.00",
      isReview: true,
    },
  ];
  let [cart, setCart] = useState(0);
  return (
    <>
      <TopBar cart={cart} setCart={setCart} />
      <Header></Header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {details.map((e, i) => {
              return <Card cart={cart} setCart={setCart} details={e} key={i} />;
            })}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
