import React from 'react';

import CartItem from '../atoms/CartItem';

/**
 * @function
 * @desc Cart Component
 * @param {object} props 
*/
const Cart = (props) => {
    /**
    * @function
    * @description Calculate total amount of the Cart.
    */
    const totalPrice = () => {
        let total = 0;
        if (props.storeData.cart && props.storeData.cart.length !== 0) {
            props.storeData.cart.forEach((item) => {
                total = total + Number(item.price);
            });
        }
        return total.toFixed(2);
    }

    return (
        <div className='px-3 pt-5'>
            <div className='border-theme-red border-b-2 pb-5 mb-5'>
                <h1 className='uppercase text-2xl font-phosphate-inline text-center'>
                    <span className='flaticon-fish mirror mr-5'></span>
                    cart
                    <span className='flaticon-shopping-cart ml-5'></span>
                </h1>
            </div>
            <h3 className={`text-lg text-center font-bold text-red-600 mt-4 ${props.noDataError ? '' : 'hidden'}`}>No data in the cart, please add data...</h3>
            <div className='min-height'>
                {props.storeData && props.storeData.cart && props.storeData.cart.map((data, index) =>
                    <CartItem cartData={data} key={index} />)
                }
            </div>
            <div className='flex justify-between border-theme-red border-t-2 py-3'>
                <p className='uppercase text-2xl font-proxima-nova font-bold'>total</p>
                <p className='text-2xl'>${totalPrice()}</p>
            </div>
        </div>
    )
}

export default Cart;