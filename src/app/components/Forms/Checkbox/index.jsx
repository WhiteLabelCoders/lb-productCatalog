import React, { useState } from 'react'
import styles from './Checkbox.module.scss'

const Checkbox = (props) => {
	const { id, label, onChange } = props
	const [checkboxChecked, setCheckboxChecked] = useState(false)
	const toggleCheckboxChecked = () => {
		setCheckboxChecked(!checkboxChecked)
		onChange({id: id, isChecked: !checkboxChecked})
	}

	return(
		<div className={`${styles.checkbox} checkbox`}>
			<input type="checkbox" id={id} name={id} onChange={toggleCheckboxChecked}/>
			<label className={checkboxChecked ? styles.checked : null} htmlFor={id}>{label}</label>
		</div>
	)
}

export default Checkbox