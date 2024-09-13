
import '../App.css'
import MailBox from '../components/MailBox/MailBox.jsx'
import MeestExpress from '../../meest.json'
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import MAilBoxForm from '../components/MailBoxForm/MAilBoxForm.jsx';

function MailboxPage() {
  const [filter, setFilter] = useState('')
  const [users, setUsers] = useState(() => {
    const stringifyUsers = localStorage.getItem('users')
    if(!stringifyUsers) return MeestExpress
    const parseUsers = JSON.parse(stringifyUsers)
    return parseUsers
  })

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const onAddUsers = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    // setUsers([...users, finalUser]);
     setUsers((prevState) => [...prevState, finalUser])
  };

  const onDeleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  }

  const onChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  const filteredUsers = users.filter(user =>
    user.userName.toLowerCase().includes(filter.toLowerCase()) ||
    user.userEmail.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <MAilBoxForm onAddUsers={onAddUsers} />
      <section>
        <h3>Search user by name or emaile</h3>
        <input  type="text" placeholder='🔍  search...' value={filter} onChange={onChangeFilter} />
      </section>
      <br />
      <MailBox boxUser={filteredUsers} boxTitle="Meest Express" onDeleteUser={onDeleteUser}  />   
    </div>
  );
}

export default MailboxPage
