import { useEffect, useState } from "react"
import './App.css';

import Stakeholder from './Stakeholder/Stakeholder';
import Transaction from './Transaction/Transaction';
import fetchData from "./fetchData";

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
      const transaction = await fetchData(`/users/transactions/100`)
      setTransactionInfo(getUpdatedData(transactionInfo, { transaction }))

      fetchData(`/users/${transaction.buyerId}`)
        .then((result) => {
          setTransactionInfo(getUpdatedData(transactionInfo, { buyer: result }))
        })
      
      fetchData(`/users/${transaction.sellerId}`)
        .then((result) => {
          setTransactionInfo(getUpdatedData(transactionInfo, { seller: result }))
        })
      
      //get transaction related documents
      fetchData(`/documents/${transaction.id}`)
        .then(result => {
          setTransactionInfo(getUpdatedData(transactionInfo, { documents: result }))
        })
    }
    getTransactionInfo()
  }, [])

  return (
    <div className="App">
      <h1>Transaction Status</h1>
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
