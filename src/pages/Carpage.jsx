import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";

const CarPage = () => {

const [cars, setCars] = useState(null)
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false)

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

  return (
    <div>
      <h1>Campers</h1>
      {loading && <Loader/>}
      {error && <Error />}
      <ul>
     {Array.isArray(cars) && cars.map(car => {
      return (<li key={car.id}>
        <img width={550} height={250} src={car.gallery[0]?.original} alt={car.name} />
        <h2>Name: {car.name}</h2>
        <h3>Price: {car.price}</h3>
        <p>Rating: {car.rating}</p>
        <p>Location: {car.location}</p>
        <p>Form: {car.form}</p>
      </li>)
     }) }
      </ul>
    </div>
  );
};

export default CarPage