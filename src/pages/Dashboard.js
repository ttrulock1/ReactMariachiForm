import { Navigate } from "react-router-dom"
import Questionaire from "./Questionaire"
import UserTable from "./UserTable";

export default function Dashboard({user, admin, users, onSave, userData}){
    if(!user){
      return  <Navigate to="/login"/>
    }
    if(admin){
        if(!users?.length){
            return <div>loading</div>
        }
        return <UserTable data={users} /> 
    }
    return <Questionaire onSubmit={onSave} data={userData} />
}