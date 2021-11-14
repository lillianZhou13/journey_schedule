
import { useAuthContext } from "../../hooks/useAuthContext";
//components
import UserList from "../../components/UserList";
import ShoppingList from "../../components/ShoppingList";
import AddListForm from "../../components/AddListForm";
//hooks
import { useCollection } from "../../hooks/useCollection";
//styles
import styles from './Lists.module.css';

export default function Lists() {
  const { user } = useAuthContext();
   const { documents:users} =  useCollection('users');
   const { documents:lists} = useCollection(
     "lists",
     ['userId','==',user.uid],
     ['createdAt','DESC'])
   
    return (
        <div className="row my-5">
            <div className="col-md-12 card">
              {users && <UserList users={users}/>}
            </div>
            <h2 className={styles['title']}>Item List</h2>
             <div className="col-md-7">
              {lists && <ShoppingList lists={lists} userId={user.uid}/>}
            </div>
            <div className="col-md-5">
            <AddListForm userId = {user.uid}/>
            </div>
           
        </div>
    )
}

 
    
 