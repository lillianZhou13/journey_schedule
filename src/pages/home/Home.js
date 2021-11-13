import { useState} from "react";

//components
import UserList from "../../components/UserList";
import ShoppingList from "../../components/ShoppingList";


import { useCollection } from "../../hooks/useCollection";
export default function Home() {

   const { documents:users} =  useCollection('user');
   const { documents:lists} = useCollection("lists");
    return (
        <div>
           {users && <UserList users={users}/>}
            Great Barrier Reef 
           {lists && <ShoppingList lists={lists}/>}
        </div>
    )
}
