import { Link } from "react-router-dom"

const UsersItem = ({user}) => {
  return (
    <li key={user.id}>
    <img src={user.image} alt={user.firstName} />
    <h3>firstName: {user.firstName}</h3>
    <p>lastName: {user.lastName}</p>
    <p>age: {user.age}</p>
    <p>gender: {user.gender}</p>
    <p>phone: {user.phone}</p>
    <Link to={`/users/${user.id}`}>See the details</Link>
  </li>
  )
}

export default UsersItem