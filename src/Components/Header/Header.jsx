import { Link } from "react-router-dom";
import logo from "../../assets/img/pizza-logo.svg";
import Search from "../Search/Search";
import { useSelector } from "react-redux";

const Header = () => {
    const {items, totalPrice} = useSelector((state) => state.cart);

    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <Search/>
                <div className="header__cart">
                    <Link to="/cart" className="button button--cart">
                        <span>{totalPrice} ₽</span>
                        <div className="button__delimiter"></div>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        ></svg>
                        <span>{totalCount}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
