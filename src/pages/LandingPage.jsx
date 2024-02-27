import { Container, Row, Col } from "react-bootstrap"
import Slider from '../component/Slider.jsx'
import TLProduct from "./TLProduct.jsx";


const LandingPage = () => {
    return (
      <div className="landingpage">
            <header className="d-flex align-items-center w-100 h-100">
              <Container>
                <Slider />
              </Container>
            </header>
            <div className="submain">
              <Container>
                <TLProduct />
              </Container>
            </div>
      </div>
    );
}

export default LandingPage