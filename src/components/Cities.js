

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./product";

import { productData, responsive } from "./data";

export default function Cities() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="container py-5 my-5">
      <h1 className="text-center">Cities Associated with</h1>
      <Carousel showDots={true} responsive={responsive} className="my-3">
        {product}
      </Carousel>
    </div>
  );
}






