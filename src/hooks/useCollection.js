import {useState, useEffect,useRef} from 'react';
import { db } from '../firebase/config';
//firebase imports
import {collection,onSnapshot,query,where} from 'firebase/firestore'


export const useCollection =(c,_q,_o)=> {
    const [documents,setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const q = useRef(_q).current;
    const o= useRef(_o).current;

    useEffect(() => {
        let ref = collection(db,c);
        if(q){
            ref= query(ref,where(...q));
        }
        if(o){
            
        }
        const unsub = onSnapshot(ref,(snapshot)=>{
          let results = [];
          snapshot.docs.forEach(doc=>{
              results.push({id:doc.id,...doc.data()})
          })
           setDocuments(results);
           setError(null);
        },(err)=>{
            console.log("err from useCollection", err);
            setError("Could Not Fetch Data");
        })
        //unsubscribe on unmount
        return () => unsub()
    }, [c,q,o])
    return {documents,error}
}


