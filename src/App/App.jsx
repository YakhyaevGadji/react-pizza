import {BrowserRouter, Routes, Route} from "react-router-dom";
import { createContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/filterSlice";
import Catalog from "../Pages/Catalog";
import "./../scss/app.scss";
import NotFound from "../Components/NotFound/NotFound";
import Carts from "../Pages/Carts";
import Header from "../Components/Header/Header";

export const SearchContext = createContext();

function App() {
    const [searchValue, setSearchValue] = useState('');
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <div className="wrapper">

            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                Increment
            </button>

            <span>{count}</span>

            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                Decrement
            </button>

                {/* <SearchContext.Provider value={{searchValue, setSearchValue}}>
                    <Header/>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Catalog/>}/>
                            <Route path="/cart" element={<Carts/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                </SearchContext.Provider> */}
            </div>
        </BrowserRouter>
    );
};

export default App;
