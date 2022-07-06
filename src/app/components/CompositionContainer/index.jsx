import React from 'react'
import styles from './CompositionContainer.module.scss'

const CompositionContainer = (props) => {
	return(
		<div className={`container ${styles.container}`}>
			{props.children}
		</div>
	)
}

export default CompositionContainer