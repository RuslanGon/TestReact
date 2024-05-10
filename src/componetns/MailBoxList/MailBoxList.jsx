import MailBoxListItem from "../MailBoxListItem/MailBoxListItem"


const MailBoxList = ({boxUsers}) => {
  return (
    <ul>
        {Array.isArray(boxUsers) && boxUsers.map(user => {
            return <MailBoxListItem user={user} key={user.id} />
        })}
      </ul>
  )
}

export default MailBoxList