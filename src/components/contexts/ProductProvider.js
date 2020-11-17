import React, { Fragment, useState, useReducer } from "react";
import ProductContext from "./ProductContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ProductReducer from "./ProductReducer";
import {
  ADD_PRODUCT_TO_CART,
  INCREASE_PRODUCT_QUANTITY_IN_CART,
  DECREASE_PRODUCT_QUANTITY_IN_CART,
  REMOVE_PRODUCT_FROM_CART,
} from "./types";

const ProductProvider = (props) => {
  const initialState = {
    cartItems: [],
    total: 0,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const [cart, setCart] = useState(false);
  const [currency, setCurrency] = useState("");
  const [currentCurrency, setCurrentCurrency] = useState("ALL");
  const [products, setProducts] = useState("");

  return (
    <Query
      query={gql`
        {
          currency
          products {
            id
            title
            image_url
            price(currency: ${currentCurrency})
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
        setCurrency(data && data.currency);
        setProducts(data && data.products);

        const toggleCart = () => {
          setCart(!cart);
        };

        // Add cart
        const addToCart = (item) => {
          setCart(!cart);
          dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: item,
          });
        };

        //Update CartItem
        const increaseQuantity = (item) => {
          dispatch({
            type: INCREASE_PRODUCT_QUANTITY_IN_CART,
            payload: item,
          });
        };

        const decreaseQuantity = (item) => {
          dispatch({
            type: DECREASE_PRODUCT_QUANTITY_IN_CART,
            payload: item,
          });
        };
        const removeItem = (item) => {
          dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            payload: item,
          });
        };

        const contextValues = {
          cart,
          toggleCart,
          products,
          data,
          currency,
          currentCurrency,
          setCurrentCurrency,
          cartItems: state.cartItems,
          cartItem: state.cartItem,
          total: state.total,
          addToCart,
          increaseQuantity,
          decreaseQuantity,
          removeItem,
        };

        return (
          <Fragment>
            <ProductContext.Provider value={contextValues}>
              {props.children}
            </ProductContext.Provider>
          </Fragment>
        );
      }}
    </Query>
  );
};

export default ProductProvider;
