import React from "react";
//componets
import CostList from "../../components/CostList";
import AddCostForm from "../../components/AddCostForm";
//hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
//styles
import styles from './Cost.module.css';


export default function Cost() {
    const { user} = useAuthContext();
    const { documents:costLists,error} = useCollection('costs');
    return (
        <div className="row my-5">
        <h2 className={styles['title']}>Cost List</h2>
        {error && <p>{error}</p>}
        {!error && (
            <React.Fragment>
          <div className="col-md-7">
          {costLists && <CostList costLists={costLists} userId={user.uid}/>}
        </div>
        <div className="col-md-5">
          <AddCostForm userId = {user.uid}/>
        </div>
        </React.Fragment>
        )}
         
       
    </div> 
    )
}
