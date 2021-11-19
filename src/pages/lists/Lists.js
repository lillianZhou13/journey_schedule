import { useAuthContext } from '../../hooks/useAuthContext'
//components

import ShoppingList from '../../components/ShoppingList'
import AddListForm from '../../components/AddListForm'
//hooks
import { useCollection } from '../../hooks/useCollection'
//styles
import styles from './Lists.module.css'

export default function Lists() {
  const { user } = useAuthContext()

  const { documents: lists } = useCollection(
    'lists',
    ['userId', '==', user.uid],
    ['createdAt', 'DESC']
  )

  return (
    <main className="container">
      <div className="row my-5">
        <h2 className={styles['title']}>Item List</h2>
        <div className="col-lg-7">
          {lists && <ShoppingList lists={lists} userId={user.uid} />}
        </div>
        <div className="col-lg-5">
          <AddListForm userId={user.uid} />
        </div>
      </div>
    </main>
  )
}
