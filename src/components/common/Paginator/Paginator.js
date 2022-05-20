import  React, {useState} from 'react'

import styles from "./Paginator.module.css";



const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const PortionSize = 10
    const portionCount = Math.ceil(pagesCount / props.pageSize)
    let [portionNumber,serPortionNumber]= useState(1)
    const leftPortionPageNumber = (portionNumber-1)* PortionSize + 1
    const rightPortionPageNumber = portionNumber * PortionSize


    return (
        <div className={styles.Paginator}>
            {portionNumber > 1 && <button className={styles.btn} onClick={()=> {
                serPortionNumber(portionNumber-1)}}>prev</button>}
            {pages
                .filter(p=> p>=leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(p => {
                return <span style={{cursor: "pointer"}} className={props.currentPage === p ? styles.selectedPage:styles.Page}
                             onClick={(e) => {
                                 props.onPagechanged(p)
                             }}> {p} </span>
            })}
            {portionCount > portionNumber && <button className={styles.btn} onClick={()=> {
                serPortionNumber(portionNumber+1)}}>next</button>}
        </div>
    )
}
export default Paginator

