import { Container, Col } from "react-bootstrap";
import "./style.css"
const Banner = () => {
    return (  
        <section className="banner" id="home">
      <Container>
        <Col className="content-banner">
            <div className="hello">Hello,</div>
            <div className="items">My name is</div>
            <div className="items" style={{color: 'red'}}>Do Hoa Duy</div>
            <div className="items">I'm <span className="wrap">{`Developer`}</span></div>
            <button onClick={() => console.log('connect')}>PORTPOLD</button>   
        </Col>
       
      </Container>
    </section>
    );
}
 
export default Banner;