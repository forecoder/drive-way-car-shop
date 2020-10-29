import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CarContext } from '../context/cars';
import { CartContext } from '../context/cart';

const CarDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { cars } = useContext(CarContext);
    const { addToCart } = useContext(CartContext);

    const car = cars.find((car) => {
        return car.id === id;
    });

    if (!car) {
        return <h3>Loading ...</h3>;
    }

    const { url, make, model, description, price, image: url } = car;

    return (
        <section>
            <div>
                <img src={url} alt="" />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>{author}</h3>
                <h4>Price - ${price}</h4>
                <button className="btn"
                    onClick={() => {
                        addToCart({ ...car, id });
                        history.push('/cart');
                    }}>
                    Add to Cart
                </button>
            </div>
        </section>
    );
};

export default CarDetails;