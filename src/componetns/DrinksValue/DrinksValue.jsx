


const DrinksValue = ({drinks, total}) => {


  return (
    <ul>
        <li>Beer: {drinks.beer}</li>
        <li>Whiskey: {drinks.whiskey}</li>
        <li>Wine: {drinks.wine}</li>
        <li>Total: {total}</li>
    </ul>
  )
}

export default DrinksValue