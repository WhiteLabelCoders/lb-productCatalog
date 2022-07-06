import React from 'react'
import styles from './Pagination.module.scss'
import { Link } from "react-router-dom"

const Pagination = (props) => {
	const { totalItems, itemsPerPage, currentPage, isFirstPage, isLastPage } = props
	const totalPages =  Math.ceil(parseFloat(totalItems)/parseFloat(itemsPerPage))

	const PaginationPages = (props) => {
		const { currentPage } = props
		
		let pages = []	
		for (var i = 0; i < totalPages; i++) {
			const isCurrentPage = currentPage === i+1
			const pageAnchor = i+1 
			const pageLink = i === 0 ? '/' : `/page/${pageAnchor}`

			pages.push(
				<div key={i} className={`${styles["pagination__link"]} ${isCurrentPage ? styles["pagination__link--active"] : ''}`}>
					{isCurrentPage ? <>{pageAnchor}</> : <Link to={pageLink}>{pageAnchor}</Link>}
				</div>
			)
		}
		if (totalPages > 6) {
			pages.splice(0,currentPage-1,)
			pages.splice(3,(totalPages-currentPage)-5, <div key="..." className={`${styles["pagination__link"]}}`}>...</div>)
		}

		return <>{pages}</>
	}

	return(
		<div className={styles.pagination}>
			<div className={`${styles["pagination__first-link"]} ${styles["pagination__link--disabled"]}`}>
				{isFirstPage ? 'First' : <Link to={`/`}>First</Link>}
			</div>
			<PaginationPages currentPage={currentPage} totalItems={totalItems} itemsPerPage={itemsPerPage}/>
			<div className={`${styles["pagination__last-link"]} ${styles["pagination__link--disabled"]}`}>
				{isLastPage ? 'Last' : <Link to={`/page/${totalPages}`}>Last</Link>}
			</div>
		</div>
	)
}

export default Pagination