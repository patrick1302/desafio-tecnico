import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import "./style.css";
import { Main, Container, Menu, Button, Product, ProductCard } from "./style";

import Cart from "../../components/Cart";
import Card from "../../components/Card";
import Search from "../../components/Search";

import CartProvider from "../../context/CartContext";
import SearchProvider from "../../context/SearchContext";

function Store() {
  return (
    <Router>
      <Switch>
        <Main>
          <SearchProvider>
            <Search />
            <Container>
              <CartProvider>
                <Product>
                  <Menu>
                    <Button>
                      <NavLink
                        exact
                        to="/"
                        className="main-nav"
                        activeClassName="main-nav-active"
                      >
                        Pokémon normal e elétrico
                      </NavLink>
                    </Button>
                    <Button>
                      <NavLink
                        exact
                        to="/store"
                        className="main-nav"
                        activeClassName="main-nav-active"
                      >
                        Pokémon gelo e de fogo
                      </NavLink>
                    </Button>
                  </Menu>
                  <ProductCard>
                    <Route exact={true} path="/">
                      <Card firstUrl="/type/1" secondUrl="/type/13" />
                    </Route>
                    <Route exact={true} path="/store">
                      <Card firstUrl="/type/10" secondUrl="/type/15" />
                    </Route>
                  </ProductCard>
                </Product>
                <Cart />
              </CartProvider>
            </Container>
          </SearchProvider>
        </Main>
      </Switch>
    </Router>
  );
}

export default Store;
