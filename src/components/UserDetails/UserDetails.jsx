import { useParams } from "react-router-dom";

const UserDetails = () => {

    const {userId} = useParams()

  return (
    <div>
      <h3>User Details: {userId}</h3>
      <div>
        <img src="" alt="" />
        <h4>firstName:</h4>
        <p>lastName:</p>
        <p>age:</p>
        <p>gender:</p>
        <p>phone:</p>
      </div>
    </div>
  );
};

export default UserDetails;
