import React from "react";
import Text from "../../components/common/Text";
import ProductSection from "./ProductSection/ProductSection";

const Products = () => {
  return (
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
  );
};

export default Products;
