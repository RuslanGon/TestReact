import UsersItem from "./UsersItem.jsx";

const Users = ({ users }) => {
  return (
    <ul>
      {Array.isArray(users) &&
        users.map((user) => {
          return (
           <UsersItem user={user} key={user.id}/>
          );
        })}
    </ul>
  );
};

export default Users;
