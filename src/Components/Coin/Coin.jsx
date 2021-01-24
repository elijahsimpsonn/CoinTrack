import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="coin-container">
      <div className="row coin-row">
        <div className="col-md-3 coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <p className="col-md-2 coin-price">${price}</p>
        <p className="col-md-2 coin-volume">${volume.toLocaleString()}</p>
        {priceChange < 0 ? (
          <p className="col-md-1 coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="col-md-1 coin-percent green">
            {priceChange.toFixed(2)}%
          </p>
        )}
        <p className="col-md-4 coin-marketcap">
          Market Cap: ${marketCap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Coin;
