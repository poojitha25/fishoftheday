import React, { useState } from 'react';

import FishForm from '../organisms/FishForm';

/**
 * @function
 * @desc Inventory Component
 * @param {object} props 
*/
const Inventory = (props) => {
    const [fold, setFold] = useState(false);
    const [newFish, setNewFish] = useState([]);
    const [isNewFish, setIsNewFish] = useState(false);
    const [error, setError] = useState(false);

    /**
     * @function
     * @desc handle fold and unfold on click of fold and unfold buttons
    */
    const handleFold = () => {
        setFold(!fold);
        if (fold) {
            props.unfold();
        }
        else {
            props.fold();
        }
    }
    /**
     * @function
     * @desc handle change of all the input fields
     * @param {object} e
     * @param {String} fieldName 
    */
    const handleChange = (e, fieldName) => {
        let newFishData = newFish;

        switch (fieldName) {
            case 'name':
                newFishData[0].name = e.target.value;
                break;
            case 'description':
                newFishData[0].description = e.target.value;
                break;
            case 'price':
                newFishData[0].price = e.target.value;
                break;
            case 'option':
                newFishData[0].status = e;
                break;
            case 'file':
                newFishData[0].imagePath = e;
                break;
            default:
                break;
        }
        setNewFish(newFishData);
    }

    /**
     * @function
     * @desc handle add fish 
    */
    const addFish = () => {
        let newFishData = [{
            "id": '',
            "name": '',
            "price": '',
            "options": ['fresh', 'sold out'],
            "status": 'fresh',
            "description": '',
            "imagePath": ''
        }];
        setNewFish(newFishData);
        setIsNewFish(true);
    }

    /**
     * @function
     * @desc handle remove fish
    */
    const removeNewFish = () => {
        setError(false);
        setNewFish([]);
    }

    /**
     * @function
     * @desc handle save fish by validating the input fields
    */
    const saveFish = () => {
        let newFishData = newFish;

        if (newFishData[0].name === '' && newFishData[0].price === '' && newFishData[0].description === '' && newFishData[0].imagePath === '') {
            setError(true);
        }
        else {
            setError(false);
            props.updateInventory(newFishData);
            setNewFish([]);
            setIsNewFish(false);
        }
    }

    return (
        <div className='py-5'>
            <div className='flex justify-between items-center'>
                <div className='tile w-16' title={fold ? 'unfold' : 'fold'} onClick={() => handleFold()}></div>
                <h1 className='uppercase text-2xl font-phosphate-inline text-center'>
                    <span className='flaticon-fish mirror mr-5'></span>
                    inventory
                    <span className='flaticon-home ml-5'></span>
                </h1>
                <div className='tile-reverse w-20' title='logout' onClick={() => props.logout()}></div>
            </div>
            <div className='flex justify-between items-center border-theme-red border-t-2 mx-3 pt-6 mt-5'>
                <div className='tile w-64 left-12' title='load sample fishes' onClick={() => props.onClickLoadFishes()}></div>
                <div className='tile-reverse w-48 right-12' title='add fish' onClick={() => addFish()}></div>
            </div>
            <h3 className={`text-lg text-center font-bold text-red-600 mt-4 ${props.noDataError ? '' : 'hidden'}`}>No data in the inventory, please add data...</h3>
            <div className='px-3 py-6'>
                {isNewFish && newFish.length > 0 &&
                    <FishForm
                        isNewFish={isNewFish}
                        inventoryData={newFish[0]}
                        saveFish={saveFish}
                        handleChange={(e, fieldValue) => handleChange(e, fieldValue)}
                        removeNewFish={removeNewFish}
                        error={error}
                    />}

                {props.storeData &&
                    props.storeData.inventory &&
                    props.storeData.inventory.map((data, index) =>
                        <FishForm
                            inventoryData={data}
                            key={index}
                            handleChange={(e, fieldValue, id) => props.handleChange(e, fieldValue, id)}
                            removeFish={(id) => props.removeFish(id)}
                        />)
                }
            </div>
        </div>
    )
}

export default Inventory;