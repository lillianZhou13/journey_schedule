
import { useFirestore} from '../hooks/useFirestore';
import styles from './ShoppingList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faShare,faCheckCircle,faTrashAlt } from '@fortawesome/free-solid-svg-icons'




export default function ShoppingList({lists,userId}) {
    const { deleteDocument,response} = useFirestore('lists');
    const {} = useFirestore("lists");
    const handleDelete = (id) =>{
       /* const ref = doc(db,'lists',id);
        await deleteDoc(ref);*/
     deleteDocument(id);
    }

    const handleClick =(id) =>{

    }
    

    return (
        <div className="p-1" >
         <table className="table">
             <thead>
             <tr>
                 <th col="2">Item</th>
                 <th col="1">Is Share</th>
                 <th col="1">Is Ready</th>
                 <th col ="1">Delete</th>
             </tr>
             </thead>
         <tbody className={styles['shopping-list']}>

            {lists.map(list=>(
                <tr key={list.id}>
                <td col="2" className="item">{list.item}
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className={styles.edit}
                    size="xs" 
                    onClick={()=>handleClick(list.id)}/>
              </td>
                <td col="1" className={styles.shareable}>
                <FontAwesomeIcon icon={faShare} color={list.shareable ? "#1f9751":""}/></td>
                <td col="1" className={styles.ready}>
                <FontAwesomeIcon icon={faCheckCircle} color={list.itemReady ? "#1f9751":""} />
                </td>
                <td col="1" className={styles.delete}>
                    <FontAwesomeIcon 
                    icon={faTrashAlt} 
                    onClick={()=>handleDelete(list.id)}/>
               
                </td>
                </tr>
            ))}
            
        </tbody>
       </table>
     </div>
    )
}
