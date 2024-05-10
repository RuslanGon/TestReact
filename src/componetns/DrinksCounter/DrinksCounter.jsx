import { useEffect } from "react"


const DrinksCounter = ({HandleLogDrink, onTogleMiniBar, handleReset, total}) => {

useEffect(() => {
const onKeyDown = (event)=> {
if(event.code === 'Escape'){
  onTogleMiniBar()
}
}
  window.addEventListener('keydown',onKeyDown )
  return () => {
    window.removeEventListener('keydown',onKeyDown)
  }
}, [onTogleMiniBar])

  return (
    <div>
        <button onClick={() => HandleLogDrink('beer')}>Beer</button>
        <button onClick={() => HandleLogDrink('whiskey')}>Whiskey</button>
        <button onClick={() => HandleLogDrink('wine')}>Wine</button>
        {total !== 0 && <button onClick={handleReset}>Reset</button>}
        
        
    </div>
  )
}

export default DrinksCounter