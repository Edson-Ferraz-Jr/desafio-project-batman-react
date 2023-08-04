import './styles.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

function Header() {
    return (
        <header>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <img id="logo" src={Logo} />
            </Link>

            <nav className='menu'>
                <ul>
                    <Link to='/' style={{ textDecoration: 'none' }} >
                        <li>Home</li>
                    </Link>
                    
                    <Link to='/fotos'style={{ textDecoration: 'none' }} >
                        <li>Fotos</li>
                    </Link>

                    <Link to='/comentarios' style={{ textDecoration: 'none' }} >
                        <li>Comentários</li>
                    </Link>
                    
                    <Link to='/contato' style={{ textDecoration: 'none' }} >
                        <li>Contato</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
