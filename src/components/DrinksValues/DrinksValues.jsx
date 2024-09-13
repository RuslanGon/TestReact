// drinks = {beer: 5, whiskey: 3, wine: 1}



const DrinksValues = ({drinks, drinksTotal}) => {

 

  return (
    <ul>
        <li>Beer: {drinks.beer}</li>
        <li>Whiskey: {drinks.whiskey}</li>
        <li>Wino: {drinks.wine}</li>
        <li><b>Total: {drinksTotal}</b></li>
    </ul>
  )
}

export default DrinksValues