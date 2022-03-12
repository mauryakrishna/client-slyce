import { useEffect, useState } from "react"
import './App.css';

import Stakeholder from './Stakeholder/Stakeholder';
import Transaction from './Transaction';

function App() {
  const [transactionInfo, setTransactionInfo] = useState({
    transaction: {},
    buyer: {},
    seller: {},
    documents: []
  })

  const getUpdatedData = (destination, source) => {
    return {...Object.assign(destination, source)}
  }

  useEffect(() => {
    async function getTransactionInfo() {
      const transactionsResp = await fetch(`http://localhost:4000/users/transactions/100`)
      const transaction = await transactionsResp.json()
      setTransactionInfo(getUpdatedData(transactionInfo, { transaction }))

      fetch(`http://localhost:4000/users/${transaction.buyerId}`)
        .then(response => response.json())
        .then((result) => {
          setTransactionInfo(getUpdatedData(transactionInfo, { buyer: result }))
        })
      
      fetch(`http://localhost:4000/users/${transaction.sellerId}`)
        .then(response => response.json())
        .then((result) => {
          setTransactionInfo(getUpdatedData(transactionInfo, { seller: result }))
        })
      
      //get transaction related documents
      fetch(`http://localhost:4000/documents/${transaction.id}`)
        .then(response => response.json())
        .then(result => {
          setTransactionInfo(getUpdatedData(transactionInfo, { documents: result }))
        })
    }
    getTransactionInfo()
  }, [])

  return (
    <div className="App">
      <div>
        <Stakeholder 
          stakeholderData={transactionInfo.buyer} 
          documents={transactionInfo.documents} 
          buyerOrSeller={'buyer'} 
        />
      </div>
      <div>
      <Transaction {...transactionInfo.transaction} />
      </div>
      <div>
        <Stakeholder 
          stakeholderData={transactionInfo.seller} 
          documents={transactionInfo.documents} 
          buyerOrSeller={'seller'} 
        />
      </div>
    </div>
  );
}

export default App;
