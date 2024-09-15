
import '../App.css'
import MailBox from '../components/MailBox/MailBox.jsx'
// import MeestExpress from '../../meest.json'
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import MAilBoxForm from '../components/MailBoxForm/MAilBoxForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, setFilter } from '../redux/mailbox/mailboxReducer.js';
import { selectFilter, selectUsers } from '../redux/mailbox/selectors.js';
import MailboxFilter from '../components/MailboxFilter/MailboxFilter.jsx';

function MailboxPage() {
  // const [filter, setFilter] = useState('')
  // const [users, setUsers] = useState(() => {
  //   const stringifyUsers = localStorage.getItem('users')
  //   if(!stringifyUsers) return MeestExpress
  //   const parseUsers = JSON.parse(stringifyUsers)
  //   return parseUsers
  // })

  const dispatch = useDispatch()

 const users = useSelector(selectUsers)

 const filter = useSelector(selectFilter)


  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const onAddUsers = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    // const action = addUser(finalUser)

    dispatch(addUser(finalUser))

    // setUsers([...users, finalUser]);
    //  setUsers((prevState) => [...prevState, finalUser])
  };

  const onDeleteUser = (userId) => {
    dispatch(deleteUser(userId))
    // const action = deleteUser(userId)
    // setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  }

  const onChangeFilter = (event) => {
    dispatch(setFilter(event.target.value))
    // const action = setFilter(event.target.value)
    // setFilter(event.target.value)
  }

  const filteredUsers = users.filter(user =>
    user.userName.toLowerCase().includes(filter.toLowerCase()) ||
    user.userEmail.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <MAilBoxForm onAddUsers={onAddUsers} />
      <section>
       <MailboxFilter filter={filter} onChangeFilter={onChangeFilter}  />
      </section>
      <br />
      <MailBox boxUser={filteredUsers} boxTitle="Meest Express" onDeleteUser={onDeleteUser}  />   
    </div>
  );
}

export default MailboxPage
