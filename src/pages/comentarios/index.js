import Footer from "../../components/footer";
import Header from "../../components/header";
import ReviewsBox from "../../components/reviewsBox";
import StyledTitle from '../../components/styledTitle';

function Comentarios() {
    return (
        <>
            <Header />
            
            <StyledTitle title='Comentários' />

            <ReviewsBox />

            <Footer />
        </>
    )
}

export default Comentarios;
