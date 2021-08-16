import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinData from "../components/CoinData";
import HistoryChart from "../components/HistoryChart";
import coinGecko from "../apis/coinGecko";

const CoinDetailScreen = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(false);

  const formatData = data => {
    return data.map(el => {
      return {
        t: el[0],
        y: el[1].toFixed(2)
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const [day, week, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),

        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),

        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),

        coinGecko.get("/coins/markets", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
      ]);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
      setLoading(false)
    };
    fetchData();
  }, []);

  const renderData = () => {
    if (loading) {
      <div>Loading...</div>
    }
    return (
      <div className="coinlist">
        <HistoryChart data={coinData} />
        <CoinData />
      </div>
    );
  };

  return renderData();
};

export default CoinDetailScreen;
