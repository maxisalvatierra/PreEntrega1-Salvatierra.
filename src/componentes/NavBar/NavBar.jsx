import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
const NavBar = () => {
  return (
    <header> 
        <h1 className="tituloPrincipal">Tienda urbana</h1>
    <nav>
        <ul>
            <li>Remeras</li>
            <li>Pantalones</li>
            <li>Accesorios</li>
        </ul>
    </nav>    

    <CartWidget/>

    
    </header>
  )
}

export default NavBar