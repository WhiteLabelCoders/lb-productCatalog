import React, { useState, useEffect, useRef } from 'react'
import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';
import CompositionMain from '../../components/CompositionMain';
import CompositionContainer from '../../components/CompositionContainer'
import { useParams, useHistory } from "react-router-dom";

export const Products = () => {
  const [isFilterActiveProducActive, setIsFilterActiveProducActive] = useState(false)
  const [isFilterPromoProducActive, setIsFilterPromoProducActive] = useState(false)
  const [searchProducts, setSearchProducts] = useState("")
  
  const reciveFilters = checkbox => {
    switch (checkbox.id) {
      case 'active': 
        setIsFilterActiveProducActive(checkbox.isChecked)
        break
      case 'promo':
        setIsFilterPromoProducActive(checkbox.isChecked)
        break
      default:
    }
  }

  const reciveSerche = inputValue => {
    setSearchProducts(inputValue)
  }

  let { page } = useParams()
  let history = useHistory()
  const paginationHomePageLinkFix = page === undefined  ? 1 : page
  const [currentPage, setPaginationAndFilters] = useState(paginationHomePageLinkFix)
  
  useEffect(() => {
    setPaginationAndFilters(paginationHomePageLinkFix)
  }, [paginationHomePageLinkFix])

  const firstUpdate = useRef(true)
  useEffect(() => {
    if(!firstUpdate.current) {
      history.push("/")
    }
    firstUpdate.current = false
  }, [isFilterActiveProducActive, isFilterPromoProducActive, searchProducts, history])

  return (
    <>
      <Header sendFiltersToParent={reciveFilters} sendSercheToParent={reciveSerche}/>
      <CompositionMain>
        <CompositionContainer>
          <ProductsList 
            getDataForPage={currentPage} 
            getPromoProduct={isFilterPromoProducActive}
            getActiveProduct={isFilterActiveProducActive}
            searchProducts={searchProducts}
          />
        </CompositionContainer>
      </CompositionMain>
    </>
  );
}