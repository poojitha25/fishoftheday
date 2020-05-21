import React, { useState, useEffect } from 'react'

/**
 * @function
 * @desc Reusable Dropdown Component
 * @param {object} props 
*/
const Dropdown = (props) => {
    const [listOpen, setListOpen] = useState(false);
    const [headerTitle, setHeaderTitle] = useState(props.title);

    const { list } = props;

    /**
     * @function
     * @desc closes the dropdown on clicking the body
    */
    const close = () => {
        setListOpen(false);
    }

    /**
     * @function
     * @desc selects an items on click
     * @param {string} title 
    */
    const selectItem = (title) => {
        setHeaderTitle(title);
        setListOpen(false);
        props.onSelectItem && props.onSelectItem(title);
    }

    /**
     * @function
     * @desc toggles the dropdown
    */
    const toggleList = () => {
        if (list && list.length) {
            setListOpen(!listOpen);
        }
    }

    //update selected item
    useEffect(() => {
        setListOpen(false);
        if (props.value) {
            setHeaderTitle(props.value);
        } else {
            setHeaderTitle(props.title);
        }
    }, [props.list, props.title, props.value]);

    //close the dropdown on clicking outside the dropdown menu
    useEffect(() => {
        setTimeout(() => {
            if (listOpen) {
                window.addEventListener('click', close)
            }
            else {
                window.removeEventListener('click', close)
            }
        }, 0);
        return () => {
            window.removeEventListener('click', close)
        }
    }, [listOpen]);

    const listClass = listOpen ? 'flaticon-chevron-upwards-arrow' : 'flaticon-down-chevron';
    const cursorClass = (list && list.length) ? 'cursor-pointer' : 'cursor-not-allowed';

    return (
        <div className="relative">
            <div className={`dropdown inline-flex ${cursorClass}`} onClick={() => toggleList()}>
                <div className={`${props.listWidth} flex items-center justify-between border border-black bg-white border rounded-lg px-3`}>
                    {list && list.length
                        ?
                        <p className="uppercase text-sm font-sans">
                            {headerTitle}
                        </p>
                        :
                        <p className="capitalize text-sm font-sans text-light-gray">
                            no data available
                        </p>
                    }
                    <span className={`${listClass} text-theme-blue`}></span>
                </div>
            </div>
            {listOpen &&
                <ul className={`${props.width} dropdown-content absolute border border-black rounded bg-white z-40`}>
                    {list && list.map((item, index) => (
                        <li className="uppercase text-left px-3 text-sm font-sans py-1 hover:bg-blue-200 cursor-pointer"
                            key={index}
                            onClick={() => selectItem(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default Dropdown;