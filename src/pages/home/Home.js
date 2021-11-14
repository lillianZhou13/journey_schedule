//hooks
import React from "react";
import UserList from "../../components/UserList";
import { useCollection } from "../../hooks/useCollection";

export default function Home() {
  const { documents:users} =  useCollection('users');
  const { documents:activities}  = useCollection('activities');
  console.log(activities);
  console.log(users);
  
  return (
    
    <div className="row">
      
      <div className="col-md-12 card">
              {users && <UserList users={users}/>}
       </div>
       <h2>Great Barrie Reef Schedule</h2>
       <table className="table">
       
       <thead>
        <tr>
            <th scope="col">Date</th>
            <th scope="col">Activity</th>
            <th scope="col">Note</th>
        </tr>
      </thead>
      <tbody>
        {activities && activities.map(activity=>(
         <tr key={activity.id}>
         
         <td>{activity.content}</td>
         <td>{activity.note}</td>
       </tr>
        ))}
        
      </tbody>
     </table>
     </div>
   
  )
}