import { useContext } from "react";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App/App";

const Search = () => {
    const {searchValue, setSearchValue} = useContext(SearchContext);

    return (
        <input onChange={(event) => setSearchValue(event.target.value)} defaultValue={searchValue} className={styles.root} placeholder="Search pizza"/>
    );
}
 
export default Search;