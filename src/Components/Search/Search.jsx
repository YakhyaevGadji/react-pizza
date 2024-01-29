import styles from "./Search.module.scss";

const Search = ({searchValue, setSearchValue}) => {
    return (
        <input onChange={(event) => setSearchValue(event.target.value)} defaultValue={searchValue} className={styles.root} placeholder="Search pizza"/>
    );
}
 
export default Search;