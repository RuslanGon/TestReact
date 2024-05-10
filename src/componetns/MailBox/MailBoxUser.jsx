import clsx from 'clsx';
import css from '../MailBox/MailBoxUser.module.css'

const MailBoxUser = ({ boxTitle, mailCounter = 0,boxUsers  }) => {
    const isMailBoxFull = mailCounter === 0
  return (
    <div className={clsx(css.mailbox, {[css.full] :isMailBoxFull })}>
      <h2 className={css.title}>{boxTitle}</h2>
      {mailCounter === 0 ? (
        <p><b>К сожилению сейчас нет активных ячеек</b></p>
      ) : (
        <p>Количество активных ячеек {mailCounter}</p>
      )}
      <ul>
        {Array.isArray(boxUsers) && boxUsers.map(user => {
            return <li key={user.id}>{user.userEmail}</li>
        })}
      </ul>
    </div>
  );
};

export default MailBoxUser;
