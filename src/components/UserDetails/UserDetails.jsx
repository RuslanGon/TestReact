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
          <p>Username: {user.username}</p>
          <p>Birth Date: {user.birthDate}</p>
          <p>Blood Group: {user.bloodGroup}</p>
          <p>Height: {user.height}</p>
          <p>Weight: {user.weight}</p>
          <p>Eye Color: {user.eyeColor}</p>
          <h5>Hair:</h5>
          {user.hair ? (
            <>
              <p>Color: {user.hair.color}</p>
              <p>Type: {user.hair.type}</p>
            </>
          ) : (
            <p>Hair information not available</p>
          )}
          <h5>Address:</h5>
          {user.address ? (
            <p>
              {user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}, {user.address.country}
            </p>
          ) : (
            <p>Address information not available</p>
          )}
          <h5>University: {user.university}</h5>
          <h5>Company:</h5>
          {user.company ? (
            <>
              <p>Name: {user.company.name}</p>
              <p>Title: {user.company.title}</p>
              <p>Department: {user.company.department}</p>
              <p>
                Company Address: {user.company.address.address}, {user.company.address.city}, {user.company.address.state} {user.company.address.postalCode}, {user.company.address.country}
              </p>
            </>
          ) : (
            <p>Company information not available</p>
          )}
          <h5>Role: {user.role}</h5>
          <h5>Bank Information:</h5>
          {user.bank ? (
            <>
              <p>Card Number: {user.bank.cardNumber}</p>
              <p>Card Type: {user.bank.cardType}</p>
              <p>Card Expiry: {user.bank.cardExpire}</p>
            </>
          ) : (
            <p>Bank information not available</p>
          )}
          <Link to={"/users"}>Go back</Link>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
