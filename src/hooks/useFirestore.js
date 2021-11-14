import { useState, useEffect,useReducer } from 'react';
import { db} from '../firebase/config';
import {collection,addDoc,Timestamp,doc,deleteDoc} from 'firebase/firestore';

const initialState = {
    isPending:false,
    error:null,
    documents:null,
    success:false
}
const firestoreRuducer =(state,action) =>{
  switch(action.type){
    case "IS_PENDING":
        return { ...state,isPending:true,success:false,documents:null,error:null };
    case "ADD_NEW_DOC":
        return { ...state,isPending:false,success:true,documents:action.payload,error:null};
    case "DELETE_DOC":
        return { ...state,isPending:false,success:true,documents:null}
    case "ERROR":
        return { ...state,isPending:false,success:false,documents:null,error:action.payload}
    default:
        return state;
  }
}

export const useFirestore = (c) =>{
  
   const [response,dispatch] = useReducer(firestoreRuducer,initialState);
   const [isCancelled, setIsCancelled] = useState(false);
   
   //collection ref
   const ref = collection(db, c);
   const dispatchIfNotCancelled =(action)=>{
       if(!isCancelled){ dispatch(action)}
   }
  // add on document
   const addNewDoc =  async(doc) =>{
       dispatchIfNotCancelled({type:"IS_PENDING"});
      
       try {
         const createdAt = Timestamp.fromDate(new Date());
         const addedDoc = await addDoc(ref,{...doc,createdAt});
         dispatchIfNotCancelled({type:"ADD_NEW_DOC",payload:addedDoc})

       }
       catch(err){
          dispatchIfNotCancelled({type:"ERROR",payload:err.message})
       }
   }
   // delete doc
   const deleteDocument = async(id) =>{
    dispatchIfNotCancelled({type:"IS_PENDING"});
    try{
         /* const ref = doc(db,'lists',id);
        await deleteDoc(ref);*/
        const deleteDocRef = doc(db,c,id);
      await deleteDoc(deleteDocRef);
      dispatchIfNotCancelled({type:"DELETE_DOC"})
    }
    catch(err){
        dispatchIfNotCancelled({type:"ERROR"});
    }
   }

   useEffect(()=>{
       return ()=>setIsCancelled(true);
   },[])

    return{ response,addNewDoc,deleteDocument}
}