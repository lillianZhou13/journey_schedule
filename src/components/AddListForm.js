import { useState,useEffect } from 'react';
import {useFirestore} from '../hooks/useFirestore';

//styles
import styles from "../components/AddListForm.module.css";

export default function AddListForm({userId}) {
    const [item, setItem] = useState('');
    const [shareable, setShareable] = useState(false);
    const [itemReady, setItemReady] = useState(false);
    const {addNewDoc,response } = useFirestore("lists");

    const handleSubmit = (e) =>{
      e.preventDefault();
        addNewDoc({ 
            userId,
            item,
            "shareable":shareable,
            "itemReady":itemReady
        });
      }
     useEffect(()=>{
        if(response.success){
             setItem("");
             setShareable(false);
             setItemReady(false);
            }
        },[response.success])

    return (
        <form className={styles['add-list-form']} onSubmit ={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="item" className="col-sm-3 col-form-label">Item:</label>
           <div className="col-sm-9">
            <input 
            type="text"
            onChange = {(e)=>setItem(e.target.value.trim())} 
            className="form-control"
            value={item}
            />
           </div>
        </div>
        <div className={styles['form-check']}>
            <input type="checkbox"
             onChange = {()=>setShareable(true)}
             checked={shareable}
             className="form-check-input"
             / >
            <label htmlFor="shareable" className="form-check-label">Willing to share?</label>
         </div>
         <div className={styles['form-check']}>
            <input type="checkbox"
             onChange = {()=>setItemReady(true)}
             checked={itemReady}
             className="form-check-input"
             / >
            <label htmlFor="ready" className="form-check-label">Is ready?</label>
         </div>

        <button>Add On</button>
     </form>
    )
}
