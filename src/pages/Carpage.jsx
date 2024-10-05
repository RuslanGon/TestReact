import axios from "axios";
import { useEffect, useState } from "react";

const CarPage = () => {

const [cars, setCars] = useState(null)

useEffect(() => {
  async function fetchCars() {
    const {data} = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers')
    console.log(data);
    setCars(data.items)
  }
  fetchCars();
}, []);

  return (
    <div>
      <h1>Campers</h1>
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