import './styles.css';
import Footer from "../../components/footer";
import Header from "../../components/header";
import StyledTitle from '../../components/styledTitle';

function Contato() {
    return (
        <>
            <Header />
            
            <StyledTitle title='Contato' />

            <div className="form-container">
                <form action="" className="form">
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" placeholder="Insira seu nome" />
                    
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="example@example.com" />
        
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" id="message" rows="10" placeholder="Digite sua mensagem..."></textarea>

                    <button className="button">Enviar</button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default Contato;
