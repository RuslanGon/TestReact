import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";
import Users from "../components/Users/Users.jsx";
import UsersSearch from "../components/UsersSearch/UsersSearch.jsx";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const { data } = await axios.get("https://dummyjson.com/users");
        console.log(data);
        setUsers(data.users);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <UsersSearch />
      {loading && <Loader />}
      {error && <Error />}
      <Users users={users} />
    </div>
  );
};

export default UsersPage;
