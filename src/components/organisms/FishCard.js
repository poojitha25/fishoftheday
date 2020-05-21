import React, { useState } from 'react';

import Button from '../atoms/Button';
import Counters from '../atoms/Counters';

/**
 * @function
 * @desc Reusable Fish Card Component
 * @param {object} props 
*/
const FishCard = (props) => {
    const [quantity, setQuantity] = useState(0);
    const [orderError, setOrderError] = useState(false);

    /**
     * @function
     * @desc increase the quantity on click of plus icon
    */
    const increaseQuantity = () => {
        if (props.inventoryData.status === 'sold out') {
            return;
        }
        setQuantity(quantity + 1);
        setOrderError(false);
    }

    /**
    * @function
    * @desc decrease the quantity on click of minus icon
   */
    const decreaseQuantity = () => {
        if (props.inventoryData.status === 'sold out') {
            return;
        }
        if (quantity === 0) {
            return;
        } else {
            setQuantity(quantity - 1);
        }
    }

    /**
    * @function
    * @desc handle order on click of order button
   */
    const handleOrder = () => {
        if (props.inventoryData.status === 'sold out') {
            return;
        }
        if (quantity > 0) {
            if (props.handleOrder) {
                props.handleOrder(props.inventoryData.id, quantity);
                setQuantity(0);
            }
        }
        else {
            setOrderError(true);
        }
    }

    return (
        <div className={`mb-3 mt-12 rounded-large border ${props.inventoryData && props.inventoryData.status === 'sold out' ? 'sold-out-bg' : ''}`}>
            <div className={`p-2 ${props.inventoryData && props.inventoryData.status === 'sold out' ? 'opacity-25 cursor-not-allowed' : ''}`}>
                <div className='relative'>
                    <img src='assets/images/fish-icon.png' alt='fish' className='fish-position' />
                    <p className='text-position text-white text-sm font-bold font-proxima-nova-alt'>${Number(props.inventoryData && props.inventoryData.price).toFixed(2)}</p>
                </div>
                <div className='flex'>
                    <img src={`assets/images/${props.inventoryData && props.inventoryData.imagePath}`} alt='fish' className='w-40 h-40 z-no rounded-large border-2 border-dotted border-black' />
                    <div className='w-full flex flex-col justify-between px-3 px-3'>
                        <div className=''>
                            <h3 className='font-carrinady font-bold uppercase text-4xl break-all'>{props.inventoryData && props.inventoryData.name}</h3>
                            <p className='font-proxima-nova font-medium text-lg'>{props.inventoryData && props.inventoryData.description}</p>
                        </div>
                        <div className='flex justify-end items-center'>
                            {orderError && <p className='text-red-600 text-sm font-medium pr-4'>Please increase the quantity.</p>}
                            <Counters
                                quantity={quantity}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                status={props.inventoryData && props.inventoryData.status}
                            />
                            <Button
                                text='order'
                                styleClasses={`bg-black text-lg ml-4 font-proxima-nova-alt ${props.inventoryData && props.inventoryData.status === 'sold out' ? 'cursor-not-allowed' : ''}`}
                                onClick={() => handleOrder()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FishCard;