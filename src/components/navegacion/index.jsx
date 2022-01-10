import "./style.css"
import { Link } from "react-router-dom"


export const Navbar = () => {
    return  <div className = "containerNav" > 
                <ul className = "lista">
                    <li className = "link"><Link to="">Inicio</Link></li>
                    <li className = "link"><Link to="/productos">Productos</Link></li>
                    <li className = "link"><Link to="/categoria/guantes">Guantes</Link></li>
                    <li className = "link"><Link to="/categoria/bucales">Bucales</Link></li>
                    <li className = "link"><Link to="/categoria/tibiales">Tibiales</Link></li>
                </ul>
   

            </div>
}