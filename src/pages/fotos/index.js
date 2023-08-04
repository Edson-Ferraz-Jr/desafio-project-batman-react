import Header from "../../components/header";
import Footer from "../../components/footer";
import Gallery from "../../components/gallery";
import StyledTitle from "../../components/styledTitle";

function Fotos() {
    return (
        <>
            <Header />
            
            <StyledTitle title='Galeria' />

            <Gallery />

            <Footer />
        </>
    )
}

export default Fotos;
