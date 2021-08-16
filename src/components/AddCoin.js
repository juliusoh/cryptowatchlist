import React, { useState } from "react";
import { useContext } from "react";
import { WatchListContext } from "../context/WatchListContext";

const AddCoin = () => {
  const [active, setActive] = useState(false);

  const { addCoin } = useContext(WatchListContext);

  const avaliableCoins = [
    "bitcoin",
    "ethereum",
    "dogecoin",
    "ripple",
    "polkadot",
    "uniswap",
    "solana",
    "chainlink",
    "tether",
    "algorand",
    "bitcoin-cash",
    "litecoin",
    "eos",
    "okb",
    "tezos",
    "cardano",
  ];

  const handleClick = (coin) => {
    addCoin(coin);
    setActive(false);
  }

  return (
    <div className="dropdown">
      <button
        onClick={() => setActive(!active)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <div className={active ? "dropdown-menu show" : "dropdown-menu"}>
        {avaliableCoins.map((coin) => {
          return <a onClick={() => handleClick(coin)} href="#" className="dropdown-item">{coin}</a>;
        })}
      </div>
    </div>
  );
};

export default AddCoin;
