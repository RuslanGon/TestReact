
const CarList = ({cars}) => {
  return (
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
  )
}

export default CarList