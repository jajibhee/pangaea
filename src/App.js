import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/app.scss";
import Products from "./pages/Products/Products";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ProductProvider from "./components/contexts/ProductProvider";

function App() {
  const client = new ApolloClient({
    uri: "https://pangaea-interviews.now.sh/api/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <ProductProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Products} />
          </Switch>
        </Router>
      </ProductProvider>
    </ApolloProvider>
  );
}

export default App;
