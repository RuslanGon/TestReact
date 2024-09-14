import { useEffect, useState } from "react";
import { requestProducts, requestProductsByQuery } from "../services/api.js";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiGetProducts } from "../redux/productDetails/operations.js";

export const useProductSearch = ({isSearchPage = false}) => {

    // const [products, setProducts] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);
    // const [query, setQuery] = useState('')

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query')

const dispatch = useDispatch()
const products = useSelector(state => state.productDetails.products)
const isLoading = useSelector(state => state.productDetails.isLoading)
const isError = useSelector(state => state.productDetails.isError)

  
    useEffect(() => {
      if(isSearchPage) return
     dispatch(apiGetProducts())
    }, [isSearchPage, dispatch]);
  
  
  useEffect(() => {
  if(query === null) return
  
  async function fetchProductsByQuery() {
    try {
      setIsLoading(true);
      const data = await requestProductsByQuery(query);
      setProducts(data.products);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
  fetchProductsByQuery();
  }, [query])
  
    const onSetSearchQuery = (searchTerm) => {
      // setQuery(searchTerm);
      setSearchParams({query: searchTerm})
    };

  return { products, isLoading, isError, onSetSearchQuery }
}

