import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

const Sort = () => {
    const dispatch = useDispatch();
    const sort = useSelector(state => state.filter.sort);

    const [activeSort, setActiveSort] = useState(false);
    const sorts = [
        {name: 'популярности (DESC)', sortProperty: 'rating'},
        {name: 'популярности (ASC)', sortProperty: '-rating'},
        {name: 'цена (DESC)', sortProperty: 'price'},
        {name: 'цена (ASC)', sortProperty: '-price'},
        {name: 'алфовиту (DESC)', sortProperty: 'title'},
        {name: 'алфовиту (ASC)', sortProperty: '-title'}
    ];
    
    const onClickFuncSort = (obj) => {
        dispatch(setSort(obj));
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
                    {sort.name}
                </span>
            </div>
            {activeSort && (
                <div className="sort__popup">
                    <ul>
                        {sorts.map((obj, index) => {
                            return (
                                <li onClick={() => onClickFuncSort(obj)} className={sort.sortProperty === obj.sortProperty ? 'active' : ''} key={index}>{obj.name}</li>
                            );
                        })}
                        
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;
