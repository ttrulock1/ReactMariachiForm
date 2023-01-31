import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import useAuth from "./hooks/useAuth";
import SignUp from "./pages/SignUp";

import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Questionaire from "./pages/Questionaire";
import Edit from "./pages/Edit";
import Nav from "./components/Nav";
import Logout from "./pages/Logout";
import { Image } from "./components/common";

export default function App() {
  const { attemptRegister, attemptLogin, attemptLogout, loading, users, admin, authError, user, userData, attemptSaveData, attemptSaveOtherData } = useAuth()
// const tableData = useMemo(()=> {
//   return users.map(()=>{})
//   return{
//     address:entry.address
//   }
// }, [users])

  return (
    <BrowserRouter>
      <Nav loggedIn={user}/>
      <Image src="https://www.tucsonmariachi.org/wp-content/uploads/2017/01/register-page.jpg"/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <SignUp onSubmit={attemptRegister} />} />

        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <LogIn onSubmit={attemptLogin} />} />

        <Route path="/dashboard" element={<Dashboard user={user} admin={userData?.admin} users={users} onSave={attemptSaveData} userData={userData}/>} />
        <Route path="/edit/:id" element={ <Edit loading={loading} admin={userData?.admin} users={users} onSave={attemptSaveOtherData}/>  } />
        <Route path= "/logout" element={<Logout logout={attemptLogout}/>} />
      </Routes>
    </BrowserRouter>
  );
}
