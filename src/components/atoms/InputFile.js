import React from 'react';

/**
 * @function
 * @desc Reusable Input file Component
 * @param {object} props 
*/
const InputFile = (props) => {
    return (
        <label className='flex items-center cursor-pointer'>
            <span className='flaticon-image text-theme-blue mr-3'></span>
            <p className={`text-sm ${props.fileName && props.fileName.length ? '' : 'text-gray-500'}`}>{props.fileName ? props.fileName : 'IMAGE PATH'}</p>
            <input type="file" className='hidden' onChange={(e) => props.handleFileChange(e)} />
        </label>
    )
}

export default InputFile;