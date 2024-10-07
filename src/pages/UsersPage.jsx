import axios from "axios";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]); // 

  useEffect(() => {
    async function fetchImages() {
      try {
        const { data } = await axios.get("https://dummyjson.com/users");
        console.log(data);
        setUsers(data.products); 
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h2>Images</h2>
      <ul>
        {Array.isArray(users) && users.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
