import React from 'react';

/**
 * @function
 * @desc Reusable Button Component
 * @param {object} props 
*/
const Button = (props) => {
    const { text, styleClasses } = props;

    /**
     * @function
     * @desc handles the button click
     * @param {object} e 
    */
    const handleClick = (e) => {
        e.preventDefault();
        props.onClick && props.onClick(e);
    };

    return (
        <button
            className={`font-medium py-1 px-5 rounded-full uppercase cursor-pointer text-white focus:outline-none ${styleClasses}`}
            type="button"
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Button;