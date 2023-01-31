import { Link } from "react-router-dom"
import { NavBar, NavItem } from "./common"

export default function Nav({loggedIn}) {
    return <NavBar >
        {!loggedIn && <NavItem><Link to="/login">Login</Link></NavItem>}
        {!loggedIn && <NavItem><Link to="/register">Register</Link></NavItem>}
        <NavItem><Link to="/dashboard">Dashboard</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
        {loggedIn && <NavItem><Link to="/logout">Logout</Link></NavItem>}
    </NavBar>
}