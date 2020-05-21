import React, { useState, useEffect } from 'react';

import Button from '../atoms/Button';
import InputFile from '../atoms/InputFile';

import Dropdown from '../molecules/Dropdown';

/**
 * @function
 * @desc Reusable Fish Form Component
 * @param {object} props 
*/
const FishForm = (props) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [fileName, setFileName] = useState('');

    //update the states according to the props changes
    useEffect(() => {
        if (props.inventoryData) {
            setName(props.inventoryData.name);
            setPrice(props.inventoryData.price);
            setDescription(props.inventoryData.description);
            setStatus(props.inventoryData.status);
            setFileName(props.inventoryData.imagePath);
        } else {
            setName('');
            setPrice('');
            setDescription('');
            setStatus('');
            setFileName('');
        }
    }, [props.inventoryData]);

    /**
     * @function
     * @desc handle input file change
     * @param {object} e 
    */
    const handleFileChange = (e) => {
        setFileName(e.target.files[0].name);
        props.handleChange && props.handleChange(e.target.files[0].name, 'file', props.inventoryData.id);
    }

    /**
     * @function
     * @desc handle dropdown change
     * @param {String} fieldValue
     * @param {String} fieldName 
    */
    const handleItemSelected = (fieldValue, fieldName) => {
        if (fieldName === 'option') {
            setStatus(fieldValue);
        }
        props.handleChange && props.handleChange(fieldValue, fieldName, props.inventoryData.id);
    }

    /**
     * @function
     * @desc handle change all the input fields
     * @param {object} e
     * @param {String} fieldName 
    */
    const handleChange = (e, fieldName) => {
        e && e.persist && e.persist();
        switch (fieldName) {
            case 'name':
                setName(e.target.value);
                break;
            case 'description':
                setDescription(e.target.value);
                break;
            case 'price':
                setPrice(e.target.value);
                break;
            default:
                break;
        }
        props.handleChange && props.handleChange(e, fieldName, props.inventoryData.id);
    }

    return (
        <>
            <span className={`text-red-600 text-sm font-bold ${props.error ? '' : 'hidden'}`}>Please enter all the details...</span>
            <div className='border rounded-lg border-black mb-4'>
                <div className='flex border-b border-black'>
                    <div className='flex-grow px-2'>
                        <label className='flex items-center h-full cursor-pointer' htmlFor='name'>
                            <img src='../assets/images/map-fish-cleaning.png' alt='fish' className='mr-2 w-6' />
                            <input type='text' placeholder='FISH NAME' value={name} className='bg-transparent focus:outline-none' onChange={(e) => handleChange(e, 'name')} />
                        </label>
                    </div>
                    <div className='flex-grow border-l border-r border-black px-2'>
                        <label className='flex items-center h-full cursor-pointer' htmlFor='price'>
                            <span className='flaticon-dollar text-theme-blue'></span>
                            <input type='number' placeholder='PRICE' value={price} className='bg-transparent focus:outline-none' onChange={(e) => handleChange(e, 'price')} />
                        </label>
                    </div>
                    <div className='flex-grow ml-3 px-2 py-1'>
                        <Dropdown
                            value={status}
                            title='Select Option'
                            list={props.inventoryData && props.inventoryData.options}
                            onSelectItem={(e) => { handleItemSelected(e, 'option') }}
                            listWidth='w-40'
                            width='w-32'
                        />
                    </div>
                </div>
                <div className='p-2 border-b border-black'>
                    <label className='flex items-center cursor-pointer' htmlFor='desc'>
                        <span className='flaticon-google text-theme-blue mr-3'></span>
                        <textarea rows='3' placeholder='DESCRIPTION' className='w-full bg-transparent focus:outline-none' value={description} onChange={(e) => handleChange(e, 'description')} />
                    </label>
                </div>
                <div className='p-2 border-b border-black'>
                    <InputFile
                        fileName={fileName}
                        handleFileChange={handleFileChange}
                        value={fileName}
                    />
                </div>
                {props.isNewFish ?
                    (<div className='flex justify-around p-2 fish-hook-bg'>
                        <Button
                            text='save fish'
                            styleClasses='bg-green-600 text-xs'
                            onClick={() => props.saveFish()}
                        />
                        <Button
                            text='remove fish'
                            styleClasses='bg-red-600 text-xs as'
                            onClick={() => props.removeNewFish()}
                        />
                    </div>) :
                    (<div className='flex justify-center p-2 fish-hook-bg'>
                        <Button
                            text='remove fish'
                            styleClasses='bg-red-600 text-xs'
                            onClick={() => props.removeFish(props.inventoryData.id)}
                        />
                    </div>)
                }
            </div>
        </>
    )
}

export default FishForm;