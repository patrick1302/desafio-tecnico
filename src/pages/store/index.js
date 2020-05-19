import React, { useState, useEffect } from "react";
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

import CartContext from "../../context/cartContext";

function Store() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getSummaryCart = localStorage.getItem("compras");
    const parse = JSON.parse(getSummaryCart) ? JSON.parse(getSummaryCart) : [];
    setCart(parse);
  }, []);

  const filteredPokemon = pokemon.filter((pokemon) =>
    pokemon.pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Router>
      <Switch>
        <Main>
          <Search setSearch={setSearch} />
          <Container>
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
                  <Card
                    filteredPokemon={filteredPokemon}
                    cart={cart}
                    setCart={setCart}
                    setPokemon={setPokemon}
                    firstUrl="/type/1"
                    secondUrl="/type/13"
                  />
                </Route>
                <Route exact={true} path="/store">
                  <Card
                    filteredPokemon={filteredPokemon}
                    cart={cart}
                    setCart={setCart}
                    setPokemon={setPokemon}
                    firstUrl="/type/10"
                    secondUrl="/type/15"
                  />
                </Route>
              </ProductCard>
            </Product>
            <CartContext.Provider value={setCart}>
              <Cart cart={cart} />
            </CartContext.Provider>
          </Container>
        </Main>
      </Switch>
    </Router>
  );
}

export default Store;
