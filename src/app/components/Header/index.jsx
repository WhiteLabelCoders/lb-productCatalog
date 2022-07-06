import React from 'react'
import styles from './Header.module.scss'
import CompositionContainer from '../CompositionContainer'
import { ReactComponent as Logo } from './images/logo.svg'
import { SearchInput, Checkbox, Button } from '../Forms'
import { Link } from "react-router-dom"
import { AppRoute } from '../../../routing/AppRoute.enum'

const Header  = (props) => {
	const { sendFiltersToParent, sendSercheToParent } = props
	const reciveCheckbox = checkbox => {
		sendFiltersToParent(checkbox)
	}
	const reciveSerche = (inputValue) => {
		sendSercheToParent(inputValue)
	}

  return (
    <header className={styles.header}>
			<CompositionContainer>
				<div className={styles["header__logo"]}>
					<Link to={AppRoute.home}><Logo /></Link>
				</div>
				<div className={styles["header__menu"]}>
					<SearchInput onClick={reciveSerche}/>
					<div className={styles["header__filters"]}>
						<Checkbox onChange={reciveCheckbox} id="active" label="Active"/>
						<Checkbox onChange={reciveCheckbox} id="promo" label="Promo"/>
						<Link to={AppRoute.login}><Button anchor="Log in" secondary/></Link>
					</div>
				</div>
			</CompositionContainer>
    </header>
  )
}

export default Header