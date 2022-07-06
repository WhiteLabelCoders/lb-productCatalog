import React, { useState } from 'react'
import styles from './ProductBox.module.scss'
import { Button } from '../Forms'
import { RatingView } from 'react-simple-star-rating'
import ProductPopUp from '../ProductPopUp'

const ProductBox = (props) => {
	const { productName, productDescription, productImage, productThubnail, isProductActive, productRatingValue, isProductPromo } = props
	const [showProductPopUp, setShowProductPopUp] = useState(false)

	const closeProductPopUp = (closeProductPopUp) => {
    setShowProductPopUp(closeProductPopUp)
	}

	const openProductPopUp = () => {
		if(isProductActive) {
			setShowProductPopUp(true)
		}
	}

	return(
		<>
			<div className={styles["product-box"]}>
				<div className={styles["product-box__image"]}>
					<img src={productThubnail} alt="product name"/>
					{isProductPromo ? <div className={styles["product-box__promo-label"]}>Promo</div> : null}
				</div>
				<div className={styles["product-box__content"]}>
					<div>
						<div className={styles["product-box__title"]}>{productName}</div>
						<div className={styles["product-box__text"]}>{productDescription}</div>
					</div>
					<div>
						<div className={styles["product-box__rating"]}>
							<RatingView ratingValue={productRatingValue} size="16"/>
						</div>
						<div onClick={openProductPopUp}>
							<Button anchor={isProductActive ? 'Show details' : 'Unavailable' } disabled={!isProductActive}/>
						</div>
					</div>
				</div>
				{showProductPopUp ? <ProductPopUp sendClosePopUp={closeProductPopUp} productImage={productImage} productName={productName} productDescription={productDescription}/> : null}	
			</div>
		</>
	)
}

export default ProductBox