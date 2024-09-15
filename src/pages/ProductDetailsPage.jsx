import { Suspense, lazy, useEffect, useRef } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";
import { useDispatch, useSelector } from "react-redux";
import { apiRequestProductDetailsById } from "../redux/productDetails/operations.js";
import { selectIsError, selectIsLoading, selectProductDetails } from "../redux/productDetails/selectors.js";
// import CommentPage from "./CommentPage.jsx";
// import ReviewsPage from "./ReviewsPage.jsx";

const CommentPage = lazy(() => import('./CommentPage.jsx'))
const ReviewsPage = lazy(() => import('./ReviewsPage.jsx'))


const ProductDetailsPage = () => {
  const location = useLocation();
  const backRefLink = useRef(location.state ?? "/");

  const { productId } = useParams();

  // const [productDetails, setProductDetails] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const dispatch = useDispatch()

const productDetails = useSelector(selectProductDetails)
const isLoading = useSelector(selectIsLoading)
const isError = useSelector(selectIsError)

useEffect(() => {
dispatch(apiRequestProductDetailsById(productId))
}, [productId, dispatch])


  // useEffect(() => {
  //   async function fetchProductsDetails() {
  //     try {
  //       setIsLoading(true);
  //       const data = await requestProductsDetailsById(productId);
  //       setProductDetails(data);
  //     } catch {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchProductsDetails();
  // }, [productId]);

  return (
    <div>
      <Link style={{ fontSize: "20px", color: "black"}} to={backRefLink.current}>
        Go <span style={{ fontSize: "30px" }}>🔙</span>
      </Link>
      {isLoading && <Loader />}
      {isError && <Error />}
      <h1>Product Details {productId}</h1>
      {productDetails !== null && (
        <div>
          <img src={productDetails.thumbnail} alt={productDetails.title} />
          <h2>Title: {productDetails.title}</h2>
          <p>Brand: {productDetails.brand}</p>
          <p>Price: ${productDetails.price}</p>
        </div>
      )}
      <Link to="comments">Comment</Link>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="comments" element={<CommentPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Routes>
      </Suspense>
    </div>
  );
};

export default ProductDetailsPage;
