import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";
import CarList from "../components/CarList/CarList.jsx";
import SearchFormCar from "../components/SearchFormCar/SearchFormCar.jsx";

const CarPage = () => {

const [cars, setCars] = useState(null)
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false)
const [query, setQuery] = useState('')

useEffect(() => {
  async function fetchCars() {
    try {
      setLoading(true)
    const response = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers')
    setCars(response.data.items)
    } catch (error) {
      console.log(error);
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  fetchCars();
}, []);

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