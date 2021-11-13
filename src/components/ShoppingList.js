import { useState } from 'react';
import { db } from '../firebase/config';
import {collection, addDoc,doc,deleteDoc} from 'firebase/firestore';


export default function ShoppingList({lists}) {

    const [item, setItem] = useState(null);
    const handleSubmit = async(e) =>{
      e.preventDefault();
      const ref = collection(db, 'lists');
      await addDoc(ref,{ item });
      setItem("");
      console.log(item);
    }
    const handleDelete = async(id) =>{
        const ref = doc(db,'lists',id);
        await deleteDoc(ref);
    }

    return (
        <div>
            {lists.map(list=>(
                <li key={list.id}>{list.item}
                <span onClick={()=>handleDelete(list.id)}>Delete</span>
                </li>
            ))}
            <form className="add-on" onSubmit ={handleSubmit}>
               <div className="form-field">
                  <label htmlFor="item">Item:</label>
                  <input 
                  type="text"
                  onChange = {(e)=>setItem(e.target.value.trim())} 
                  value={item}
                  />
               </div>
               <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    )
}
