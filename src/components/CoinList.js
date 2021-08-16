import React, { useEffect, useState, useContext } from 'react';
import coinGecko from '../apis/coinGecko';
import {WatchListContext} from '../context/WatchListContext';
import Coin from './Coin';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const {watchList, deleteCoin} = useContext(WatchListContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(",")
        }
      })

      setCoins(response.data)
      setLoading(false)
    }
    if (watchList.length > 0) {
      fetchData();
    } else {
      setCoins([])
    }

  }, [watchList])

  const renderCoins = () => {
    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <ul className="coinlist list-group mt-2">
        {coins.map(coin => {
          return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin}/>
        })}
      </ul>
    )
  }

  return (
    <div>
      {renderCoins()}
    </div>
  )
}

export default CoinList
