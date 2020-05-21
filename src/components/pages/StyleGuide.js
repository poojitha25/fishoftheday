import React, { useState } from 'react';

import Button from '../atoms/Button';
import CartItem from '../atoms/CartItem';
import Counters from '../atoms/Counters';
import InputFile from '../atoms/InputFile';

import Dropdown from '../molecules/Dropdown';

import FishCard from '../organisms/FishCard';
import FishForm from '../organisms/FishForm';

/**
 * @function
 * @desc StyleGuide page
*/
const StyleGuide = () => {
    const [cartData,] = useState({ name: 'fish1', quantity: 2, price: 12.34 });
    const [sample, setSample] = useState('');

    const handleItemSelected = (fieldValue, fieldName) => {
        if (fieldName === 'sample') {
            setSample(fieldValue);
        }
    }

    return (
        <>
            <section className='mb-4 border-b'>
                <h2 className='text-6xl font-bold'>Fonts</h2>
                <div className='mb-2'>
                    <h2 className='text-2xl'>Archistico Bold Font</h2>
                    <p className='font-archistico-bold text-4xl'>abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                </div>
                <div className='mb-2'>
                    <h2 className='text-2xl'>Archistico Simple Font</h2>
                    <p className='font-archistico-simple text-4xl'>abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                </div>
                <div className='mb-2'>
                    <h2 className='text-2xl'>Carrinady Font</h2>
                    <p className='font-carrinady text-4xl'>abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                </div>
                <div className='mb-2'>
                    <h2 className='text-2xl'>Phosphate Inline Font</h2>
                    <p className='font-phosphate-inline text-4xl'>abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                </div>
                <div className='mb-2'>
                    <h2 className='text-2xl'>Proxima Nova Alt Regular Font</h2>
                    <p className='font-proxima-nova-alt text-4xl'>abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                </div>
                <div className='mb-2'>
                    <h2 className='text-2xl'>Proxima Nova Regular Font</h2>
                    <p className='font-proxima-nova text-4xl'>abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                </div>
            </section>
            <section className='mb-4 border-b'>
                <h2 className='text-2xl font-bold'>Icons</h2>
                <div className=''>
                    <span className='flaticon-home'></span>
                    <span className='flaticon-shopping-cart'></span>
                    <span className='flaticon-add'></span>
                    <span className='flaticon-minus'></span>
                    <span className='flaticon-dollar'></span>
                    <span className='flaticon-google'></span>
                    <span className='flaticon-image'></span>
                    <span className='flaticon-chevron-upwards-arrow'></span>
                    <span className='flaticon-down-chevron'></span>
                    <span className='flaticon-fish'></span>
                </div>
            </section>
            <section className='mb-4 border-b'>
                <h2 className='text-2xl font-bold'>Atoms</h2>
                <div className=''>
                    <Button
                        text='save fish'
                        styleClasses='bg-green-600 text-xs'
                    />
                    <Button
                        text='remove fish'
                        styleClasses='bg-red-600 text-xs'
                    />
                    <Button
                        text='order'
                        styleClasses='bg-black text-sm'
                    />
                    <div className='w-64'>
                        <CartItem cartData={cartData} />
                    </div>
                    <Counters quantity={1} />
                    <InputFile />

                </div>
            </section>
            <section className='mb-4 border-b'>
                <h2 className='text-2xl font-bold'>Molecules</h2>
                <div className=''>
                    <Dropdown
                        value={sample}
                        title="Select option"
                        list={['fresh', 'sold out']}
                        onSelectItem={(e) => { handleItemSelected(e, 'sample') }}
                        listWidth="w-40"
                        width="w-32"
                    />
                </div>
            </section>
            <section className='mb-4 border-b'>
                <h2 className='text-2xl font-bold'>Organisms</h2>
                <div className='flex'>
                    <div className='w-1/3 mr-2'>
                        <FishCard />
                    </div>
                    <div className='w-2/3'>
                        <FishForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default StyleGuide;