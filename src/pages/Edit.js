import { useMemo } from "react"
import { Navigate, useParams, Link } from "react-router-dom"
import Questionaire from "./Questionaire"

export default function Edit({ loading, admin, onSave, users }) {
    const { id } = useParams()
    const user = useMemo(() => {
        return users?.find(({ uid }) => {
            return uid === id
        })
    }, [id, users])
    if (loading) {
        return <div>loading</div>
    }
    if (admin) {
        return <>
            <Link to="/dashboard">Dashboard</Link>
            <Questionaire onSubmit={(changes) => onSave({ ...changes, uid: id })} data={user} />
        </>
    }
    return <Navigate to="/login" />
}