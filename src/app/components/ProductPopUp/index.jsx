import React from 'react'
import styles from './ProductPopUp.module.scss'
import { ReactComponent as ClosePopUp } from './images/close.svg'

const ProductPopUp = (props) => {
	const { productName, productDescription, productImage, sendClosePopUp } = props

	const closePopUp = () => {
		sendClosePopUp(false)
	}

	return(
		<div className={styles["product-popup"]}>
			<div className={styles["product-popup__box"]}>
				<div className={styles["product-popup__close"]}>
					<ClosePopUp onClick={closePopUp}/>
				</div>
				<div className={styles["product-popup__image"]}>
					<img src={productImage} alt="product name"/>
				</div>
				<div className={styles["product-popup__content"]}>
					<div className={styles["product-popup__title"]}>{productName}</div>
					<div className={styles["product-popup__text"]}>{productDescription}</div>
				</div>
			</div>
		</div>
	)
}

export default ProductPopUp