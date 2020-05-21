import React from 'react';

/**
 * @function
 * @desc Reusable Cart Item
 * @param {object} props 
*/
const CartItem = (props) => {
    return (
        <>
            {props.cartData.name &&
                <div className='border-b border-dotted border-gray-400 py-2 font-proxima-nova'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <p className='capitalize font-medium text-base'>{props.cartData.name}</p>
                            <p className='font-medium text-base'>( {props.cartData.quantity} {props.cartData.quantity > 1 ? 'pounds' : 'pound'} )</p>
                        </div>
                        <p className='font-bold text-base'>${Number(props.cartData.price).toFixed(2)}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default CartItem;