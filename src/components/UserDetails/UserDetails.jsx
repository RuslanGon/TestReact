import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import { Error } from "../Error/Error.jsx";

const UserDetails = () => {
  const [user, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { userId } = useParams();

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://dummyjson.com/users/${userId}`
        );
        setUsers(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [userId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {user && (
        <div>
          <h3>User Details: {userId}</h3>
          <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
          <h4>First Name: {user.firstName}</h4>
          <p>Last Name: {user.lastName}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Phone: {user.phone}</p>
          <Link to={"/users"}>Go back</Link>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
