import React from 'react'
import styles from './CompositionGridList.module.scss'

const CompositionGridList = (props) => {
	return(
		<div className={styles["grid-list"]}>
			{props.children}
		</div>
	)
}

export default CompositionGridList