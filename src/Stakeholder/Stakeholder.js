import "./Stakeholder.css"

const Stakeholder = ({ stakeholderData, documents, buyerOrSeller }) => {
  const { name, email } = stakeholderData

  return (
    <div className="container">
      <div><span>Name: </span><span>{name}</span></div>
      <div><span>Email: </span><span>{email}</span></div>
      <div><span colSpan={2} className="stakeholder-involvement">{buyerOrSeller}</span></div>
      {
        documents.map((doc) => {
          return <div key={doc.id}>
            <span>{doc.type.split('_').join(" ")}:</span> <span>{doc[`${buyerOrSeller}Status`]}</span></div>
        })
      }
      
    </div>
  )
}

export default Stakeholder