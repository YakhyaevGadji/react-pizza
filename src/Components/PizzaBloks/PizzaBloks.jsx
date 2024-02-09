import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

const PizzaBloks = ({ id, title, imgUrl, types, sizes, price }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart.items.find((obj) => obj.id === id));

    const addedCount = cartItem ? cartItem.count : 0;
    
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const typeNames = ['тонкое', 'традиционное'];

    const onClickAdd = () => {
        const item = {
            id,
            title,
            price,
            imgUrl,
            type: activeType,
            size: activeSize
        };
        console.log(item);
        dispatch(addItem(item));
    }

    return (
        <div className="pizza-block" key={id}>
            <img
                className="pizza-block__image"
                src={imgUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((index) => {
                        return <li onClick={() => setActiveType(index)} className={activeType === index ? 'active' : ''} key={index}>{typeNames[index]}</li>
                    })}
                </ul>
                <ul>
                    {sizes.map((value, index) => {
                        return <li onClick={() => setActiveSize(index)} className={activeSize === index ? 'active' : ''} key={index}>{value} см.</li>
                    })}

                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <button onClick={onClickAdd} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <span>Добавить</span>
                    {addedCount > 0 && <i>{addedCount}</i>}
                </button>
            </div>
        </div>
    );

};

export default PizzaBloks;
