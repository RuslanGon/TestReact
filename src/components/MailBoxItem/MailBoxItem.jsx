import css from '../MailBoxItem/MailBoxItem.module.css';

const MailBoxItem = ({ user, onDeleteUser }) => {
  return (
    <>
      <p>Email: {user.userEmail}</p>
      <p className={css.name}>
        Name: <span
          style={{ backgroundColor: user.favColor }}
          className={css.color}
        ></span> {user.userName}
      </p>
      <button className={css.btn} type="button" onClick={() => onDeleteUser(user.id)}>❌ User</button>
    </>
  );
};

export default MailBoxItem;
