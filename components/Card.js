import React from 'react'

const card = ({ crypto }) => {

  let commonStyleData = [
    {
      title: 'Market Cap',
      value: crypto?.market_cap?.toLocaleString()
    },
    {
      title: 'Total Volume',
      value: crypto?.total_volume?.toLocaleString()
    },
    {
      title: 'High 24h',
      value: crypto?.high_24h
    },
    {
      title: 'Low 24h',
      value: crypto?.low_24h
    }
  ]

  return (
    <div className='mx-5 my-5 w-72 px-5 py-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
      <div className='flex flex-col items-center'>
        <img src={crypto?.image} alt={crypto?.name} className='w-20' />
        <div className='flex space-x-2 mt-2'>
          <h2 className='font-bold text-xl '>{crypto?.name}</h2>
          <p className='uppercase text-sm font-semibold text-gray-600'>{crypto?.symbol}</p>
        </div>
      </div>
      <div className='flex ml-3 space-x-3 my-3 justify-center items-center'>
        <p>${crypto?.current_price?.toLocaleString()}</p>
        <p className={`${crypto?.price_change_percentage_24h > 0 ? "bg-green-400" : "bg-red-400"} w-fit px-3 py-0.5 rounded-full text-sm`}>{crypto?.price_change_percentage_24h.toFixed(2)}%</p>
      </div>

      {commonStyleData?.map((data, index) => {
        return (
          <div key={index} className={`flex space-x-2 text-sm items-center ${commonStyleData?.length - 1 !== index && "mb-3"}`}>
            <p className='bg-gray-100 w-fit rounded-full px-3 py-1'>{data.title}</p>
            <p className=''>
              ${data.value}
            </p>
          </div>
        )
      })}

    </div>
  )
}

export default card