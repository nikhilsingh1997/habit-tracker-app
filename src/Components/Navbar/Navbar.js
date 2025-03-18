import { Link, Outlet } from "react-router";
import styles from "./Navbar.module.css"
import logo from "../../Assets/logo.png"

export default function Navbar (){
    return (    <>
                <div 
                    className = {styles.navbarContainer} >
                    <img src = {logo} 
                         alt = "Navbar-Image"
                         className = {styles.navbarImage}
                     />
                     <ul>
                        <li>
                            <Link 
                                to = "/" 
                                >Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to = "/detailspage" 
                                style = {{marginRight : "11rem", 
                                          marginLeft : "1rem"}} 
                                          >Your Habits
                            </Link></li>
                     </ul>
                </div>
                <Outlet/>
                </>)
}