import React, { useState, useEffect } from 'react';

import FishMarket from '../templates/FishMarket';
import Cart from '../templates/Cart';
import Inventory from '../templates/Inventory';

import data from '../../assets/data/StoreData.json';

/**
 * @function
 * @desc Fish Store Component
 * @param {object} props 
*/
const FishStore = (props) => {
    const [storeData, setStoreData] = useState([]);
    const [noDataError, setNoDataError] = useState(false);

    //update the no data validation message on change of storeData
    useEffect(() => {
        if (storeData && storeData.inventory && storeData.inventory.length === 0) {
            setNoDataError(true);
        } else {
            setNoDataError(false);
        }
    }, [storeData]);

    /**
     * @function
     * @desc handle logout on click of logout button
    */
    const handleLogout = () => {
        props.history.goBack()
    }

    /**
     * @function
     * @desc reusable function to set the store data state
     * @param {object} newInventory
     * @param {object} newCart
    */
    const updateStoreData = (newInventory, newCart) => {
        let fishes = { inventory: newInventory };
        let inventory = Object.assign({}, fishes);

        let cartItems = { cart: newCart };
        let cart = Object.assign({}, cartItems);

        let newStoreData = { ...inventory, ...cart };
        setStoreData(newStoreData);
    }

    /**
     * @function
     * @desc handle load store data on click of load sample fishes
    */
    const loadSampleData = () => {
        if (storeData && storeData.inventory && storeData.inventory.length === 0) {
            setNoDataError(true);
        } else {
            setStoreData(data);
            setNoDataError(false);
        }
    }

    /**
     * @function
     * @desc handle order on click of order button and update the storedata
     * @param {string} id
     * @param {number} quantity
    */
    const handleOrder = (id, quantity) => {
        let updatedFishes = storeData.inventory;
        let updatedCart = storeData.cart;
        let cartItem = {
            id: id,
            name: '',
            quantity: quantity,
            price: ''
        }

        updatedFishes.map(item => {
            if (item.id === cartItem.id) {
                cartItem.name = item.name;
                cartItem.price = item.price * cartItem.quantity;
            }
            return updatedFishes;
        });

        if (updatedCart.length) {
            let cartPresent = true;

            updatedCart.map((item, index) => {
                if (item.id === cartItem.id) {
                    cartPresent = false;
                    updatedCart[index].price = Number(cartItem.price) + Number(item.price);
                    updatedCart[index].quantity = cartItem.quantity + item.quantity;
                }
                return updatedCart;
            });

            if (cartPresent) {
                updatedCart = [cartItem, ...updatedCart];
            }
        } else {
            updatedCart = [cartItem];
        }
        updateStoreData(updatedFishes, updatedCart);
    }

    /**
     * @function
     * @desc handle fold of the page on click of fold button
    */
    const fold = () => {
        let orderElement = document.querySelector('.order');
        let cartElement = document.querySelector('.cart');
        let inventoryElement = document.querySelector('.inventory');
        let homeElement = document.querySelector('.home-bg');

        let order = (orderElement.offsetWidth / 2) / 38;
        let cart = (cartElement.offsetWidth / 2) / 38;

        orderElement.style.transform = "skewY(" + cart + "deg)";
        cartElement.style.transform = "skewY(-" + order + "deg)";
        inventoryElement.style.transform = "skewY(" + cart + "deg)";

        homeElement.classList.add('fold');
        orderElement.classList.add('order-section-border');
        inventoryElement.classList.add('inventory-section-border');
        cartElement.classList.add('cart-section-border');
    }

    /**
     * @function
     * @desc handle unfold of the page on click of unfold button
    */
    const unfold = () => {
        let orderElement = document.querySelector('.order');
        let cartElement = document.querySelector('.cart');
        let inventoryElement = document.querySelector('.inventory');
        let homeElement = document.querySelector('.home-bg');

        orderElement.style.transform = 'none';
        cartElement.style.transform = 'none';
        inventoryElement.style.transform = 'none';

        homeElement.classList.remove('fold');
        orderElement.classList.remove('order-section-border');
        inventoryElement.classList.remove('inventory-section-border');
        cartElement.classList.remove('cart-section-border');
    }

    /**
     * @function
     * @desc handle remove on click of remove fish button and update the storedata
     * @param {string} id
    */
    const removeFish = (id) => {
        let updatedFishes = storeData.inventory;
        let updatedCart = storeData.cart;

        updatedFishes.forEach((item, index) => {
            if (item.id === id) {
                updatedFishes.splice(index, 1);
            }
        });

        updatedCart.forEach((item, index) => {
            if (item.id === id) {
                updatedCart.splice(index, 1);
            }
        });

        updateStoreData(updatedFishes, updatedCart);
    }

    /**
     * @function
     * @desc handle on change of all input fields both in main & cart sections and update the storedata
     * @param {object} e
     * @param {string} fieldName
     * @param {string} id
    */
    const handleChange = (e, fieldName, id) => {
        let updatedFishes = storeData.inventory;
        let updatedCart = storeData.cart;

        updatedFishes.forEach((item, index) => {
            if (item.id === id) {
                switch (fieldName) {
                    case 'name':
                        updatedFishes[index].name = e.target.value;
                        break;
                    case 'description':
                        updatedFishes[index].description = e.target.value;
                        break;
                    case 'price':
                        updatedFishes[index].price = e.target.value;
                        break;
                    case 'option':
                        updatedFishes[index].status = e;
                        break;
                    case 'file':
                        updatedFishes[index].imagePath = e;
                        break;
                    default:
                        break;
                }
            }
        });

        updatedCart.forEach((item, index) => {
            if (item.id === id) {
                switch (fieldName) {
                    case 'name':
                        updatedCart[index].name = e.target.value;
                        break;
                    case 'price':
                        updatedCart[index].price = e.target.value;
                        break;
                    default:
                        break;
                }
            }
        });

        updateStoreData(updatedFishes, updatedCart);
    }

    /**
     * @function
     * @desc handle save on click of save button and update storedata
     * @param {object} newFish
    */
    const updateInventory = (newFish) => {
        let updatedFishes = storeData.inventory;
        let updatedCart = storeData.cart;

        if (updatedFishes.length) {
            for (let i = 0; i <= updatedFishes.length; i++) {
                let newId = 'fish' + String(i + 1);
                let isNewFish = true;

                updatedFishes.forEach((item) => {
                    if (item.id === newId) {
                        isNewFish = false;
                    }
                });

                if (isNewFish) {
                    newFish[0].id = newId;
                }
            };
            updatedFishes = [...newFish, ...updatedFishes];

            updateStoreData(updatedFishes, updatedCart);
        }
        else {
            newFish[0].id = 'fish1';
            updatedFishes = newFish;

            updateStoreData(updatedFishes, updatedCart);
        }
    }

    return (
        <div className='flex home-bg'>
            <section className='w-5/12 order border-theme-red border-r-2'>
                <FishMarket
                    storeData={storeData}
                    handleOrder={handleOrder}
                    updateStoreData={updateStoreData}
                    noDataError={noDataError}
                />
            </section>
            <section className='w-2/12 cart'>
                <Cart
                    storeData={storeData}
                    noDataError={noDataError}
                />
            </section>
            <section className='w-5/12 inventory border-theme-red border-l-2'>
                <Inventory
                    storeData={storeData}
                    logout={handleLogout}
                    onClickLoadFishes={loadSampleData}
                    fold={fold}
                    unfold={unfold}
                    handleChange={(e, val, id) => handleChange(e, val, id)}
                    updateInventory={updateInventory}
                    removeFish={(id) => removeFish(id)}
                    noDataError={noDataError}
                />
            </section>
        </div>
    )
}

export default FishStore;