import { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import "./style.css"
const Banner = () => {
  
    const [loopNum, setLoopNum] = useState(0);

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);

    const period = 2000;
    const toRotate = [ "Developer", "Gamer", "Freenlancer" ];
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
      return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    return (  
        <section className="banner" id="home">
      <Container>
        <Col className="content-banner">
            <div className="hello">Hello,</div>
            <div className="items">My name is</div>
            <div className="items" style={{color: 'red'}}>Do Hoa Duy</div>
            <div className="items">I'm <span className="wrap" style={{color: "red"}}>{text}</span></div>
            {/* <button onClick={() => console.log('connect')}>PORTPOLD</button> */}
            <Button variant="danger">PORTPOLD</Button>{' '}
   
        </Col>
       
      </Container>
    </section>
    );
}
 
export default Banner;