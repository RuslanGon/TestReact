
import { useState } from 'react'
import './App.css'
import DrinksCounter from './componetns/DrinksCounter/DrinksCounter'
import DrinksValue from './componetns/DrinksValue/DrinksValue'
import MailBoxUser from './componetns/MailBox/MailBoxUser'
import MeetExspressUser from './componetns/MailBox/meestExpress.json'
import NovaPoshtasUser from './componetns/MailBox/novaPoshta.json'
import UkrPoshtaUser from './componetns/MailBox/ukrPoshta.json'

function App() {
  
  const initialDrinks = { beer: 5, whiskey: 3, wine:1 }

  const [counter, setCounter] = useState(0)
  

  const HandleIncrement = () => {
    setCounter(counter +1)
  }
  const HandleDecrement = () => {
    if(counter === 0) return
    setCounter(counter -1)
}


  const HandleLogDrink = (drinkName) => {
    
    console.log(drinkName);
  }

  return (
    <div>
    <MailBoxUser boxTitle='Meest Express' mailCounter={5} boxUsers={MeetExspressUser} />
    <MailBoxUser boxTitle='Nova Poshta' mailCounter={3} boxUsers={NovaPoshtasUser}  />
    <MailBoxUser boxTitle='Ukr Poshta' boxUsers={UkrPoshtaUser}  />
    <button onClick={HandleIncrement}>Counter {counter}</button>
    <button onClick={HandleDecrement}>Decrement</button>
    <DrinksValue drinks={initialDrinks} />
    <DrinksCounter HandleLogDrink={HandleLogDrink} />
   

    </div>
  )
}

export default App
