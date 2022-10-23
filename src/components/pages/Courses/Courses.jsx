import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Courses.css"
export default function Courses({ item }) {
  return (
    <div>
      <br />
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card >
            <Card.Img 
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJM6ZbFQUw0KSIKn9Bpr0hVrOvJEOOqBafg&usqp=CAU"
            />
            <Card.Body className="cards_class">
              <Card.Title className="card_text">6-12</Card.Title>
              <Card.Text className="card_text">
               Courses for little kids that want to learn about chess and how to play chess and can meet new friends.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfPkeiH93TUGnvQbP3MjFEvQ0mnsODXdjeBA&usqp=CAU"
            />
            <Card.Body className="cards_class">
              <Card.Title className="card_text">12-18</Card.Title>
              <Card.Text className="card_text">
                Courses for teens and youth that want to learn more about chess and also meet new friends.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZswXqekO0c2NLN8ByXOCWHLjNCMff4z5kw&usqp=CAU"
            />
            <Card.Body className="cards_class">
              <Card.Title className="card_text">18+</Card.Title>
              <Card.Text className="card_text">
             Courses for grown pepole that want to learn about chess and play with pepole in their own age.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBAOy-f8vUwNlr7nWrkEAPKd-RApeSFhY7A&usqp=CAU"
            />
            <Card.Body className="cards_class">
              <Card.Title className="card_text">BEGINNRES</Card.Title>
              <Card.Text className="card_text">
                This is Course for beginners that know how to play chess a little.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="data:image/jpeg;base64,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"
            />
            <Card.Body className="cards_class">
              <Card.Title className="card_text">NORMAL</Card.Title>
              <Card.Text className="card_text">
              This is Course for chess players  that know how to play chess and want to learn more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWM-QT-doseilGTvJSZW3422iIL15WtCVuQ&usqp=CAU"
            />
            <Card.Body className="cards_class">
              <Card.Title className="card_text">ADVANCED</Card.Title>
              <Card.Text className="card_text">
              This is Course for advanced players  that want to improve their skills in chess.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
      </Row>
    </div>
  );
}
