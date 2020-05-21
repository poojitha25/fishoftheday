import React, { useState } from 'react';

/**
 * @function
 * @desc Store Picker Component
 * @param {object} props 
*/
const StorePicker = (props) => {
    const [storeName, setStorename] = useState('');
    const [error, setError] = useState(false);

    /**
     * @function
     * @desc handle login on click of button
    */
    const handleLogInOnClick = () => {
        if (storeName.length > 0) {
            setError(false);
            props.history.push(`/store/${storeName}`);
        }
        else {
            setError(true);
        }
    }

    /**
     * @function
     * @desc handle login on press of enter 
     * @param {object} e 
    */
    const handleLogInOnEnter = (e) => {
        if (e.keyCode === 13) {
            if (storeName.length > 0) {
                setError(false);
                props.history.push(`/store/${storeName}`);
            }
            else {
                setError(true);
            }
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen store-bg'>
            <div className='w-1/3 flex flex-wrap flex-col justify-center items-center rounded-large border border-gray-800 bg-gray-200 px-4 py-6'>
                <h2 className='text-2xl uppercase font-medium mb-2'>please enter a store name</h2>
                <label className='mb-3 w-2/3'>
                    <input
                        type='text'
                        value={storeName}
                        onChange={(e) => setStorename(e.target.value)}
                        placeholder='STORE NAME'
                        className='border rounded-large px-6 py-3 w-full focus:outline-none'
                        onKeyDown={(e) => handleLogInOnEnter(e)}
                    />
                </label>
                <span className={`${error ? '' : 'hidden'} text-red-600 text-left mb-3`}>Please enter the store name</span>
                <img
                    src='assets/images/next.png'
                    alt='next'
                    className='cursor-pointer w-10'
                    onClick={() => handleLogInOnClick()}
                />
            </div>
        </div>
    )
}

export default StorePicker;