
import { useEffect, useState } from 'react'
import './App.css'
import DrinksCounter from './componetns/DrinksCounter/DrinksCounter'
import DrinksValue from './componetns/DrinksValue/DrinksValue'
import MailBoxUser from './componetns/MailBox/MailBoxUser'
import MeetExspressUser from './componetns/MailBox/meestExpress.json'
import NovaPoshtasUser from './componetns/MailBox/novaPoshta.json'
import UkrPoshtaUser from './componetns/MailBox/ukrPoshta.json'

function App() {
  const initialDrinks = { beer: 0, whiskey: 0, wine:0 }
  const [counter, setCounter] = useState(0)
  const [isVisibl, setIsVisibl] = useState(false)
  const [drinks, setDrinks] = useState(() => {
  const stringiDrinks = localStorage.getItem('drinksValue') 
  const parseDrinks = JSON.parse(stringiDrinks) ?? {initialDrinks}
  return parseDrinks
  })
  

  const onTogleMiniBar = () => {
    setIsVisibl(!isVisibl)
  }

  const HandleLogDrink = (drinkName) => {
    if(drinks[drinkName] === 7 && drinkName === 'beer') return
    setDrinks({...drinks, [drinkName]: drinks[drinkName] + 1})
  }

  const total = drinks.beer + drinks.whiskey + drinks.wine
  
  const HandleIncrement = () => {
    setCounter(counter +1)
  }
  const HandleDecrement = () => {
    if(counter === 0) return
    setCounter(counter -1)
}

useEffect(() => {
localStorage.setItem('drinksValue', JSON.stringify(drinks))
}, [drinks])

const handleReset = () => {
  setDrinks(initialDrinks)
}

  return (
    <div>
      <MailBoxUser
        boxTitle="Meest Express"
        mailCounter={5}
        boxUsers={MeetExspressUser}
      />
      <MailBoxUser
        boxTitle="Nova Poshta"
        mailCounter={3}
        boxUsers={NovaPoshtasUser}
      />
      <MailBoxUser boxTitle="Ukr Poshta" boxUsers={UkrPoshtaUser} />
      <button onClick={HandleIncrement}>Counter {counter}</button>
      <button onClick={HandleDecrement}>-min</button>
      <br />
      <button onClick={onTogleMiniBar}>{isVisibl ? 'Hide' : "Shom"} mini-bar</button>
      
      {isVisibl && (
        <>
          <DrinksValue drinks={drinks} total={total} />
          <DrinksCounter HandleLogDrink={HandleLogDrink} onTogleMiniBar={onTogleMiniBar} handleReset={handleReset} total={total} />
        </>
      )}
    </div>
  );
}

export default App
