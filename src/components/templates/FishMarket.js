import React from 'react';

import FishCard from '../organisms/FishCard';

/**
 * @function
 * @desc Fish Market Component
 * @param {object} props 
*/
const FishMarket = (props) => {
    return (
        <div className='px-3 py-5'>
            <div className='font-archistico-bold'>
                <h1 className='flex justify-center uppercase text-7xl text-theme-red leading-tight'>
                    fish
                    <span className='flex justify-center items-center w-32 uppercase text-3xl px-4 text-green-500 text-center'>of the</span>
                    day
                </h1>
                <h2 className='uppercase text-xl font-phosphate-inline text-center tracking-huge'>
                    <span className='flaticon-fish mirror mr-3'></span>
                    a fresh seafood market
                    <span className='flaticon-fish'></span>
                </h2>
            </div>
            <h3 className={`text-lg text-center font-bold text-red-600 mt-4 ${props.noDataError ? '' : 'hidden'}`}>No data in the market, please add data...</h3>
            {props.storeData &&
                props.storeData.inventory &&
                props.storeData.inventory.map((data, index) =>
                    <FishCard
                        inventoryData={data}
                        key={index}
                        handleOrder={(id, quantity) => props.handleOrder(id, quantity)}
                    />)
            }
        </div>
    )
}

export default FishMarket;