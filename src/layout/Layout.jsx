import Header from '../commons/Header';
import Footer from '../commons/Footer';
import ForumularioCarga from '../page/FormularioCarga/FormularioCarga';

export default function Layout () {
    return (
        <div>
            <Header />
            <main>
                <ForumularioCarga />
            </main>
            <Footer />
        </div>
    );
}