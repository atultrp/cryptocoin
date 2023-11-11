
import Card from "../components/Card";
import { useEffect, useState } from "react";


export default function Home() {
  const [cryptoData, setCryptoData] = useState([])

  const cryptoApiCall = async () => {
    try {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false")
      const data = await res.json()
      setCryptoData(data)
    }

    catch (err) {
      console.error(err)
    }
  }
  console.log(cryptoData[0])

  useEffect(() => {
    cryptoApiCall()
  }, []);

  return (
    <div>
      <div className="mx-5 my-7 flex flex-wrap justify-center">
        {cryptoData.map((crypto, index) => {
          return (
            <Card key={index} crypto={crypto} />
          )
        })}
      </div>
    </div>
  )
}
