import React from 'react';

/**
 * @function
 * @desc Reusable Counter Component
 * @param {object} props 
*/
const Counters = (props) => {
    return (
        <div className='flex items-center'>
            <span
                className={`${props.status === 'sold out' ? 'cursor-not-allowed' : 'cursor-pointer'} ${props.quantity === 0 ? 'cursor-not-allowed' : ''} flaticon-minus focus:outline-none font-bold`}
                onClick={(e) => props.decreaseQuantity(e)}>
            </span>
            <p className='text-2xl px-5 font-proxima-nova font-bold'>{props.quantity}</p>
            <span
                className={`${props.status === 'sold out' ? 'cursor-not-allowed' : 'cursor-pointer'} flaticon-add focus:outline-none font-bold`}
                onClick={(e) => props.increaseQuantity(e)}>
            </span>
        </div>
    )
}

export default Counters;