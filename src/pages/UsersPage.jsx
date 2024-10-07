import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";
import Users from "../components/Users/Users.jsx";
import UsersSearch from "../components/UsersSearch/UsersSearch.jsx";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const { data } = await axios.get("https://dummyjson.com/users");
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

  useEffect(() => {
    async function fetchUsersByQuery() {
      if (query.length === 0) return;
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://dummyjson.com/users/search?q=${query}`
        );
        setUsers(data.users);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchUsersByQuery();
  }, [query]);

  const searchUser = (name) => {
    setQuery(name);
  };

  return (
    <div>
      <h2>Users</h2>
      <UsersSearch searchUser={searchUser} />
      <Link to={"/campers"}>go back</Link>
      {loading && <Loader />}
      {error && <Error />}
      <Users users={users} />
    </div>
  );
};

export default UsersPage;
