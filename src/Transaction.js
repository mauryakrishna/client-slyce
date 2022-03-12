
const Transaction = ({ id, name, shareCount, sharePrice, status }) => {
  return (
    <div>
      <div><span>Transaction Name: </span><span>{name}</span></div>
      <div><span>Share count: </span><span>{shareCount}</span></div>
      <div><span>Price per share: </span><span>{sharePrice}</span></div>
      <div><span>Status: </span><span>{status}</span></div>
    </div>
  )
}

export default Transaction