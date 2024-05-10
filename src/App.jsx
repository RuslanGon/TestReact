
import './App.css'
import MailBoxUser from './componetns/MailBox/MailBoxUser'
import MeetExspressUser from './componetns/MailBox/meestExpress.json'
import NovaPoshtasUser from './componetns/MailBox/novaPoshta.json'
import UkrPoshtaUser from './componetns/MailBox/ukrPoshta.json'

function App() {
  

  return (
    <div>
    <MailBoxUser boxTitle='Meest Express' mailCounter={5} boxUsers={MeetExspressUser} />
    <MailBoxUser boxTitle='Nova Poshta' mailCounter={3} boxUsers={NovaPoshtasUser}  />
    <MailBoxUser boxTitle='Ukr Poshta' boxUsers={UkrPoshtaUser}  />

    </div>
  )
}

export default App
