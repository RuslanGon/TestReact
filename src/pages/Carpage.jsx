
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";
import CarList from "../components/CarList/CarList.jsx";
import SearchFormCar from "../components/SearchFormCar/SearchFormCar.jsx";
import { requestCars, requestCarsByQuery } from "../servicesCar/api.js";

const CarPage = () => {

const [cars, setCars] = useState(null)
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false)
const [query, setQuery] = useState('')


useEffect(() => {
  async function fetchCars() {
    try {
      setLoading(true);
      const data = await requestCars();
      setCars(data.items);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  fetchCars();
}, []);

useEffect(() => {
  if (query.length === 0) return;
  async function fetchCarsByQuery() {
    try {
      setLoading(true);
      const data = await requestCarsByQuery(query);
      setCars(data.items);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  fetchCarsByQuery();
}, [query]);

const searchQueryCar = (searchTerm) => {
setQuery(searchTerm)
}

  return (
    <div>
      <h1>Campers</h1>
      <SearchFormCar searchQueryCar={searchQueryCar} />
      {loading && <Loader/>}
      {error && <Error />}
     <CarList cars={cars} />
    </div>
  );
};

export default CarPage