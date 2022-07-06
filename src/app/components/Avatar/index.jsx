import React from 'react'
import styles from './Avatar.module.scss'

const Avatar = (props) => {
	const { imageSrc } = props

	return(
		<div className={styles.avatar}>
			<img src={imageSrc} alt="user" />
		</div>
	)
}

export default Avatar