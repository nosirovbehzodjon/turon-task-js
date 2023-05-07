import styles from "../../../styles/components/pagination/pagination.module.scss";
import { GrNext, GrPrevious } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";

const Pagination = ({ setCount, pageCount }) => {
    const router = useRouter();
    const handlePageClick = (data) => {
        setCount(data.selected + 1);
        router.push(`?page=${data.selected + 1}&items=20`, undefined, {
            shallow: true,
        });
    };
    return (
        <div>
            <ReactPaginate
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel={"<"}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={styles.breakClassName}
                containerClassName={styles.container}
                pageClassName={styles.page_item}
                pageLinkClassName={styles.page_item_link}
                activeClassName={styles.active}
                previousClassName={styles.prev_next}
                nextClassName={styles.prev_next}
                previousLinkClassName={styles.prev_next_link}
                nextLinkClassName={styles.prev_next_link}
            />
        </div>
    );
};

export default Pagination;
