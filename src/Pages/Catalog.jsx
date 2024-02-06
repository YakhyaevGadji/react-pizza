import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Catigories from "../Components/Categories/Categories";
import PizzaBloks from "../Components/PizzaBloks/PizzaBloks";
import Sort from "../Components/Sort/Sort";
import Skeleton from "../Components/PizzaBloks/Skeleton";
import Pagination from "../Components/Pagination/Pagination";
import { SearchContext } from "../App/App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from '../redux/slices/filterSlice'

const Catalog = () => {
    const dispatch = useDispatch();
    const categoriId = useSelector(state => state.filter.categoryId);
    const sort = useSelector(state => state.filter.sort.sortProperty);


    const {searchValue} = useContext(SearchContext);    
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
  
    const onClickCatregori = (id) => {
        dispatch(setCategoryId(id));
    };

    useEffect(() => {
        setIsLoading(true);

        const order = sort.includes('-') ? 'asc' : 'desc';
        const serach = searchValue ? `&search=${searchValue}` : searchValue;

        axios.get(`https://65ad515fadbd5aa31be090e6.mockapi.io/items?page=${currentPage}&limit=4&${categoriId > 0 ? `category=${categoriId}` : ''}&sortBy=${sort.replace('-', '')}&order=${order}${serach}`)
        .then((res) => {
            setItems(res.data);
            setIsLoading(false);
        });

        window.scrollTo(0, 0);
    }, [categoriId, sort, currentPage, searchValue]);

    return (
        <div className="container">
            <div className="content__top">
                <Catigories value={categoriId} onClickCatregori={onClickCatregori}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) :
                items.map((obj, index) => {
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
            <Pagination setCurrentPage={(id) => setCurrentPage(id)}/>
        </div>
    );
};

export default Catalog;
