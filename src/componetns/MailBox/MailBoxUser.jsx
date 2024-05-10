import clsx from 'clsx';
import css from '../MailBox/MailBoxUser.module.css'
import MailBoxList from '../MailBoxList/MailBoxList';

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
      <MailBoxList boxUsers={boxUsers} />
    </div>
  );
};

export default MailBoxUser;
