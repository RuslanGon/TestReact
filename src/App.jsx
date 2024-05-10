
import './App.css'
import MailBoxUser from './componetns/MailBox/MailBoxUser'


function App() {
  

  return (
    <div>
    <MailBoxUser boxTitle='Meest Express' MailCounter={5} />
    <MailBoxUser boxTitle='Nova Poshta' MailCounter={3} />
    <MailBoxUser boxTitle='Ukr Poshta' />

    </div>
  )
}

export default App
