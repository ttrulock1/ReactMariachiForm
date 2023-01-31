import { useState, useEffect } from "react";
import { register, login, logout, auth, getAllUsers, updateUserData, getUserData } from "../api/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function useAuth() {
    const [authError, setAuthError] = useState(null)
    const [userData, setUserData] = useState(undefined)
    const [loadingUserData, setLoadingUserData] = useState(true)
    const [users, setUsers] = useState([])
    const [user, loadingUser] = useAuthState(auth)

    useEffect(() => {
        async function fetchUsers() {
            setUsers(await getAllUsers())
        }
        if (userData?.admin) {
            fetchUsers()
        }else{
            setUsers([])
        }
        console.log(userData)
    }, [userData])

    useEffect(() => {
        async function fetchUser() {
            setUserData(await getUserData(user.uid))
            setLoadingUserData(false)
        }
        console.log(user)
        if(user){
            fetchUser()
        } else{
            setUserData(undefined)
        }
    }, [user])

    useEffect(()=>{console.error(authError)},[authError])

    async function attemptSaveData(newUserData) {
        try {
            setUserData(await updateUserData({...newUserData, uid:user.uid}))

        } catch (error) {
            setAuthError(error)
        }
    }

    async function attemptSaveOtherData(otherUserData){
        try {
            await updateUserData(otherUserData)
        } catch (error){
            setAuthError(error)
        }
    }


    async function attemptRegister(credentials) {
        try {
            await register(credentials)
        } catch (error) {
            setAuthError(error)
        }
    }

    async function attemptLogin(credentials) {
        try {
            await login(credentials)
        } catch (error) {
            setAuthError(error)
        }
    }

    async function attemptLogout() {
        try {
            await logout()
        } catch (error) {
            setAuthError(error)
        }
    }

    return { attemptRegister, attemptLogin, attemptLogout, authError, loading: loadingUserData || loadingUser, users, admin: userData?.admin, user, userData, attemptSaveData, attemptSaveOtherData }
}

