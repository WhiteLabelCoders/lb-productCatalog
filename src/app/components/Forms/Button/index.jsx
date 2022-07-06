import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {
	const { anchor, disabled, secondary } = props;
	const disbaledButtonClass = disabled ? styles.disabled : ''
	const secondaryButtonClass = secondary ? styles["button--secondary"] : ''

	return(
		<button className={`${styles.button} ${disbaledButtonClass} ${secondaryButtonClass}`}>
			{ anchor }
		</button>
	)
}

export default Button