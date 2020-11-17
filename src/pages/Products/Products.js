import React, { useContext } from "react";
import Text from "../../components/common/Text";
import ProductSection from "./ProductSection/ProductSection";

import Cart from "../../components/Cart/Cart";
import ProductContext from "../../components/contexts/ProductContext";

const Products = () => {
  const { cart, toggleCart } = useContext(ProductContext);

  return (
    <div>
      <Cart open={cart} toggleCart={toggleCart} />

      <section className="products">
        <div className="products-header">
          <div>
            <h4>All Products</h4>
            <Text>A 360° look at Lumin</Text>
          </div>
          <div>
            <select>
              <option style={{ display: "none" }}>Filter by</option>
            </select>
          </div>
        </div>
        <ProductSection />
      </section>
    </div>
  );
};

export default Products;
