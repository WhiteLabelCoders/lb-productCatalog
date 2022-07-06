import React, { useState, useEffect } from 'react'
import styles from './ProductsList.module.scss'
import ProductBox from '../ProductBox'
import CompositionGridList from '../CompositionGridList'
import Pagination from '../Pagination'
import { ReactComponent as Spinner } from './images/spinner.svg'
import { ReactComponent as Backet } from './images/backet.svg'
import { PRODUCT_API_ENDPOINT } from '../../../constatns'

const ProductsList = (props) => {
	const { getDataForPage, getPromoProduct, getActiveProduct, searchProducts } = props
	const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [products, setProducts] = useState([])
	const [meta, setMeta] = useState({
		totalItems: 0,
		itemsPerPage: 0,
		currentPage: 0,
		totalPages: 0
	})

	const apiEndpoint = `${PRODUCT_API_ENDPOINT}?page=${getDataForPage}&limit=8`
	const getPromoItemsFromApi = getPromoProduct ? `&promo=1` : ''
	const getActiveItemsFromApi = getActiveProduct ? `&active=1` : ''
	const getSearchProductFromApi = searchProducts && searchProducts !== "" ? `&search=${encodeURIComponent(searchProducts)}` : ''
	
	useEffect(() => {
    fetch(`${apiEndpoint}${getPromoItemsFromApi}${getActiveItemsFromApi}${getSearchProductFromApi}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setProducts(result.items)
					setMeta(result.meta)
        },
        (error) => {
					console.log(error)
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [apiEndpoint, getPromoItemsFromApi, getActiveItemsFromApi, getSearchProductFromApi])

	const { totalItems, itemsPerPage, currentPage, totalPages } = meta
	const isFirstPage = parseFloat(getDataForPage) === 1
	const isLastPage = parseFloat(getDataForPage) === totalPages 
	const noProductsFound = products.length === 0 

	if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className={styles.spinner} style={{height: 884, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}><Spinner/></div> //temporary LCP fix
  } else {
		return(
			<div className={styles["products-list"]}>
				{noProductsFound?
					<div className={styles["products-list__no-results"]}>
						<Backet/>
						<div className={styles["products-list__no-results__title"]}>Ooops… It’s empty here</div>
						<div className={styles["products-list__no-results__subtitle"]}>There are no products on the list</div>
					</div>
				:
					<CompositionGridList>
						{products.map(product => {
							const { name, description, image, active, promo, rating, id } = product

							return(
								<ProductBox
									key={id}
									productName={name}
									productDescription={description}
									productThubnail={image}
									productImage={image}
									isProductActive={active}
									isProductPromo={promo}
									productRatingValue={rating}
								/>
							)
						})}
					</CompositionGridList>
				}
				{noProductsFound ? null : <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} currentPage={currentPage} isFirstPage={isFirstPage} isLastPage={isLastPage}/>}
			</div>
		)
	}
}

export default ProductsList