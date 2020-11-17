export const updateTotal = (items) => {
  return items.reduce((acc, curr) => acc + curr.total, 0);
};

export const addToCart = (state, item) => {
  const newCartItem = {
    id: item.id,
    product: item,
    price: item.price,
    quantity: 1,
    total: item.price,
  };

  state.cartItems = [...state.cartItems, newCartItem];
  state.total = updateTotal(state.cartItems);
  return state;
};

export const increaseInCart = (state, item) => {
  state.cartItems = state.cartItems.map((cartItem) => {
    if (cartItem.id !== item.id) {
      return cartItem;
    }
    state.total = updateTotal(state.cartItems);

    return {
      ...cartItem,
      quantity: cartItem.quantity + 1,
      total: (cartItem.quantity + 1) * cartItem.price,
    };
  });
  state.total = updateTotal(state.cartItems);

  return state;
};

export const decreaseInCart = (state, item) => {
  const index = state.cartItems.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (state.cartItems[index].quantity === 1) {
    state.cartItems.splice(index, 1);
    state.total = updateTotal(state.cartItems);
    return state;
  }

  state.cartItems[index].quantity = item.quantity - 1;
  state.cartItems[index].total = item.quantity * item.price;

  state.total = updateTotal(state.cartItems);

  return state;
};

export const updateCurrency = (state, products) => {
  const cartItems = state.cartItems.map((cartItem) => {
    const sourceProduct = products.find(
      (product) => product.id === cartItem.id
    );
    cartItem.price = sourceProduct.price;
    cartItem.total = cartItem.quantity * sourceProduct.price;

    return cartItem;
  });
  state.cartItems = cartItems;
  state.total = updateTotal(cartItems);
  return state;
};
