//styles
import styles from './CostList.module.css'


export default function CostList({costLists}) {

    const handleDelete =(id)=>{
    console.log("delete item called");
    }
    const costInTotal = costLists.reduce((total,costList)=>
       total+=costList.amount,0);
       console.log(costLists);
    
    const ownToArray = costLists.reduce((acc,costList)=>{
       
       if(costList.ownTo !== ""){
           let person = costList.ownTo;
        
          if(acc.hasOwnProperty(person)&& person === costList.ownTo){
            acc[person] +=  costList.amount;
          }else{
            acc[person] = costList.amount;
          }
          
       }
     return acc;
      
    },[])
    
       

    console.log("ownToArry",ownToArray);
    return (
        <div className="p-1" >
        
        <ul className={styles['cost-list']}>

           {costLists.map(list=>(
               <li key={list.id} className="list-group-item">
               <p className="item">{list.item}</p>
               <p className="splited">{list.splited ? "splited":"Not Splited"}</p>
               <p className="oweto"> Own to{list.ownTo}</p>
               <p className="amount">AU$:{list.amount}</p>
               <button className={styles.cross} onClick={()=>handleDelete(list.id)}>X</button>
               </li>
           ))}
           
       </ul>
       <p>Cost in total(AU$):{costInTotal}</p>
       {ownToArray && ownToArray.map((key,val)=>(
           <p>{key}:{val}</p>
       ))}
     

    </div>
    )
}
