const MailBoxUser = ({ boxTitle, MailCounter = 0 }) => {
  return (
    <div>
      <h2>{boxTitle}</h2>
      {MailCounter === 0 ? (
        <p>К сожилению сейчас нет активных ячеек</p>
      ) : (
        <p>Количество активных ячеек {MailCounter}</p>
      )}
      <ul>
        <li>Ruslan@gmail.com</li>
        <li>Lena@gmail.com</li>
        <li>Igor@gmail.com</li>
      </ul>
    </div>
  );
};

export default MailBoxUser;
