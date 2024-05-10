
import { useState } from 'react'
import './App.css'
import DrinksCounter from './componetns/DrinksCounter/DrinksCounter'
import DrinksValue from './componetns/DrinksValue/DrinksValue'
import MailBoxUser from './componetns/MailBox/MailBoxUser'
import MeetExspressUser from './componetns/MailBox/meestExpress.json'
import NovaPoshtasUser from './componetns/MailBox/novaPoshta.json'
import UkrPoshtaUser from './componetns/MailBox/ukrPoshta.json'

function App() {

  const [counter, setCounter] = useState(0)
  const [drinks, setDrinks] = useState({ beer: 0, whiskey: 0, wine:0 })

  const HandleLogDrink = (drinkName) => {
    if(drinks[drinkName] === 2 && drinkName === 'beer') return
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

  return (
    <div>
    <MailBoxUser boxTitle='Meest Express' mailCounter={5} boxUsers={MeetExspressUser} />
    <MailBoxUser boxTitle='Nova Poshta' mailCounter={3} boxUsers={NovaPoshtasUser}  />
    <MailBoxUser boxTitle='Ukr Poshta' boxUsers={UkrPoshtaUser}  />
    <button onClick={HandleIncrement}>Counter {counter}</button>
    <button onClick={HandleDecrement}>-min</button>
    <DrinksValue drinks={drinks} total={total}/>
    <DrinksCounter HandleLogDrink={HandleLogDrink} />
   

    </div>
  )
}

export default App
