import { useState } from "react";

const PizzaBloks = ({ id, title, imgUrl, types, sizes, price}) => {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const typeNames = ['тонкое', 'традиционное'];


    
    return(
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
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    );

};

export default PizzaBloks;
