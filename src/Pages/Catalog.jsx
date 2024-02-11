import { useContext, useEffect, useState } from "react";
import Catigories from "../Components/Categories/Categories";
import PizzaBloks from "../Components/PizzaBloks/PizzaBloks";
import Sort from "../Components/Sort/Sort";
import Skeleton from "../Components/PizzaBloks/Skeleton";
import Pagination from "../Components/Pagination/Pagination";
import { SearchContext } from "../App/App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from '../redux/slices/filterSlice';
import qs from 'qs';
import { useNavigate } from "react-router";
import { fetchPizzas } from "../redux/slices/pizzasSlice";

const Catalog = () => {
    const dispatch = useDispatch();
    const usenavigate = useNavigate();

    const categoriId = useSelector(state => state.filter.categoryId);
    const sort = useSelector(state => state.filter.sort.sortProperty);
    const { items, status } = useSelector(state => state.pizza);


    const {searchValue} = useContext(SearchContext);   
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
  
    const onClickCatregori = (id) => {
        dispatch(setCategoryId(id));
    };

    const getPizzas = async () => {
        setIsLoading(true);

        const order = sort.includes('-') ? 'asc' : 'desc';
        const serach = searchValue ? `&search=${searchValue}` : searchValue;

        
        dispatch(fetchPizzas({
            order,
            serach,
            sort,
            categoriId,
            currentPage
        }));

        window.scrollTo(0, 0);
    };

    useEffect(() => {
        getPizzas();
    }, [categoriId, sort, currentPage, searchValue]);

    useEffect(() => {

        const queryString = qs.stringify({
            sortProperty: sort,
            categoriId,
            currentPage
        });

        usenavigate(`?${queryString}`);

    }, [categoriId, sort, currentPage, searchValue]);

    return (
        <div className="container">
            <div className="content__top">
                <Catigories value={categoriId} onClickCatregori={onClickCatregori}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {
                status === 'error' ? <div>Error to fetch</div> :<div className="content__items">
                {status === 'loading' ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) :
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
            }
            
            <Pagination setCurrentPage={(id) => setCurrentPage(id)}/>
        </div>
    );
};

export default Catalog;
