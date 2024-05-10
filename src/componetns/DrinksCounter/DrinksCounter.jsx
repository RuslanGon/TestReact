

const DrinksCounter = ({HandleLogDrink}) => {
  return (
    <div>
        <button onClick={() => HandleLogDrink('beer')}>Beer</button>
        <button onClick={() => HandleLogDrink('whiskey')}>Whiskey</button>
        <button onClick={() => HandleLogDrink('wine')}>Wine</button>
        <button>Reset</button>
        
    </div>
  )
}

export default DrinksCounter