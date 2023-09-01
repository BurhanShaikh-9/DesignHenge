import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./component/header";
import { HomePage } from "./pages/homePage";
import {Footer} from './component/Footer'

function App() {
    return (
        <>
            <Header />
            <HomePage />
            <Footer/>
        </>
    );
}

export default App;
