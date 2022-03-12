import "./Transaction.css"

const Transaction = ({ name, shareCount, sharePrice, status }) => {
  return (
    <div className="transaction-container">
      <div className="row"><span>Transaction Name: </span><span>{name}</span></div>
      <div className="row"><span>Share count: </span><span>{shareCount}</span></div>
      <div className="row"><span>Price per share: </span><span>{sharePrice}</span></div>
      <div className="row"><span>Status: </span><span>{status}</span></div>
    </div>
  )
}

export default Transaction