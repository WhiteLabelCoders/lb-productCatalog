import React, { useState } from 'react'
import styles from './SearchInput.module.scss'
import { ReactComponent as Loupe } from './images/loupe.svg'

const SearchInput = (props) => {
	const { onClick } = props
	const placeholder = "Search"

	const [searchProducts, setSearchProducts] = useState("")
	const handleChange = event => {
    setSearchProducts(event.target.value)
  }

	const sendSearchValue = () => {
		onClick(searchProducts)
	}

	const handleKeypress = event => {
		if(event.key === 'Enter'){
			sendSearchValue()
		}
	}
	
	return(
		<div className={`${styles["search-input"]} search-input`}>
			<input 
				type="search" 
				id="product-search" 
				name="s" 
				aria-label="Search product" 
				placeholder={placeholder}
				onFocus={(e) => e.target.placeholder = ""}
				onBlur={(e) => e.target.placeholder = placeholder}
				value={searchProducts}
        onChange={handleChange}
				onKeyPress={handleKeypress}
			/>
			<button onClick={sendSearchValue}>
				<Loupe/>
			</button>
		</div>
	);
} 

export default SearchInput