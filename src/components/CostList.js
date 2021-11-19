import { useFirestore } from '../hooks/useFirestore'
//styles
import styles from './CostList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function CostList({ costLists }) {
  const { deleteDocument, response } = useFirestore('costs')
  const handleDelete = id => {
    console.log('delete item called')
    /* const ref = doc(db,'lists',id);
        await deleteDoc(ref);*/
    deleteDocument(id)
  }
  const costInTotal = costLists.reduce(
    (total, costList) => (total += costList.amount),
    0
  )
  console.log(costLists)

  const ownToArray = costLists.reduce((acc, costList) => {
    if (costList.ownTo !== '') {
      let person = costList.ownTo

      if (acc.hasOwnProperty('person') && acc.person === costList.ownTo) {
        acc.amount = costList.amount
      } else {
        acc.person = costList.ownTo
        acc.amount = costList.amount
      }
    }
    return acc
  }, [])

  console.log('ownToArry', ownToArray)
  return (
    <div className="p-1">
      <table className="table">
        <thead>
          <tr>
            <th col="2">Item</th>
            <th col="1">Splited</th>
            <th col="2">Own To</th>
            <th col="2">Amount</th>
            <th col="1">Delete</th>
          </tr>
        </thead>

        <tbody className={styles['cost-list']}>
          {costLists.map(list => (
            <tr key={list.id}>
              <td col="2" className={styles.item}>
                {list.item}
              </td>
              <td col="1" className={styles['is-splited']}>
                <FontAwesomeIcon
                  icon={faColumns}
                  color={list.isSplited ? '#1f9751' : ''}
                />
              </td>
              <td col="2" className="own to">
                {list.ownTo}
              </td>
              <td col="2" className="amount">
                AU$:{list.amount.toFixed(2)}
              </td>
              <td col="1" className={styles.delete}>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => handleDelete(list.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.summary}>
        <p>Cost in total</p>
        <p>AU$:{costInTotal.toFixed(2)}</p>
      </div>

      {ownToArray && <p>{typeof ownToArray}</p>}
    </div>
  )
}
