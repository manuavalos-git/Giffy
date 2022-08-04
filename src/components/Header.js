import './Header.css'
import {Link} from "wouter";

function Header(){

    return <div className="header">
    <Link to='/gif/comida'> Comida </Link>
    <Link to='/gif/ufc' > UFC </Link>
    <Link to='/gif/boxeo'> Boxeo </Link>
    </div>
}

export default Header;