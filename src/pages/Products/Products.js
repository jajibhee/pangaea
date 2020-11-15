import React, { useContext } from "react";
import Text from "../../components/common/Text";
import ProductSection from "./ProductSection/ProductSection";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Cart from "../../components/Cart/Cart";
import ProductContext from "../../components/contexts/ProductContext";

const Products = () => {
  const { cart } = useContext(ProductContext);
  return (
    <Query
      query={gql`
        {
          currency
          products {
            id
            title
            image_url
            product_options {
              title
              prefix
              suffix
              options {
                id
                value
              }
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        return (
          <div>
            <Cart open={cart} />

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
      }}
    </Query>
  );
};

export default Products;
