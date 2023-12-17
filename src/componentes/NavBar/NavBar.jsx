import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header> 
     <Link to="/"> <h1 className="tituloPrincipal">Tienda urbana</h1></Link>
    <nav>   
      <ul>
         <li>
            <NavLink to="/"> Home </NavLink>
         </li>
         <li>
            <NavLink to="/Accesorios"> Accesorios </NavLink>
         </li>
         <li>
            <NavLink to="/Remeras"> Remeras </NavLink>
         </li>
         <li>
            <NavLink to="/Pantalones"> Pantalones </NavLink>
         </li>

      </ul>
    </nav>    

    <CartWidget/>

    
    </header>
  )
}

export default NavBar