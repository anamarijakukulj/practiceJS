import { useEffect, useState } from 'react';
import list from './data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel =() => {
    const[people,setPeople] = useState(list);
    const [currentPerson, setCurrentPerson] = useState(0);

    const prevSlide = () => {
        setCurrentPerson((oldPerson) => {
            const result = (oldPerson - 1 + people.length) % people.length;
            return result;
        })
    };

    const nextSlide = () => {
        setCurrentPerson((oldPerson) => {
            const result = (oldPerson + 1) % people.length;
            return result;
        })
    };

    return (
        <section className='slider-container'>
            {people.map((person, personIndex) => {
                const {id, image, name, title, quote} = person;
                return (
                    <article 
                        className='slide' 
                        style={{transform:`translateX(${100 * (personIndex - currentPerson)}%)`, 
                        opacity: personIndex === currentPerson ? 1 : 0,
                        visibility: personIndex === currentPerson ? "visible" : "hidden"}} 
                        key={id}
                    >
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