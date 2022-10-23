import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
  return (
    <div>
      <div className="d-flex justify-content-center text-light">
        
        <h1>Chess World</h1>
      </div>
      <div className="d-flex justify-content-center text-light">

        <h3>Learning The Way You Want</h3>
      </div>
<br />
      <Card className="card_1">
        <Card.Img id="chess_card_img" variant="top" src="hero-black.png" />
      </Card>
      <Container>
        <br />
        <Row>
          <Col>
            <Card.Img variant="top" src="giphy.gif" />
          </Col>
          <Col>
            <Card.Img variant="top" src="chessGif.gif" />
          </Col>
          <Col>
            <Card.Img variant="top" src="chess-old-man.gif" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/AAA_SVG_Chessboard_and_chess_pieces_06.svg/2000px-AAA_SVG_Chessboard_and_chess_pieces_06.svg.png"
            />
          </Col>
          <Col>
            <Card.Img
              variant="top"
              src="https://content.instructables.com/ORIG/FPI/EUBU/FD80BVW8/FPIEUBUFD80BVW8.jpg?auto=webp&fit=bounds&frame=1"
            />
          </Col>
          <Col>
            <Card.Img
              variant="top"
              src="https://mail.nothingbutchess.com/images/how_to_play_overview.png"
            />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="chess-black-and-white-wallpaper-4.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pexels-ramin-aghaei-6022438.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pieces-chess-boards-glass-wallpaper-preview.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
