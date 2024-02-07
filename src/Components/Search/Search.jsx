import { useCallback, useContext, useState } from "react";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App/App";
import debounce from "lodash.debounce";

const Search = () => {
    const [value, setValue] = useState('');
    const { setSearchValue } = useContext(SearchContext);


    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 750),
        [],
    );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return (
        <input onChange={onChangeInput} className={styles.root} value={value} placeholder="Search pizza"/>
    );
}
 
export default Search;