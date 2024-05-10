import { useEffect } from "react"


const DrinksCounter = ({HandleLogDrink, onTogleMiniBar}) => {

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
}, [])

  return (
    <div>
        <button onClick={() => HandleLogDrink('beer')}>Beer</button>
        <button onClick={() => HandleLogDrink('whiskey')}>Whiskey</button>
        <button onClick={() => HandleLogDrink('wine')}>Wine</button>
        
        
    </div>
  )
}

export default DrinksCounter