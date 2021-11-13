export default function UserList({users}) {
    return (
        <div>
           {users.map(user=>(
               <li key={user.id}>
                   {user.username}
               </li>
           ))}  
        </div>
    )
}
