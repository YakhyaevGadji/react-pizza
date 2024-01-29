import { useState } from "react";

const Sort = ({value, onClickSort}) => {
    const [activeSort, setActiveSort] = useState(false);
    const sorts = [
        {name: 'популярности (DESC)', sort: 'rating'},
        {name: 'популярности (ASC)', sort: '-rating'},
        {name: 'цена (DESC)', sort: 'price'},
        {name: 'цена (ASC)', sort: '-price'},
        {name: 'алфовиту (DESC)', sort: 'title'},
        {name: 'алфовиту (ASC)', sort: '-title'}
    ];
    // 'популярности', 'цене', 'алфавиту'
    const onClickFuncSort = (name) => {
        onClickSort(name);
        setActiveSort(false);
    };

    return (
        <div className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                />
                <b>Сортировка по:</b>
                <span onClick={() => setActiveSort(!activeSort)}>
                    {value.name}
                </span>
            </div>
            {activeSort && (
                <div className="sort__popup">
                    <ul>
                        {sorts.map((obj, index) => {
                            return (
                                <li onClick={() => onClickFuncSort(obj)} className={value.sort === obj.sort ? 'active' : ''} key={index}>{obj.name}</li>
                            );
                        })}
                        
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;
