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
        {cars.map(car => {

        }) <li>
          <img width={550} height={250} src="" alt="" />
          <h2>Name</h2>
          <h3>Price</h3>
          <p>Rating</p>
          <p>Location</p>
          <p>Form</p>
        </li>}
      </ul>
    </div>
  );
};

export default CarPage