import {BrowserRouter, Routes, Route} from "react-router-dom";
import { createContext, useState } from "react";
import Catalog from "../Pages/Catalog";
import "./../scss/app.scss";
import NotFound from "../Components/NotFound/NotFound";
import Carts from "../Pages/Carts";
import Header from "../Components/Header/Header";

export const SearchContext = createContext();

function App() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <BrowserRouter>
            <div className="wrapper">
                <SearchContext.Provider value={{searchValue, setSearchValue}}>
                    <Header/>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Catalog/>}/>
                            <Route path="/cart" element={<Carts/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                </SearchContext.Provider>
            </div>
        </BrowserRouter>
    );
};

export default App;
