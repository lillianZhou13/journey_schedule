export default function UserList({users}) {
    return (
        <div className="card-body p-1">
         <h2 className="card-header">User List</h2>
         <ul className="list-group">
           {users.map(user=>(
               <li key={user.id} className="list-group-item">
                   {user.displayName}
               </li>
           ))} 
           </ul> 
          
        </div>
    )
}
