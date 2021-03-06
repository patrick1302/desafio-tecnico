import React, { useState, useEffect, useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { SearchContext } from "../../context/SearchContext";

import "./style.css";

import api from "../../services/api";

import PokemonImg from "../../assets/Pokemon.png";

const Card = ({ firstUrl, secondUrl }) => {
  const [pokemon, setPokemon] = useState([]);

  const { cart, setCart } = useContext(CartContext);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const pokemonTypeOne = await api.get(firstUrl);
        const pokemonTypeTwo = await api.get(secondUrl);

        const pokemon = [
          ...pokemonTypeOne.data.pokemon,
          ...pokemonTypeTwo.data.pokemon,
        ];

        //set pokemon price
        pokemon.map(
          (item) =>
            (item.pokemon.price = parseFloat((Math.random() * 100).toFixed(2)))
        );
        setPokemon(pokemon);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPokemon();
  }, []);

  // search pokemon by name
  const filteredPokemon = pokemon.filter((pokemon) =>
    pokemon.pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const addPokemonToCart = (image, name, price) => {
    const getSummaryCart = localStorage.getItem("compras");
    const parse = JSON.parse(getSummaryCart) ? JSON.parse(getSummaryCart) : [];

    setCart([...parse, { id: Date.now(), image, name, price }]);
    localStorage.setItem(
      "compras",
      JSON.stringify([...cart, { id: Date.now(), image, name, price }])
    );
  };

  if (filteredPokemon.length === 0) {
    return <h2>Não existe nenhum pokemon com esse nome</h2>;
  }

  return filteredPokemon.map(({ pokemon }, index) => (
    <section key={index}>
      <div className="content-img">
        <img src={PokemonImg} alt="Pokemon" width="80" height="80" />
      </div>

      <span className="item-name">{pokemon.name}</span>
      <span>
        <strong>R$ {pokemon.price}</strong>
      </span>
      <button
        onClick={() =>
          addPokemonToCart(PokemonImg, pokemon.name, pokemon.price)
        }
      >
        Adicionar ao carrinho
      </button>
    </section>
  ));
};
export default Card;
