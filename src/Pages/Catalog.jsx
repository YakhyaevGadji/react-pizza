import { useEffect, useState } from "react";
import Catigories from "../Components/Categories/Categories";
import PizzaBloks from "../Components/PizzaBloks/PizzaBloks";
import Sort from "../Components/Sort/Sort";
import Skeleton from "../Components/PizzaBloks/Skeleton";
import Pagination from "../Components/Pagination/Pagination";

const Catalog = ({searchValue}) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoriId, setCategoriId] = useState(0);
    const [sort, setSort] = useState({
        name: 'популярности',
        sort: 'rating'
    });

    console.log(searchValue);

    useEffect(() => {
        setIsLoading(true);

        const order = sort.sort.includes('-') ? 'asc' : 'desc';
        const serach = searchValue ? `&search=${searchValue}` : searchValue;

        fetch(`https://65ad515fadbd5aa31be090e6.mockapi.io/items?${
            categoriId > 0 ? `category=${categoriId}` : ''
        }&sortBy=${sort.sort.replace('-', '')}&order=${order}${serach}`).then((res) => {
            return res.json();
        }).then((data) => {
            setItems(data);
            setIsLoading(false);
        });

        window.scrollTo(0, 0);
    }, [categoriId, sort, searchValue]);

    return (
        <div className="container">
            <div className="content__top">
                <Catigories value={categoriId} onClickCatregori={(id) => setCategoriId(id)}/>
                <Sort value={sort} onClickSort={(id) => setSort(id)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading && [...new Array(6)].map((_, index) => <Skeleton key={index}/>)}
                {items && items.filter(obj => {
                    if(obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                        return true;
                    }else {
                        return false;
                    }
                }).map((obj, index) => {
                    return <PizzaBloks 
                        key={index} 
                        id={obj.id} 
                        title={obj.title} 
                        imgUrl={obj.imageUrl} 
                        types={obj.types}
                        sizes={obj.sizes}
                        price={obj.price}
                    />
                })}
            </div>
            <Pagination/>
        </div>
    );
};

export default Catalog;
