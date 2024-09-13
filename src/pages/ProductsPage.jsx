
import "../App.css";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";
import ProductList from "../components/ProductList/ProductList.jsx";
import { useProductSearch } from "../hooks/useProductSearch.jsx";

const ProductsPage = () => {
 
   const { products, isLoading, isError} = useProductSearch({isSearchPage: false});

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
      {products && <ProductList products={products} />}
    </div>
  );
};

export default ProductsPage;
