

const MailboxFilter = ({filter, onChangeFilter}) => {
  return (
<section>
        <h3>Search user by name or emaile</h3>
        <input  type="text" placeholder='🔍  search...' value={filter} onChange={onChangeFilter} />
      </section>
  )
}

export default MailboxFilter