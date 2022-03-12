import "./Stakeholder.css"

const Stakeholder = ({ stakeholderData, documents, buyerOrSeller }) => {
  const { name, email } = stakeholderData

  return (
    <div className="container">
      <div className="row"><span>Name: </span><span>{name}</span></div>
      <div className="row"><span>Email: </span><span>{email}</span></div>
      <div className="row"><span colSpan={2} className="stakeholder-involvement">{buyerOrSeller}</span></div>
      {
        documents.map((doc) => {
          return <div key={doc.id} className="row">
            <span>{doc.type.split('_').join(" ")}:</span> <span>{doc[`${buyerOrSeller}Status`]}</span></div>
        })
      }
      
    </div>
  )
}

export default Stakeholder