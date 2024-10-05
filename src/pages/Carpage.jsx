import { useEffect } from "react";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";
import CarList from "../components/CarList/CarList.jsx";
import SearchFormCar from "../components/SearchFormCar/SearchFormCar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { apiCarsByQuery, apiRequestCars } from "../redux/cars/operations.js";
import { selectCar, selectError, selectLoading, selectQuery } from "../redux/cars/selectors.js";
import { setQuery } from '../redux/cars/authSlice.js' 

const CarPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCar);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const query = useSelector(selectQuery);

  useEffect(() => {
    dispatch(apiRequestCars());
  }, [dispatch]);

  useEffect(() => {
    if (query) {
      dispatch(apiCarsByQuery(query));
    }
  }, [dispatch, query]);

  const searchQueryCar = (searchTerm) => {
    dispatch(setQuery(searchTerm)); 
  };

  return (
    <div>
      <h1>Campers</h1>
      <SearchFormCar searchQueryCar={searchQueryCar} />
      {loading && <Loader />}
      {error && <Error />}
      <CarList cars={cars} />
    </div>
  );
};

export default CarPage;
