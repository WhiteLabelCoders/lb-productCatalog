import React from 'react'
import styles from './CompositionMain.module.scss'

const CompositionMain = (props) => {
	return(
		<main className={styles.compositionmain}>
			{props.children}
		</main>
	)
}

export default CompositionMain