

const MailBoxList = ({boxUsers}) => {
  return (
    <ul>
        {Array.isArray(boxUsers) && boxUsers.map(user => {
            return <li key={user.id}>{user.userEmail}</li>
        })}
      </ul>
  )
}

export default MailBoxList