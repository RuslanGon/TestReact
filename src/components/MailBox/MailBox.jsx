import css from "../MailBox/MailBox.module.css";
import MailBoxItem from "../MailBoxItem/MailBoxItem.jsx";

const MailBox = ({ boxTitle, boxUser, onDeleteUser }) => {
  return (
    <div className={css.maildiv}>
      <h2 className={css.title}>{boxTitle}</h2>
      <ul>
        {Array.isArray(boxUser) &&
          boxUser.map((user) => {
            return <MailBoxItem key={user.id} user={user} onDeleteUser={onDeleteUser} />;
          })}
      </ul>
    </div>
  );
};

export default MailBox;
