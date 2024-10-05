import CarItem from "./CarItem.jsx"

const CarList = ({cars}) => {
  return (
    <ul>
     {Array.isArray(cars) && cars.map(car => {
      return (<CarItem car={car} key={car.id}/>)
     }) }
      </ul>
  )
}

export default CarList