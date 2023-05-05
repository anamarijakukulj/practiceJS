import { useState } from 'react';
import list from './data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel =() => {
    const[people,setPeople] = useState(list);

    const prevSlide = () => {};
    const nextSlide = () => {};

    return (
        <section className='slider-container'>
            {people.map((person) => {
                const {id, image, name, title, quote} = person;
                return (
                    <article className='slide' key={id}>
                        <img src={image} alt={name} className='person-img' />
                        <h4 className='name'>{name}</h4>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>
                )
            })}

            <button type='button' className='prev' onClick={prevSlide}>
                <FaChevronLeft />
            </button>

            <button type='button' className='next' onClick={nextSlide}>
                <FaChevronRight />
            </button>
        </section>
    );
};

export default Carousel;