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
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const usersPerPage = 5; 

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://dummyjson.com/users?limit=${usersPerPage}&skip=${(page - 1) * usersPerPage}`
        );
        setUsers(data.users);
        setTotalPages(Math.ceil(data.total / usersPerPage));
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [page]);

  useEffect(() => {
    async function fetchUsersByQuery() {
      if (query.length === 0) return;
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://dummyjson.com/users/search?q=${query}&limit=${usersPerPage}&skip=${(page - 1) * usersPerPage}`
        );
        setUsers(data.users);
        setTotalPages(Math.ceil(data.total / usersPerPage));
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchUsersByQuery();
  }, [query, page]);

  const searchUser = (name) => {
    setQuery(name);
    setPage(1); 
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <h2>Users</h2>
      <UsersSearch searchUser={searchUser} />
      {loading && <Loader />}
      {error && <Error />}
      <Users users={users} />
      <div>
       {page !== 1 && <button onClick={handlePreviousPage} disabled={page === 1}>
          back
        </button>}
        <span> Page {page} for {totalPages} </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          next
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
