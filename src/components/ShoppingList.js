
import { useFirestore} from '../hooks/useFirestore';
import styles from './ShoppingList.module.css'


export default function ShoppingList({lists,userId}) {
    const { deleteDocument,response} = useFirestore('lists');
    
    const handleDelete = (id) =>{
       /* const ref = doc(db,'lists',id);
        await deleteDoc(ref);*/
     deleteDocument(id);
    }
    

    return (
        <div className="p-1" >
        
         <ul className={styles['shopping-list']}>

            {lists.map(list=>(
                <li key={list.id} className="list-group-item">
                <p className="item">{list.item}</p>
                <p className="shareable">{list.shareable ? "share":"Not Share"}</p>
                <p className="ready">{list.itemReady? "Ready":"Not Ready"}</p>
                <button className={styles.cross} onClick={()=>handleDelete(list.id)}>X</button>
                </li>
            ))}
            
        </ul>
       
     </div>
    )
}
