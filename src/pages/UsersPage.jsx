import axios from "axios";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const { data } = await axios.get("https://dummyjson.com/users");
        console.log(data);
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
       {Array.isArray(users) && users.map((user) => {
        return <li key={user.id}>
        <img src={user.image} alt={user.firstName} />
        <h3>firstName: {user.firstName}</h3>
        <h3>lastName: {user.lastName}</h3>
        <p>age: {user.age}</p>
        <p>gender: {user.gender}</p>
        <p>phone: {user.phone}</p>
      </li>
       }) }
      </ul>
    </div>
  );
};

export default UsersPage;
