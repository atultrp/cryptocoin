
import Card from "../components/Card";
import { useEffect, useState } from "react";


export default function Home() {
  const [cryptoData, setCryptoData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const cryptoApiCall = async () => {
    try {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false")
      const data = await res.json()
      setCryptoData(data)
      setFilteredData(data)
    }

    catch (err) {
      console.error(err)
    }
  }
  console.log(cryptoData[0])

  useEffect(() => {
    cryptoApiCall()
  }, []);

  const handleSearch = (searchTxt) => {
    const tempFilteredData = cryptoData.filter((crypto) => {
      return crypto.name.toLowerCase().includes(searchTxt.toLowerCase())
    })
    setFilteredData(tempFilteredData)
  }

  return (
    <div>
      <div className="flex justify-center mt-6">
        <input
          type="search"
          placeholder="Search Cryptocurrency..."
          className="w-full mx-10 md:w-1/3 rounded-md border-2 border-gray-500 px-3 py-2 focus:ring-0 focus:outline-none"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="mx-5 my-7 flex flex-wrap justify-center">
        {filteredData.map((crypto, index) => {
          return (
            <Card key={index} crypto={crypto} />
          )
        })}
      </div>
    </div>
  )
}
