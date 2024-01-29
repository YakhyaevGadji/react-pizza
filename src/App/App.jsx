import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Catalog from "../Pages/Catalog";
import "./../scss/app.scss";
import NotFound from "../Components/NotFound/NotFound";
import Carts from "../Pages/Carts";
import Header from "../Components/Header/Header";

function App() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Catalog searchValue={searchValue}/>}/>
                        <Route path="/cart" element={<Carts/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
