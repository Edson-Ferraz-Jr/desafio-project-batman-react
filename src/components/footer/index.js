import './styles.css';
import Logo from '../../assets/logo.png';

function Footer() {
    return (
        <footer>
            <img id="logo" src={Logo} alt="logo" />
            
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Edson Ferraz</span>

            <nav className="footer-navigation">
                <ul className="footer-list">
                    <a href="/">
                        <li>Home</li>
                    </a>
                    
                    <a href="/fotos">
                        <li>Fotos</li>
                    </a>
                    
                    <a href="/comentarios">
                        <li>Comentários</li>
                    </a>
                    
                    <a href="/contato">
                        <li>Contato</li>
                    </a>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;
