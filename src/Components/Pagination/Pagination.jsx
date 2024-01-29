import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = () => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel="next >"
            onPageChange={(event) => console.log(event)}
            pageRangeDisplayed={8}
            pageCount={3}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
    );
}
 
export default Pagination;