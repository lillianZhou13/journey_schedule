import { useState, useEffect } from 'react'
//hooks
import { useAuthContext } from '../hooks/useAuthContext'
import { useFirestore } from '../hooks/useFirestore'
//styles
import styles from './AddListForm.module.css'

export default function AddCostForm() {
  const { user } = useAuthContext()
  const { addNewDoc, response } = useFirestore('costs')
  //local state
  const [item, setItem] = useState('')
  const [amount, setAmount] = useState(0)
  const [isSplited, setIsSplited] = useState(false)
  const [ownTo, setOwnTo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addNewDoc({
      userId: user.uid,
      item,
      amount: amount.toFixed(2),
      isSplited: isSplited,
      ownTo: ownTo
    })
  }
  //reset form after submit
  useEffect(() => {
    if (response.success) {
      setItem('')
      setAmount(0)
      setIsSplited(false)
      setOwnTo('')
    }
  }, [response.success])
  return (
    <form className={styles['add-list-form']} onSubmit={handleSubmit}>
      <div className="form-group d-flex justify-content-center">
        <label htmlFor="item" className="col-sm-2 col-form-label">
          Item:
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            onChange={e => setItem(e.target.value.trim())}
            className="form-control"
            value={item}
          />
        </div>
      </div>
      <div className="form-group d-flex justify-content-center">
        <label htmlFor="amount" className="col-sm-2 col-form-label">
          Amount:
        </label>
        <div className="col-sm-8">
          <input
            type="number"
            onChange={e => setAmount(e.target.valueAsNumber)}
            className="form-control"
            value={amount}
            required
          />
        </div>
      </div>
      <div className={styles['form-check']}>
        <input
          type="checkbox"
          onChange={() => setIsSplited(true)}
          checked={isSplited}
          className="form-check-input"
        />
        <label htmlFor="splited" className="form-check-label">
          Is it splited?
        </label>
      </div>
      <div className="form-group d-flex justify-content-center">
        <label htmlFor="ownTo" className="col-sm-2 col-form-label">
          Own To:
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            onChange={e => setOwnTo(e.target.value.trim())}
            className="form-control"
            value={ownTo}
            required
          />
        </div>
      </div>

      <button>Add On</button>
    </form>
  )
}
